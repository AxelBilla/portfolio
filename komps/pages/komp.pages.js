window.addEventListener("DOMContentLoaded", ()=>{
    const pages_KOMPACTED = new Kompacted(true, "pages");
    
    let pages_scope = document.body;

    pages_KOMPACTED.new((kmptd)=>{
        kmptd.add("home_page",
            `
            <p var="welcome">welcome_msg</p>
            <img var="img_mountain">
            <br>
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
            <h1 var="title">project_title</h1>
            <foreach src="projects" as="project"></foreach>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                self.classList.add(CSS.Class.list.pages.name);
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

        kmptd.add("socials_page",
            `
            <h1 var="title">socials_title</h1>
            <foreach src="socials" as="social"></foreach>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                self.classList.add(CSS.Class.list.pages.name);
                let setValue = ()=> {
                    let values = Language.getValue(pages.socials.content, Language.getCurrent())

                    let el = Web.Create.Element(pages.socials.name, html, values);
                    self.replaceChildren(el);

                    Kompacted.load(self, true, [Kompacted.getKompacted("social")])
                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

        kmptd.add("education_page",
            `
            <h1 var="title">education_title</h1>
            <foreach src="educations" as="education"></foreach>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                self.classList.add(CSS.Class.list.pages.name);
                let setValue = ()=> {
                    let values = Language.getValue(pages.educations.content, Language.getCurrent())

                    let el = Web.Create.Element(pages.educations.name, html, values);
                    self.replaceChildren(el);

                    Kompacted.load(self, true, [Kompacted.getKompacted("education")])
                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

        kmptd.add("feed_page",
            `
            <h1 var="title">feed_title</h1>
            <foreach src="feed" as="post"></foreach>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                self.classList.add(CSS.Class.list.pages.name);
                let setValue = ()=> {
                    let values = Language.getValue(pages.feed.content, Language.getCurrent())

                    let el = Web.Create.Element(pages.feed.name, html, values);
                    self.replaceChildren(el);

                    Kompacted.load(self, true, [Kompacted.getKompacted("feed")])
                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

        kmptd.add("cv_page",
            `
            <h1 var="title">cv_title</h1>
            <kompact as="cv"></kompact>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                self.classList.add(CSS.Class.list.pages.name);
                let setValue = ()=> {
                    let values = Language.getValue(pages.cv.content, Language.getCurrent())

                    let el = Web.Create.Element(pages.cv.name, html, values);
                    self.replaceChildren(el);

                    Kompacted.load(self, true, [Kompacted.getKompacted("cv")])
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

const pages = {};

pages.home = new Page("home",
    {
        welcome: "Bienvenue",
        img_mountain: {src: PATH.IMAGES+"placeholder.png", alt: "montagnes hivernale"},
        get_started: {innerHTML: "Démarrer", event: {type: "click", func: ()=>{Web.Move.goto("projects_page")}}},
    },
    Language.list.FRENCH.code)

Language.setValue(pages.home.content, {
    welcome: "Welcome",
    img_mountain: Language.getValue(pages.home.content).img_mountain,
    get_started: {innerHTML: "Get Started", event: Language.getValue(pages.home.content).get_started.event},
}, Language.list.ENGLISH.code);


    
pages.projects = new Page("projects",
    {
        title: "Projets"
    },
    Language.list.FRENCH.code),
    
Language.setValue(pages.projects.content,  {
    title: "Projects"
},  Language.list.ENGLISH.code)



pages.socials = new Page("socials",
    {
        title: "Réseaux"
    },
    Language.list.FRENCH.code)

Language.setValue(pages.socials.content,  {
    title: "Socials"
},  Language.list.ENGLISH.code)



pages.educations = new Page("education",
    {
        title: "Éducation"
    },
    Language.list.FRENCH.code)

Language.setValue(pages.educations.content,  {
    title: "Education"
},  Language.list.ENGLISH.code)



pages.feed = new Page("feed",
    {
        title: "Veille"
    },
    Language.list.FRENCH.code)

Language.setValue(pages.feed.content,  {
    title: "Feed"
},  Language.list.ENGLISH.code)



pages.cv = new Page("cv",
    {
        title: "Curriculum Vitae"
    },
    Language.list.FRENCH.code)

Language.setValue(pages.cv.content,  {
    title: "Curriculum Vitae"
},  Language.list.ENGLISH.code)