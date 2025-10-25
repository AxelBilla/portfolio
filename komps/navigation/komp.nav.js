window.addEventListener("DOMContentLoaded", ()=>{
    const nav_KOMPACTED = new Kompacted();
    let nav_scope = document.body;

    nav_KOMPACTED.set("nav", nav_pages);
    nav_KOMPACTED.new((k)=>{
        k.add("nav-icon",
            `
                <p>nav_name</p>
            `,
            "load", (self)=>{
                let nav_data = self.Values();
                let setValue = ()=>{
                    self.getElementsByTagName("p")[0].innerText = Language.getValue(JSON.parse(nav_data.display_names), Language.current);
                }
                setValue();
                Language.onUpdate(setValue);
                
                self.addEventListener("click", ()=>{eval(nav_data.onclick)(self)})
            }
        )
    }, nav_scope, true)

})

class nav {
    constructor(name, lang, onclick=()=>{}){
        this.display_names = Language.new();
        Language.setValue(this.display_names, name, lang);
        this.onclick=onclick;
    }
}


//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const nav_pages = [
    new nav("projets", "fr-FR", (e)=>{
        // TEST
        Language.setLanguage(Language.current == Language.default ? "en-US" : "fr-FR");
    }),
    new nav("cv", "fr-FR", (e)=>{console.log(e)}),
    new nav("accueil", "fr-FR", (e)=>{console.log(e)}),
    new nav("education", "fr-FR", (e)=>{console.log(e)}),
    new nav("socials", "fr-FR", (e)=>{console.log(e)})
]

Language.setValue(nav_pages[0].display_names, "projects", "en-US");
Language.setValue(nav_pages[2].display_names, "home", "en-US");