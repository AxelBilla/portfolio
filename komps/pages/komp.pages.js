window.addEventListener("DOMContentLoaded", ()=>{
    const pages_KOMPACTED = new Kompacted(true, "pages");
    
    let pages_scope = document.body;

    pages_KOMPACTED.new((kmptd)=>{
        kmptd.add("home_page",
            `
            <p var="welcome">welcome_msg</p>
            <img var="img_mountain">
            <button var="get_started">get_started_text</button>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                let setValue = ()=> {
                    let values = Language.getValue(pages.home.content, Language.getCurrent())

                    let el = Web.Create.Element(pages.home.name, html, values);
                    self.replaceChildren(el);

                    Kompacted.load(self, true, [])
                }
                setValue();
                Language.onUpdate(setValue);

            }
        );
        
        kmptd.add("projects_page",
            `
            <p var="title">project_title</p>
            <foreach src="projects" as="project"></foreach>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                let setValue = ()=> {
                    let values = Language.getValue(pages.projects.content, Language.getCurrent())
                    
                    let el = Web.Create.Element(pages.projects.name, html, values);
                    self.replaceChildren(el);

                    Kompacted.load(self, true, [Kompacted.getKompacted("project")])
                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

    }, pages_scope, true)
})

class Page{
    constructor(name, content, lang=Language.getDefault()) {
        this.content = Language.new();
        Language.setValue(this.content, content, lang)

        this.name = name;
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const pages = {
    home: new Page("home",
        {
            welcome: "Bienvenue",
            img_mountain: {src: PATH.IMAGES+"mountains.png", alt: "montagnes hivernale"},
            get_started: {innerHTML: "Démarrer", event: {type: "click", func: ()=>{Web.Move.goto("projects_page")}}},
        },
        Language.list.FRENCH.code),
    
    projects: new Page("projects",
        {
            title: "Projets"
        },
        Language.list.FRENCH.code)
}

Language.setValue(pages.home.content, {
    welcome: "Welcome",
    img_mountain: {src: PATH.IMAGES+"mountains.png", alt: "snowy mountains"},
    get_started: {innerHTML: "Get Started", event: Language.getValue(pages.home.content).get_started.event},
}, Language.list.ENGLISH.code);

Language.setValue(pages.projects.content,  {
        title: "Projects"
    },  Language.list.ENGLISH.code)