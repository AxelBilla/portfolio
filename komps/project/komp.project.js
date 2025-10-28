window.addEventListener("DOMContentLoaded", ()=>{
    const project_KOMPACTED = new Kompacted(true, "project");
    
    let project_scope = document.body;

    project_KOMPACTED.set("projects", projects)
    project_KOMPACTED.new((kmptd)=>{
        kmptd.add("project",
            `
            <titles>
                <p>project_name</p>
                <p>project_date</p>
            </titles>
            <content>
                <text>
                    <main>
                        <p>main_title</p>
                        <p>main_text</p>
                    </main>
                    <requirement>
                        <p>req_title</p>
                        <p>req_text</p>
                    </requirement>
                    <detail>
                        <p>detail_title</p>
                        <p>detail_text</p>
                    </detail>
                </text>
                <img src="" alt="">
            </content>
            `,
            "load", (self)=>{
                let setValue = ()=> {
                    let values = Language.getValue(JSON.parse(self.Values().content));

                    let title = self.getElementsByTagName('titles')[0];
                    let title_text = title.getElementsByTagName('p');
                    title_text[0].innerHTML = values.name;
                    title_text[1].innerHTML = values.date;

                    let text = self.getElementsByTagName("text")[0];
                    let content = Object.values(values.content);
                    for (let i = 0; i < text.children.length; i++) {
                        let txt = text.children[i].getElementsByTagName('p');
                        txt[0].innerHTML = content[i].title;
                        txt[1].innerHTML = content[i].text;
                    }

                    let image = self.getElementsByTagName('img')[0];
                    image.setAttribute('src', values.content.images.img1);
                }
                setValue();
                Language.onUpdate(setValue);
                
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

const projects = [
    new Project("Lecteur en Ligne", "Octobre 2024", "https://reader.billiard.dev/", {
        main: {
            title: "Lecteur de bande-dessinée, comic book et autres média imagés",
            text: "Créer à l'occasion d'un projet proposé par nos professeurs avec comme objectif l'exploitation de nos compétences HTML et CSS en développant un site sur une thématique personnelle tout en respectant les instructions données."
        },
        requirement: {
            title: "Obligations",
            text: "Redirection vers d'autres pages; Liens hypertexte vers des sites web liés au thème choisi; Utilisation de tableaux avec en-têtes de colonnes, fusion de lignes-colonnes et contenant des images; Utilisation de formulaires; Changement de feuilles de styles en un clic."
        },
        details: {
            title: "Détails",
            text: "Stack: HTML/CSS, JavaScript, JQuery."
        },
        images: {img1: ""}
    }, Language.list.FRENCH.code),
    
    new Project("Caloric Fool", "Avril 2025", "https://calorie.billiard.dev/", {
        main: {
            title: "Traqueur de calories",
            text: "Créé à l'occasion d'un projet proposé par nos professeurs avec comme objectif l'exploitation du modèle MVC en développant un site sur une thématique personnelle tout en respectant les instructions données."
        },
        requirement: {
            title: "Obligations",
            text: "Utilisation du modèle MVC; Création d'un MCD; Mise en place d'une base de données; Préparation de requêtes SQL; Présence de CRUD(s); Programmation Orientée Objets; Présence d'un Jeu d'Essai"
        },
        details: {
            title: "Détails",
            text: "Stack:\nHTML/CSS, PostgreSQL, Javascript, Node.js, Express.js, JQuery."
        },
        images: {img1: ""}
    }, Language.list.FRENCH.code)
]

Language.setValue(projects[0].content, new Project.INFO("Web Reader", "October 2024", "https://reader.billiard.dev/", {
    main: {
        title: "Book Reader\"From comics to manga, and even novels.\"",
        text: "Created for a project given by our teachers with the aim of exploiting our HTML and CSS skills by developing a themed personal website while respecting a given set of instructions."
    },
    requirement: {
        title: "Requirements",
        text: "Redirection to other pages; Hyperlinks to thematically-related third-party websites; Using tables with headers, row-column merging and images; Using forms; One-click stylesheet switch."
    },
    details: {
        title: "Details",
        text: "Stack: HTML/CSS, JavaScript, JQuery."
    },
    images: {img1: ""}
}), Language.list.ENGLISH.code);

Language.setValue(projects[1].content, new Project.INFO("Caloric Fool", "April 2025", "https://calorie.billiard.dev/", {
    main: {
        title: "Calorie Tracker",
        text: "Created for a project given by our teachers with the aim of exploiting the MVC model by developing a themed personal website while respecting a given set of instructions."
    },
    requirement: {
        title: "Requirements",
        text: "Exploiting the MVC model; Making a Conceptual Data Model; Setting up a Database; Safe SQL requests; Implementing CRUD(s); Object Oriented Programming; Providing test data."
    },
    details: {
        title: "Details",
        text: "Stack:\nHTML/CSS, PostgreSQL, Javascript, Node.js, Express.js, JQuery."
    },
    images: {img1: ""}
}), Language.list.ENGLISH.code);