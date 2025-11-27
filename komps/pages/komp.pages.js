window.addEventListener("DOMContentLoaded", ()=>{
    const pages_KOMPACTED = new Kompacted(true, "pages");
    
    let pages_scope = document.body;

    pages_KOMPACTED.new((kmptd)=>{
        kmptd.add("home_page",
            `
            <p var="welcome">welcome_msg</p>
            <button var="get_started" class="buttons">get_started_text</button>
            
            <content>
                <anchor id="home_content"></anchor>
                <about_me>
                    <img var="me_img">
                    <text>
                        <h1 var="me_title">me_title</h1>
                        <p var="me_text">me_text</p>
                        <button var="to_cv" class="buttons">to_cv_text</button>
                    </text>
                </about_me>
                <button var="to_feed" class="buttons">to_feed_text</button>
                <home_feed>
                    <foreach src="feed" as="post"></foreach>
                </home_feed>
            </content>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                let setValue = ()=> {
                    let values = Language.getValue(pages.home.content, Language.getCurrent())

                    let el = Web.Create.Element(pages.home.name, html, values);
                    self.replaceChildren(el);

                    // Takes a while for the feed to fill itself, so gotta timeout for a bit
                    setTimeout(()=>{
                        if(Kompacted.hasKompacted("feed")) Kompacted.load(self, true, [Kompacted.getKompacted("feed")])
                    }, 500)
                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

        kmptd.add("projects_page",
            `
            <h1><span var="title">project_title</span></h1>
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
            <h1><span var="title">socials_title</span></h1>
            <links>
                <foreach src="socials" as="social"></foreach>
            </links>
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

        kmptd.add("career_page",
            `
            <h1><span var="title">career_title</span></h1>
            <foreach src="careers" as="career"></foreach>
            `,
            "load", (self)=>{
                let html = self.innerHTML;
                self.classList.add(CSS.Class.list.pages.name);
                let setValue = ()=> {
                    let values = Language.getValue(pages.careers.content, Language.getCurrent())

                    let el = Web.Create.Element(pages.careers.name, html, values);
                    self.replaceChildren(el);

                    Kompacted.load(self, true, [Kompacted.getKompacted("career")])
                }
                setValue();
                Language.onUpdate(setValue);

            }
        );

        kmptd.add("feed_page",
            `
            <h1><span var="title">feed_title</span></h1>
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
            <h1><span var="title">cv_title</span></h1>
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
        get_started: {innerHTML: "<buttonText>Démarrer</buttonText>", event: {type: "click", func: ()=>{Web.Move.To.Element(document.getElementById("home_content"))}}},
        me_img: {src: PATH.IMAGES+"webreader_sample.PNG", alt: "Image de ma personne"},
        me_title: "fff",
        me_text: "jofejfeojfeojfooj",
        to_projects: {innerHTML: "<buttonText>PASSION</buttonText>", event: {type: "click", func: ()=>{Web.Move.To.Endpoint("projects_page"); }}},
        to_socials: {innerHTML: "<buttonText>Axel</buttonText>", event: {type: "click", func: ()=>{Web.Move.To.Endpoint("socials_page"); }}},
        to_cv: {innerHTML: "<buttonText>Mon CV</buttonText>", event: {type: "click", func: ()=>{Web.Move.To.Endpoint("cv_page"); }}},
        to_feed: {innerHTML: "<buttonText>Veille</buttonText>", event: {type: "click", func: ()=>{Web.Move.To.Endpoint("feed_page"); }}},
    },
    Language.list.FRENCH.code)

Language.setValue(pages.home.content, {
    welcome: "Welcome",
    get_started: {innerHTML: "<buttonText>Get Started</buttonText>", event: Language.getValue(pages.home.content).get_started.event},
    me_img: { src: Language.getValue(pages.home.content).me_img.src, alt: "Depiction of myself"},
    me_title: "Who am I?",
    me_text: "The name's <button var=\"to_socials\" class=\"buttons\">AXEL</button>,<br>a dev with a lil' too much <button var=\"to_projects\" class=\"buttons\">PASSION</button> dekpfe<br>",
    to_projects: {innerHTML: "<buttonText>PASSION</buttonText>", event: Language.getValue(pages.home.content).to_projects.event},
    to_socials: {innerHTML: "<buttonText>Axel</buttonText>", event: Language.getValue(pages.home.content).to_socials.event},
    to_cv: {innerHTML: "<buttonText>Check my CV</buttonText>", event: Language.getValue(pages.home.content).to_cv.event},
    to_feed: {innerHTML: "<buttonText>Feed</buttonText>", event: Language.getValue(pages.home.content).to_feed.event},
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



pages.careers = new Page("careers",
    {
        title: "Parcours"
    },
    Language.list.FRENCH.code)

Language.setValue(pages.careers.content,  {
    title: "Career"
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
