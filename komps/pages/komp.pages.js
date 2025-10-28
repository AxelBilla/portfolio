window.addEventListener("DOMContentLoaded", ()=>{
    const pages_KOMPACTED = new Kompacted(true, "pages");
    
    let pages_scope = document.body;

    pages_KOMPACTED.new((kmptd)=>{
        kmptd.add("home",
            `
            <header>
            </header>
            
            <content>
            </content>
            
            <footer>
            </footer>
            `,
            "load", (self)=>{
                let setValue = ()=> {
                    let values = Language.getValue(pages.home.content);
                    
                    let content = self.children[0];
                    let content_entries = Object.entries(values.content);
                    content.replaceChildren();
                    
                    for(let value of content_entries) {
                        let parent = document.createElement(value[0]);
                        Web.Create.Elements(parent, value[1]);
                        content.appendChild(parent)
                    }
                    
                    Kompacted.load(self, true, pages.home.kompacted_list)

                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

    }, pages_scope, true)
})

class Page{
    constructor(name, content, kompacted_list = [], lang=Language.default) {
        this.content = Language.new();
        let info = new Page.INFO(name, content);
        Language.setValue(this.content, info, lang)
        this.kompacted_list = kompacted_list;
    }
    
    static INFO = class{
        constructor(name, content){
            this.name = name;
            this.content = content;
        }
        
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const pages = {
    home: new Page("home", {
        ade: {
            p1: Web.Create.HTML.Tag("p", "2-1_test_p1"),
            img1: Web.Create.HTML.Tag("img", {src: "placeholder.png", alt: "2-1_test_img1"}),
            p2: Web.Create.HTML.Tag("p", {innerHTML: "dje", plc: Web.Create.HTML.Tag("p", "dkao")}),
        },
        bad: {
            p1: Web.Create.HTML.Tag("p", "2-2_test_p1"),
        }
    }, [], 
        Language.list.FRENCH.code),
}