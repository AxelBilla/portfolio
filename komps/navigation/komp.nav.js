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
                let setValue = ()=>{
                    self.getElementsByTagName("p")[0].innerText = Language.getValue(JSON.parse(nav_data.content));
                }
                setValue();
                Language.onUpdate(setValue);
                
                self.addEventListener("click", ()=>{
                    WebMove.goto(nav_data.endpoint);
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
    new nav("projets", Language.list.FRENCH.code, "project"),
    new nav("cv", Language.list.FRENCH.code, "cv"),
    new nav("accueil", Language.list.FRENCH.code, "home"),
    new nav("education", Language.list.FRENCH.code, "edu"),
    new nav("socials", Language.list.FRENCH.code, "socials")
]

Language.setValue(nav_pages[0].content, "projects", Language.list.ENGLISH.code);
Language.setValue(nav_pages[2].content, "home", Language.list.ENGLISH.code);