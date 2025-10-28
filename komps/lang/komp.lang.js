window.addEventListener("DOMContentLoaded", ()=>{
    const lang_KOMPACTED = new Kompacted(true, "lang");
    
    const lang_scope = document.body;

    lang_KOMPACTED.set("langs", Language.list);
    lang_KOMPACTED.new((kmptd)=>{
        kmptd.add("lang_icon",
            `
            <img src="lang_image" alt="lang_name">
            `,
            "load", (self)=>{
                let values = self.Values();
                
                let image = self.getElementsByTagName('img')[0];
                image.setAttribute('src', PATH.IMAGES+values.icon);
                image.setAttribute('alt', values.name);
                
                self.addEventListener("click", ()=>{
                    if(Language.getCurrent()!==values.code) Language.setLanguage(values.code);
                });
                
            }
        );
        
    }, lang_scope, true)
})
