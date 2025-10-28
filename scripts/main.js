class PATH{
    static ROOT = "./";
    static ASSETS = PATH.ROOT+"assets/";
    static FONTS = PATH.ASSETS+"fonts/";
    static IMAGES = PATH.ASSETS+"images/";
}

let KOMPACTED = {};

class WebMove{
    static goto(endpoint, optional_data={}) {
        let komp = document.createElement("kompact");
        komp.setAttribute(Kompacted.DefaultValues.KOMPACT_NAME_ATTRIBUTE, endpoint);
        
        if(!isNull(optional_data)){
            let data = Object.entries(optional_data)
            for(let entry of data){
                komp.setAttribute(entry[0], entry[1]);
            }   
        }
        
        let main = document.body.children[1];
        main.replaceChildren(komp);
        Kompacted.getKompacted('pages').load(main, true);
    }
}