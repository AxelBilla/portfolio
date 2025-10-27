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
                    self.getElementsByTagName("p")[0].innerText = Language.getValue(JSON.parse(nav_data.content), Language.getCurrent());
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
        this.content = Language.new();
        Language.setValue(this.content, name, lang);
        this.onclick=onclick;
    }
}


//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const nav_pages = [
    new nav("projets", Language.list.FRENCH.code, (e)=>{console.log(e)}),
    new nav("cv", Language.list.FRENCH.code, (e)=>{console.log(e)}),
    new nav("accueil", Language.list.FRENCH.code, (e)=>{console.log(e)}),
    new nav("education", Language.list.FRENCH.code, (e)=>{console.log(e)}),
    new nav("socials", Language.list.FRENCH.code, (e)=>{console.log(e)})
]

Language.setValue(nav_pages[0].content, "projects", Language.list.ENGLISH.code);
Language.setValue(nav_pages[2].content, "home", Language.list.ENGLISH.code);