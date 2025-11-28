window.addEventListener("DOMContentLoaded", ()=>{
    const project_KOMPACTED = new Kompacted(true, "project");
    
    let project_scope = document.body;

    project_KOMPACTED.set("projects", projects.reverse())
    project_KOMPACTED.new((kmptd)=>{
        kmptd.add("project",
            `
            <titles class="buttons">
                <a>project_name</a>
                <p>project_date</p>
            </titles>
            <content>
                <text>
                </text>
            </content>
            `,
            "load", (self)=>{
                let setValue = ()=> {
                    let values = Language.getValue(JSON.parse(self.Values().content));

                    let title = self.getElementsByTagName('titles')[0];
                    let title_name = title.getElementsByTagName('a')[0];
                    let title_date = title.getElementsByTagName('p')[0];
                    title_name.innerHTML = values.name;
                    title_name.href = values.url;
                    title_date.innerHTML = values.date;

                    let text = self.getElementsByTagName("text")[0];
                    let content = Object.values(values.content);
                    
                    text.replaceChildren();
                    Web.Create.Elements(text,"item", `
                    <item>
                        <sub>
                        <p var="title">main_title</p>
                        <p var="text">main_text</p>
                        </sub>
                        <img var="image">
                    </item>
                    `, content);
                    
                }
                setValue();
                Language.onUpdate(setValue);

                let title = self.getElementsByTagName('titles')[0];
                let text = self.getElementsByTagName("text")[0];
                let default_display = text.style.display;
                text.style.display = "none";
                title.addEventListener("click", (e)=>{
                    // need animation but god enough for now
                    if(e.target.href==null) {
                        if (text.style.display === "none") text.style.display = default_display;
                        else text.style.display = "none";
                    }
                })
            }
        );
        
    }, project_scope, true)
})

class Project{
    constructor(name, date, url, content, lang=Language.default) {
        this.content = Language.new();
        let info = new Project.INFO(name, date, url, content);
        Language.setValue(this.content, info, lang)
    }
    
