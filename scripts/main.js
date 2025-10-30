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
        static Element(name, html, vars={}, vars_attr = "var"){
            let element = document.createElement(name);
            element.innerHTML = html;
            for(let v in vars){
                for(let el of element.getElementsByAttribute(vars_attr, v)){
                    if(typeof(vars[v])===typeof({})){
                        Web.Set.Attributes(el, vars[v])
                    } else {
                        el.innerHTML = vars[v];
                    }
                    el.removeAttribute(vars_attr);
                }
            }
            return element;
        }
        static Elements(parent, name, html, vars={}, vars_attr = "var"){
            for (let value of Object.values(values)){
                parent.append(Web.Create.Element(name, html, vars, vars_attr));
            }
        }
        
        static HTML = class{
            static Tag(tag, content){
                return new Web.Object.HTML.Tag(tag, content);
            }
        }
    }
    static Set = class{
        static Attribute(element, attribute, value){
            element.setAttribute(attribute, value);
        }
        static Attributes(element, attributes_obj){
            for(let entry of Object.entries(attributes_obj)){
                element.setAttribute(entry[0], entry[1]);
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

HTMLElement.prototype.getElementsByAttribute = function(attr, value=null){
    let element_list = [];
    for(let child of this.children){
        if(child.hasAttribute(attr) && (child.getAttribute(attr) === value || value === null)) element_list.push(child)
        if(child.childElementCount>0) element_list.concat(child.getElementsByAttribute(attr, value));
    }
    return element_list;
}