window.addEventListener("DOMContentLoaded", ()=>{
    const pages_KOMPACTED = new Kompacted(true, "pages");
    
    let pages_scope = document.body;

    pages_KOMPACTED.new((kmptd)=>{
        kmptd.add("home",
            `
            <content>
                <foreach src="langs" as="lang_icon"></foreach>
                <foreach src="feed" as="post"></foreach>
                <foreach src="projects" as="project"></foreach>
                <foreach src="education_pages" as="education_page"></foreach>
                <foreach src="socials" as="social"></foreach>
            </content>
            <footer>
            
            </footer>
            `,
            "load", (self)=>{
                let setValue = ()=> {
                    let values = Language.getValue(pages.home.content);
                    
                    // change to specific Kompacted once I actually fill out the home page
                    Kompacted.load(self, true, Kompacted.getAllKompacted())

                }
                setValue();
                Language.onUpdate(setValue);
                
            }
        );
        
    }, pages_scope, true)
})

class Page{
    constructor(name, content, lang=Language.default) {
        this.content = Language.new();
        let info = new Page.INFO(name, content);
        Language.setValue(this.content, info, lang)
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
    home: new Page("home", {}),
}