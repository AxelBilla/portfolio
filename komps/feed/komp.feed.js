window.addEventListener("DOMContentLoaded", async()=>{
    const feed_KOMPACTED = new Kompacted(true,"feed");
    
    const feed_scope = document.body;
    feed_KOMPACTED.set("feed", await Request.All.Get.Posts());
    feed_KOMPACTED.new((kmptd)=>{
        kmptd.add("post",
            `
            <titles>
                <p>post_title</p>
            </titles>
            <content>
                    
            </content>
            `,
            "load", (self) => {
                const setValue = ()=> {
                    let values = Language.getValue(JSON.parse(self.Values().content));
                    
                    let title = self.children[0];
                    let title_text = title.children[0];
                    title_text.innerHTML = values.title;

                    let content = self.children[1];
                    content.replaceWith(Web.Create.Element("content", self.Values().html, values.content));

                }
                setValue();
                Language.onUpdate(setValue);
            }
        );
        
    })
})

class Post{
    constructor(title, html, content, tags, lang=Language.getDefault()) {
        this.content = Language.new();
        let infos = new Post.INFO(title, content);
        Language.setValue(this.content, infos, lang)
        
        this.html = html;
        this.tags = tags;
    }
    
    static INFO = class{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

class Request{
    static Reddit = class{
        static Fetch = class{
            static async Posts(limit){
                const request_reddit_feed = await fetch("http://54.37.69.170:9950/reddit/posts/vetted", {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({limit: limit}),
                })
                return await request_reddit_feed.json();
            }
        }
        static Get = class{
            static async Posts(limit){
                let reddit_posts = await Request.Reddit.Fetch.Posts(limit);
                let res_posts = [];
                for (let post of reddit_posts) {
                    res_posts.push(
                        new Post(post.id, `
                            <detail>
                                <author var="author"></author>
                                <date var="date"></date>
                            </detail>
                            <h1 var="title"></h1>
                            <embed var="img">
                            <a var="url"></a>
                            <p var="content"></p>
                            <origin var="origin">
                        `, {
                                author: post.author,
                                date: new Date(post.date).toLocaleString(),
                                title: post.title,
                                content: post.content,
                                origin: post.origin,
                                img: {src: (post.is_media ? post.url : ""), alt: ""},
                                url: {href: post.url, innerHTML: post.url}
                            },
                            [post.flair],
                            Language.list.FRENCH.code)
                    );
                }
                return res_posts;
            }
        }
    }
    static All = class{
        static Get = class{
            static async Posts(){
                let posts = [];
                posts = posts.concat(await Request.Reddit.Get.Posts(250));
                return posts;
            }
        }
    }
}

