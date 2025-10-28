class PATH{
    static ROOT = "./";
    static ASSETS = PATH.ROOT+"assets/";
    static FONTS = PATH.ASSETS+"fonts/";
    static IMAGES = PATH.ASSETS+"images/";
}
class Web{
    
    static Move = class{
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
    static Create = class{
        static Element(parent, value){
            let element = document.createElement(value.tag);
            switch (typeof(value.content)){
                case typeof("u"):
                    element.innerHTML = value.content;
                    break;
                case typeof({}):
                    let properties = Object.entries(value.content)
                    for(let property of properties){
                        if(property[1] instanceof Web.Object.HTML.Tag){
                            Web.Create.Element(element, property[1])
                        } else {
                            if (property[0] === "innerHTML") {
                                element.innerHTML = property[1];
                            } else {
                                if (value.tag === "img" && property[0] === "src") element.setAttribute(property[0], PATH.IMAGES + property[1]);
                                else element.setAttribute(property[0], property[1]);
                            }
                        }
                    }
                    break;
            }
            parent.appendChild(element);
        }
        static Elements(parent, values){
            for (let value of Object.values(values)){
                console.log(value)
                Web.Create.Element(parent, value);
            }
        }
        
        static HTML = class{
            static Tag(tag, content){
                return new Web.Object.HTML.Tag(tag, content);
            }
        }
    }
    
    static Object = class{
        static HTML = class{
            static Tag = class{
                constructor(tag, content) {
                    this.tag = tag;
                    this.content = content;
                }
            }
        }
    }
}
