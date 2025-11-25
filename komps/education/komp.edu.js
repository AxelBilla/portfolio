window.addEventListener("DOMContentLoaded", ()=>{
    const edu_KOMPACTED = new Kompacted(true, "education");
    
    let edu_scope = document.body;

    edu_KOMPACTED.set("educations", educations);
    edu_KOMPACTED.new((kmptd)=>{

        kmptd.add("education",
            `
            <info class="buttons">
                <p>edu_name</p>
                <p>edu_location</p>
                <p> <span>edu_start_year</span> <span>-</span> <span>edu_end_year</span></p>
            </info>
            <content>
            </content>
            `,
            "load", (self)=>{
                let setValue = ()=>{
                    let values = Language.getValue(JSON.parse(self.Values().content));
                    
                    let info = self.getElementsByTagName("info")[0];
                    
                    let ps = info.getElementsByTagName("p");
                    let spns = info.getElementsByTagName("span");
                    
                    let content = self.getElementsByTagName("content")[0];

                    ps[0].innerText = values.name;
                    ps[1].innerText = values.location;
                    spns[0].innerText = values.start_year;
                    spns[2].innerText = values.end_year;

                    let titles = Object.values(values.content.titles);
                    let para = Object.values(values.content.paragraphs);
                    let imgs = Object.values(values.content.images);
                    
                    content.replaceChildren();
                    for(let i = 0; i<titles.length; i++){
                        let el_content = document.createElement("kompact");
                        el_content.setAttribute("as", "education_content");
                        el_content.setAttribute("title", titles[i]);
                        el_content.setAttribute("paragraph", para[i]);
                        el_content.setAttribute("image", imgs[i]);
                        content.appendChild(el_content);
                    }
                    kmptd.load(content, true);
                }
                setValue();
                Language.onUpdate(setValue);

                let info = self.getElementsByTagName("info")[0];
                let content = self.getElementsByTagName("content")[0];
                let default_display = content.style.display;
                content.style.display = "none";
                info.addEventListener("click", ()=>{
                    // need animation but god enough for now
                    if(content.style.display === "none") content.style.display = default_display;
                    else content.style.display = "none";
                })
            }
        );

        kmptd.add("education_content",
            `
            <text>
                <p><span>title</span></p>
                <p><span>paragraph</span></p>
            </text>
            `,
            "load", (self)=>{
                let content = self.Values();
                let spns = self.getElementsByTagName("span");

                spns[0].innerText = content.title;
                spns[1].innerText = content.paragraph;

                let image = document.createElement("img");
                image.setAttribute("src", PATH.IMAGES+content.image);
                self.appendChild(image);
            }
        )

    }, edu_scope, true)

})

class Education{
    constructor(name, location, start_year, end_year, content, lang){
        this.content = Language.new();;
        let edu_infos = new Education.INFO(name, location, start_year, end_year, content);
        Language.setValue(this.content, edu_infos, lang)
    }

    static INFO = class{
        constructor(name, location, start_year, end_year, content){
            this.name = name;
            this.location = location;
            this.start_year = start_year;
            this.end_year = end_year
            this.content = content;
        }
    }

}


//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const educations = []
educations.push(new Education("BTS Systèmes Informatiques aux Entreprises\nOption SLAM", "Lycée Paris Turgot", 2024, 2026,
    {
        titles: {
            t1: "Support et mise à disposition de services informatiques",
            t2: "Cybersécurité des services informatiques",
            t3: "Conception et développement d'applications"
        },
        paragraphs: {
            p1: "Former à répondre aux attentes des utilisateurs en assurant la disponibilité des services informatiques existants. En mesure de prendre en compte les besoins informatiques dans l'entreprise et d'accompagner la transformation numérique des services informatiques, tout en maintenant son employabilité. Acquiert les compétences pour gérer le patrimoine informatique, répondre aux incidents, développer la présence de l'entreprise sur le Web, organiser son propre développement professionnel tout en s'intégrant aux équipes pour travailler en mode projet.",
            p2: "Travaille à la cybersécurité et à l'analyse des risques encourus par les entreprises en tenant compte des dimensions techniques, organisationnelles ou encore juridiques. Obtient ainsi des compétences sur la protection des données et l'identité numérique de l'entreprise, la sécurisation des équipements et des usages des utilisateurs. Participe à la cybersécurisation d'une solution applicative et de son développement.",
            p3: "Participe à la conception, au développement, ainsi qu'au déploiement et à la maintenance des composants logiciels d'une solution applicative (Web, mobile, client…). Acquiert ainsi des compétences en conception et développement d'une solution applicative, en maintenance de celle-ci, mais aussi en bases de données, en gestion des données numériques et en gestion de version (git/forme logicielle)."
        },
        images: {
            img1: "meeting.png",
            img2: "phishing.png",
            img3: "programming.png"
        }
    }, Language.list.FRENCH.code))

