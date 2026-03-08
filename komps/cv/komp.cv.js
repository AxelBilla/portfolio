window.addEventListener("DOMContentLoaded", ()=>{
    const cv_KOMPACTED = new Kompacted(true, "cv");
    const cv_scope = document.body;

    cv_KOMPACTED.new((kmptd)=>{
        kmptd.add("cv",
            `
            <embed src="cv_url" type="application/pdf">
            `,
            "load", (self)=>{
                let url = Language.getValue(cvs.axel.content, Language.getCurrent());
                
                let embed = self.getElementsByTagName('embed')[0];
                embed.setAttribute('src', url);
            }
        );
        
    }, cv_scope, true)
})

class CV{
    constructor(name, url, lang=Language.getDefault()) {
        this.content = Language.new();
        Language.setValue(this.content, url, lang);
        
        this.name = name;
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const cvs = {
    axel: new CV("Axel B.", "https://docs.google.com/document/d/10MCWkdkgN_4epa4_8X63AyPnD6pgT_mZMEw4avPpbwo/", Language.list.FRENCH.code),
}

Language.setValue(cvs.axel.content, "https://docs.google.com/document/d/1FzzamQA2iVRpHZxK5_X-cRYoYrk4UkYtWnhVOmRA8U8/", Language.list.ENGLISH.code);