class PATH{
    static ROOT = "./";
    static ASSETS = PATH.ROOT+"assets/";
    static FONTS = PATH.ASSETS+"fonts/";
    static IMAGES = PATH.ASSETS+"images/";
}

class CSS{
    static Class = class{
        static list = {
            buttons: {name: "buttons"},
            pages : {name: "pages"},
        }
    }
}
class Web{
    
    static Move = class{
        static To = class {
            static endpoint(endpoint, optional_data={}) {
                let komp = document.createElement("kompact");
                komp.setAttribute(Kompacted.DefaultValues.KOMPACT_AS_KOMP_ATTRIBUTE, endpoint);

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
            
            static element(id, scroll_type = "smooth"){
                document.getElementById(id).scrollIntoView({behavior: scroll_type});
            }
        }
    }
    static Create = class{
        static Element(name, html, vars={}, vars_attr_name = "var"){
            let element = document.createElement(name);
            element.innerHTML = html;
            for(let v in vars){
                for(let el of element.getElementsByAttribute(vars_attr_name, v)){
                    if(typeof(vars[v])===typeof({})){
                        if(vars[v].hasOwnProperty("innerHTML")){
                            el.innerHTML = vars[v].innerHTML;
                        }
                        Web.Set.Attributes(el, vars[v])
                    } 
                    if(typeof(vars[v])===typeof("u")){
                        el.innerHTML = vars[v];
                    }
                    el.removeAttribute(vars_attr_name);
                }
            }

            return element;
        }
        static Elements(parent, name, html, vars={}, vars_attr_name = "var"){
            for (let value of Object.values(values)){
                parent.append(Web.Create.Element(name, html, vars, vars_attr_name));
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
            if(attribute==="event" && value.hasOwnProperty("func")) {
                element.addEventListener(value.type, value.func);
                return;
            }
            
            if(attribute==="innerHTML") return;
            
            element.setAttribute(attribute, value);
        }
        static Attributes(element, attribute_value_collection){
            for(let entry of Object.entries(attribute_value_collection)){
                Web.Set.Attribute(element, entry[0], entry[1]);
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
        console.log(child)
        if(child.hasAttribute(attr) && (child.getAttribute(attr) === value || value === null)) element_list.push(child)
        if(child.childElementCount>0) {
            element_list = element_list.concat(child.getElementsByAttribute(attr, value));
        }
    }
    return element_list;
}