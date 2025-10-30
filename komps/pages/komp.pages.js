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
                    let values = Language.getValue(pages.home.content)
                    let content = self.children[1];
                    content.replaceChildren(Web.Create.Element(pages.home.name, pages.home.html, values));
                    
                    Kompacted.load(self, true, pages.home.kompacted_list)

                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

    }, pages_scope, true)
})

class Page{
    constructor(name, html, content, kompacted_list = [], lang=Language.getDefault()) {
        this.content = Language.new();
        Language.setValue(this.content, content, lang)

        this.name = name;
        this.html = html;
        this.kompacted_list = kompacted_list;
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const pages = {
    home: new Page("home", 
        `
            <p var="p1"></p>
            <h1>test_global</h1>
            <img var=2>
        `,
        {p1: "test_fr", 2: {src: PATH.IMAGES+"placeholder.png", alt: "2_test"}},
        [],
        Language.list.FRENCH.code )
}

Language.setValue(pages.home.content, {p1: "test_en", 2: {src: PATH.IMAGES+"servers.png", alt: "3_test"}}, Language.list.ENGLISH.code);