    static INFO = class{
        constructor(name, date, url, content){
            this.name = name;
            this.date = date;
            this.url = url;
            this.content = content;
        }
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const projects = [];

projects.push(new Project("Lecteur en Ligne", "Octobre 2024", "https://reader.billiard.dev/", {
    main: {
        title: "Lecteur de bande-dessinée, comic book et autres média imagés",
        text: "Créer à l'occasion d'un projet proposé par nos professeurs avec comme objectif l'exploitation de nos compétences HTML et CSS en développant un site sur une thématique personnelle tout en respectant les instructions données.",
        image: {src: PATH.IMAGES+"webreader_sample.PNG"}
    },
    requirement: {
        title: "Obligations",
        text: "Redirection vers d'autres pages; Liens hypertexte vers des sites web liés au thème choisi; Utilisation de tableaux avec en-têtes de colonnes, fusion de lignes-colonnes et contenant des images; Utilisation de formulaires; Changement de feuilles de styles en un clic."
    },
    details: {
        title: "Détails",
        text: "Stack: HTML/CSS, JavaScript, JQuery."
    },
}, Language.list.FRENCH.code))

Language.setValue(projects[0].content, new Project.INFO("Web Reader", "October 2024", "https://reader.billiard.dev/", {
    main: {
        title: "Book Reader<br>\"From comics to manga, and even novels.\"",
        text: "Created for a project given by our teachers with the aim of exploiting our HTML and CSS skills by developing a themed personal website while respecting a given set of instructions.",
        image: Language.getValue(projects[0].content, Language.list.FRENCH.code).content.main.image
    },
    requirement: {
        title: "Requirements",
        text: "Redirection to other pages; Hyperlinks to thematically-related third-party websites; Using tables with headers, row-column merging and images; Using forms; One-click stylesheet switch."
    },
    details: {
        title: "Details",
        text: "Stack: HTML/CSS, JavaScript, JQuery."
    },
}), Language.list.ENGLISH.code);



projects.push(new Project("Caloric Fool", "Avril 2025", "https://calorie.billiard.dev/", {
    main: {
        title: "Traqueur de calories",
        text: "Créé à l'occasion d'un projet proposé par nos professeurs avec comme objectif l'exploitation du modèle MVC en développant un site sur une thématique personnelle tout en respectant les instructions données.",
        image: {src: PATH.IMAGES+"caloric_sample.PNG"}
    },
    requirement: {
        title: "Obligations",
        text: "Utilisation du modèle MVC; Création d'un MCD; Mise en place d'une base de données; Préparation de requêtes SQL; Présence de CRUD(s); Programmation Orientée Objets; Présence d'un Jeu d'Essai"
    },
    details: {
        title: "Détails",
        text: "Stack:\nHTML/CSS, PostgreSQL, Javascript, Node.js, Express.js, JQuery."
    }
}, Language.list.FRENCH.code))

Language.setValue(projects[projects.length-1].content, new Project.INFO("Caloric Fool", "April 2025", "https://calorie.billiard.dev/", {
    main: {
        title: "Calorie Tracker",
        text: "Created for a project given by our teachers with the aim of exploiting the MVC model by developing a themed personal website while respecting a given set of instructions.",
        image: Language.getValue(projects[projects.length-1].content, Language.list.FRENCH.code).content.main.image,
    },
    requirement: {
        title: "Requirements",
        text: "Exploiting the MVC model; Making a Conceptual Data Model; Setting up a Database; Safe SQL requests; Implementing CRUD(s); Object Oriented Programming; Providing test data."
    },
    details: {
        title: "Details",
        text: "Stack:\nHTML/CSS, PostgreSQL, Javascript, Node.js, Express.js, JQuery."
    },
}), Language.list.ENGLISH.code);

projects.push(new Project("Kompacted", "Octobre 2025", "https://github.com/AxelBilla/Kompacted", {
    main: {
        title: "Gestionnaire de Composants Simplifié",
        text: "Une librairie pour faciliter la production d'applications web utilisant JavaScript, en implémentant des composants côté client.",
        image: {src: PATH.IMAGES+"KOMPACTED_LOGO.svg"}
    },
    origin: {
        title: "Aussi vue ici!",
        text: "Un outil né d'un besoin de créer et d'itérer rapidement sur le contenu de sites (principalement) client-side."
    },
    details: {
        title: "Détails",
        text: "Stack:\nJavascript."
    }
}, Language.list.FRENCH.code))

Language.setValue(projects[projects.length-1].content, new Project.INFO("Kompacted", "October 2025", "https://github.com/AxelBilla/Kompacted", {
    main: {
        title: "Simple Component Manager",
        text: "A library meant to facilitate the production of web applications using JavaScript, by implementing client-side components.",
        image: Language.getValue(projects[projects.length-1].content, Language.list.FRENCH.code).content.main.image,
    },
    origin: {
        title: "Used on this very website!",
            text: "A tool born from a need to build (mostly) client-sided, yet easily iterated upon, websites."
    },
    details: {
        title: "Details",
        text: "Stack:\nJavascript."
    },
}), Language.list.ENGLISH.code);


projects.push(new Project("StayUpToDate!", "Novembre 2025", "https://github.com/AxelBilla/StayUpToDate", {
    main: {
        title: "Scraper de Flux",
        text: "Un outil pour se tenir à jour sur des sujets précis grâce à Reddit!",
        image: {src: PATH.IMAGES+"StayUpToDate.svg"}
    },
    origin: {
        title: {innerHTML: "Aussi utiliser ici!", event: {type: "click", func: (() =>{Web.Move.To.Endpoint("feed_page"); }).toString()}, class: "buttons"},
        text: ""
    },
    details: {
        title: "Détails",
        text: "Stack:\nC#, .NET, Javascript."
    }
}, Language.list.FRENCH.code))

Language.setValue(projects[projects.length-1].content, new Project.INFO("StayUpToDate!", "November 2025", "https://github.com/AxelBilla/StayUpToDate", {
    main: {
        title: "Feed Scraper",
        text: "A tool to keep yourself up-to-date on a given topic's news using Reddit!",
        image: Language.getValue(projects[projects.length-1].content, Language.list.FRENCH.code).content.main.image,
    },
    origin: {
        title: {innerHTML:"Also used here!", event: Language.getValue(projects[projects.length-1].content, Language.list.FRENCH.code).content.origin.title.event, class: "buttons"},
        text: ""
    },
    details: {
        title: "Details",
        text: "Stack:\nC#, .NET, Javascript."
    },
}), Language.list.ENGLISH.code);