Language.setValue(educations[0].content,
    new Education.INFO(
        "BTS Systèmes Informatiques aux Entreprises\nOption SLAM\n[Higher BTEC Equivalent]",
        "Paris Turgot",
        2024, 2026,
        {
            titles: {
                t1: "IT Services and Support",
                t2: "Cybersecurity for IT Departments",
                t3: "Application Design and Development"
            },
            paragraphs: {
                p1: "Trained to meet user expectations by ensuring the availability of existing IT infrastructure. Able to account for the IT needs of the company and support the digital transformation of IT departments, while maintaining employability. Acquire the skills to manage IT assets, respond to incidents, develop the company's presence on the Web, organize their own professional development while integrating into teams to complete projects.",
                p2: "Works on cybersecurity and risk analysis for companies, taking into account technical, organizational and legal aspects. Acquires skills in data protection and corporate digital identity, and in insuring the safety of equipments and users. Participate in insuring the security of an application and its development.",
                p3: "Participates in the design, development, deployment and maintenance of the software components of an application (Web, mobile, client...). Acquires skills in the design and development of an application, and its maintenance, as well as in databases, digital data management and version management (git)."
            },
            images: {
                img1: "meeting.png",
                img2: "phishing.png",
                img3: "programming.png"
            }
        }), Language.list.ENGLISH.code);





educations.push(new  Education("Bac Pro Systèmes Numériques\nOption RISC", "Lycée Professionnel Jacques Prévert", 2019, 2023, {
    titles: {
        t1: "Appréhender la mise en oeuvre d'un projet simulé ou réel d'installation d'un système",
        t2: "Analyser le fonctionnement de l'installation actuelle ou de l'équipement en vue de l'intervention",
        t3: "Effectuer les tests, certifier le support physique",
        t4: "Vérifier la conformité du fonctionnement des matériels et logiciels identifiés puis de l'installation"
    },
    paragraphs: {
        p1: "Faire un bilan de l'existant et recueillir les informations relatives à l'exploitation et aux caractéristiques des matériels de l'installation.",
        p2: "Planifier l'intervention, réaliser l'intégration matérielle ou logicielle d'un équipement, effectuer les tests nécessaires à la validation du fonctionnement des équipements, préparer le plan d'action puis établir tout ou partie du plan d'implantation et de câblage.",
        p3: "Installer, configurer les éléments du système et vérifier la conformité du fonctionnement, établir un pré diagnostic à distance, vérifier la conformité du support et des alimentations en énergie, le fonctionnement des matériels et logiciels en interaction, analyser et interpréter les indicateurs de fonctionnement et établir un diagnostic ; réaliser l'intervention.",
        p4: "Mettre à jour les documents relatant les historiques des interventions, communiquer lors de l'intervention, déceler et mettre en évidence les besoins du client, renseigner le rapport de recette ou le bon d'intervention, gérer ses lots de matériel, son temps d'intervention et les ressources."
    },
    images: {
        img1: "report_sheets.png",
        img2: "computer_support.png",
        img3: "router.png",
        img4: "filled_letter.png"
    }
}, Language.list.FRENCH.code))

Language.setValue(educations[1].content,
    new Education.INFO(
        "Bac Pro Systèmes Numériques\nOption RISC\n[BTEC Equivalent]",
        "Vocational High School Jacques Prévert",
        2019, 2023,
        {
            titles: {
                t1: "Understanding implementations of simulated/physical networks",
                t2: "Analyzing the inner workings of networks and equipments prior to interventions",
                t3: "Performing tests, certifying physical integrity",
                t4: "Ensuring a smooth user experience"
            },
            paragraphs: {
                p1: "Keeping track of a network's state and gathering information on its operations and characteristics.",
                p2: "Planning interventions, performing hardware and/or software integrations, carrying out tests to ensure usability, drafting action plans and crafting appropriate implementation plans.",
                p3: "Setting up functional systems, carrying out remote diagnosis, guaranteeing serviceability of a system's components, providing smooth interactions between hardware and software, interpreting operating indicators to draw up a diagnosis, carrying out interventions",
                p4: "Keeping service logs up-to-date, communicating during interventions, identifying and highlighting customer needs, filling in acceptance reports and/or service orders, managing equipments batches, service time and resources.",
            },
            images: {
                img1: "report_sheets.png",
                img2: "computer_support.png",
                img3: "router.png",
                img4: "filled_letter.png"
            }
        }
    ), Language.list.ENGLISH.code);