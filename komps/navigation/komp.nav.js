window.addEventListener("DOMContentLoaded", ()=>{
    const nav_KOMPACTED = new Kompacted(true,"nav");
    let nav_scope = document.body;

    nav_KOMPACTED.set("nav", nav_pages);
    nav_KOMPACTED.new((k)=>{
        k.add("nav_icon",
            `
                <p>nav_name</p>
            `,
            "load", (self)=>{
                let nav_data = self.Values();
                self.classList.add(CSS.Class.list.buttons.name);
                let setValue = ()=>{
                    let text = Language.getValue(JSON.parse(nav_data.content)).toUpperCase();
                    self.getElementsByTagName("p")[0].innerText = text;
                }
                setValue();
                Language.onUpdate(setValue);
                
                self.addEventListener("click", ()=>{
                    Web.Move.goto(nav_data.endpoint);
                })
            }
        )
    }, nav_scope, true)

})

class nav {
    constructor(name, lang, endpoint){
        this.content = Language.new();
        Language.setValue(this.content, name, lang);
        this.endpoint = endpoint;
    }
}


//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const nav_pages = [
    new nav("projets", Language.list.FRENCH.code, "projects_page"),
    new nav("cv", Language.list.FRENCH.code, "cv_page"),
    new nav("accueil", Language.list.FRENCH.code, "home_page"),
    new nav("veille", Language.list.FRENCH.code, "feed_page"),
    new nav("education", Language.list.FRENCH.code, "education_page")
]

Language.setValue(nav_pages[0].content, "projects", Language.list.ENGLISH.code);
Language.setValue(nav_pages[2].content, "home", Language.list.ENGLISH.code);
Language.setValue(nav_pages[3].content, "feed", Language.list.ENGLISH.code);