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
                    let content_values = Object.values(values.content);
                    content.replaceChildren();
                    for (let i = 0; i < content_values.length; i++) {
                        let el_content = document.createElement("kompact");
                        el_content.setAttribute("name", "post_content");
                        el_content.setAttribute("content", JSON.stringify(content_values[i]));
                        content.appendChild(el_content);
                    }
                    kmptd.load(content, true)
                }
                setValue();
                Language.onUpdate(setValue);
            }
        );
        
        kmptd.add("post_content",
            `
            `,
            "load", (self) => {
                let values = JSON.parse(self.Values().content);

                Web.Create.Elements(self, values);
            }
        )
        
    }, feed_scope, true)
})

class Post{
    constructor(title, content, tags, lang) {
        this.tags = tags;
        this.content = Language.new();
        let infos = new Post.INFO(title, content);
        Language.setValue(this.content, infos, lang)
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
    new Post("test_1", {
            1: {
                p1: Web.Create.HTML.Tag("p", "1-1_test_p1")
            }}, 
        ["test", "1"],
        Language.list.FRENCH.code),
    
    new Post("test_2", {
            1: {
                p1: Web.Create.HTML.Tag("p", "2-1_test_p1"),
                img1: Web.Create.HTML.Tag("img", {src: "placeholder.png", alt: "2-1_test_img1"}),
                p2: Web.Create.HTML.Tag("p", "2-1_test_p2")
            },
            2: {
                p1: Web.Create.HTML.Tag("p", "2-2_test_p1")
            }
        },
        ["test", "2"],
        Language.list.FRENCH.code),
    
    new Post("test_3", {
            1: {
                p1: Web.Create.HTML.Tag("p", "3-1_test_p1")
            }, 
            2: {
                p1: Web.Create.HTML.Tag("p","3-2_test_p1"), 
                img1: Web.Create.HTML.Tag("img", {src: "placeholder.png", alt: "3-2_test_img1"})
            }, 
            3:{
                p1: Web.Create.HTML.Tag("p", "3-3_test_p1")
            }},
        ["test", "3"],
        Language.list.FRENCH.code),
]