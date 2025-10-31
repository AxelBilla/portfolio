window.addEventListener("DOMContentLoaded", ()=>{
    const pages_KOMPACTED = new Kompacted(true, "pages");
    
    let pages_scope = document.body;

    pages_KOMPACTED.new((kmptd)=>{
        kmptd.add("home",
            `
            <p var="welcome">welcome_msg</p>
            <img var="img_mountain">
            <button var="get_started">get_started_text</button>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                let setValue = ()=> {
                    let values = Language.getValue(pages.home.content, Language.getCurrent())
                    
                    let el = Web.Create.Element(pages.home.name, html, values);
                    self.innerHTML = el.innerHTML;
                    
                    Kompacted.load(self, true, pages.home.kompacted_list)

                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

    }, pages_scope, true)
})

class Page{
    constructor(name, content, kompacted_list = [], lang=Language.getDefault()) {
        this.content = Language.new();
        Language.setValue(this.content, content, lang)

        this.name = name;
        this.kompacted_list = kompacted_list;
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const pages = {
    home: new Page("home",
        {
            welcome: "Bienvenue",
            img_mountain: {src: PATH.IMAGES+"mountains.png", alt: "montagnes hivernale"},
            get_started: "Démarrer",
        },
        [],
        Language.list.FRENCH.code )
}

Language.setValue(pages.home.content, {
    welcome: "Welcome",
    img_mountain: {src: PATH.IMAGES+"mountains.png", alt: "snowy mountains"},
    get_started: "Get Started",
}, Language.list.ENGLISH.code);