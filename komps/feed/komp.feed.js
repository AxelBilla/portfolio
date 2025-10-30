window.addEventListener("DOMContentLoaded", ()=>{
    const feed_KOMPACTED = new Kompacted(true,"feed");
    
    const feed_scope = document.body;

    feed_KOMPACTED.set("feed", posts)
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
        
    }, feed_scope, true)
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

const posts = [
    new Post("test_1", `
            <p var="p1"></p>
        `,
        {p1: "1-1_test_p1"},
        ["test", "1"],
        Language.list.FRENCH.code),
    new Post("test_2", `
            <p var="p1"></p>
            <img var="img1">
        `,
        {p1: "2-1_test_p1", img1: {src: PATH.IMAGES+"placeholder.png", alt: "test_2-1_img"}},
        ["test", "1"],
        Language.list.FRENCH.code),
]