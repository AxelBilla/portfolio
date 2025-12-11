window.addEventListener("DOMContentLoaded", ()=>{
    const car_KOMPACTED = new Kompacted(true, "career");
    
    let car_scope = document.body;

    car_KOMPACTED.set("careers", careers.reverse());
    car_KOMPACTED.new((kmptd)=>{

        kmptd.add("career",
            `
            <info class="buttons">
                <p>car_name</p>
                <p>car_location</p>
                <p> <span>car_start_year</span><span>-</span><span>car_end_year</span></p>
            </info>
            <content>
            </content>
            `,
            "load", (self)=>{
                let setValue = ()=>{
                    let values = self.Values();
                    let content = Language.getValue(JSON.parse(values.content));
                    
                    let info = self.getElementsByTagName("info")[0];
                    
                    let ps = info.getElementsByTagName("p");
                    let spns = info.getElementsByTagName("span");
                    
                    let contents = self.getElementsByTagName("content")[0];

                    ps[0].innerText = content.name;
                    ps[1].innerText = content.location;
                    spns[0].innerText = content.start_year;
                    spns[2].innerText = content.end_year;

                    contents.replaceChildren();
                    Web.Create.Elements(contents, "career_content", values.html, content.content);
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

    }, car_scope, true)

})

class Career{
    constructor(html, name, location, start_year, end_year, content, lang){
        this.content = Language.new();
        let car_infos = new Career.INFO(name, location, start_year, end_year, content);
        Language.setValue(this.content, car_infos, lang)
        
        this.html = html;
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

const careers = []


careers.push(new  Career(`
            <text>
                <p><span var="title">title</span></p>
                <p><span var="paragraph">>paragraph</span></p>
            </text>
            <img var="image">
    `,
    "Bac Pro Systèmes Numériques\nOption RISC", "Lycée Professionnel\nJacques Prévert", 2019, 2023, {
        1: {
            title: "Appréhender la mise en oeuvre d'un projet simulé ou réel d'installation d'un système",
            paragraph: "Faire un bilan de l'existant et recueillir les informations relatives à l'exploitation et aux caractéristiques des matériels de l'installation.",
            image: {src: PATH.IMAGES+"report_sheets.png"},
        },
        2: {
            title: "Analyser le fonctionnement de l'installation actuelle ou de l'équipement en vue de l'intervention",
            paragraph: "Planifier l'intervention, réaliser l'intégration matérielle ou logicielle d'un équipement, effectuer les tests nécessaires à la validation du fonctionnement des équipements, préparer le plan d'action puis établir tout ou partie du plan d'implantation et de câblage.",
            image: {src: PATH.IMAGES+"computer_support.png"},
        },
        3: {
            title: "Effectuer les tests, certifier le support physique",
            paragraph: "Installer, configurer les éléments du système et vérifier la conformité du fonctionnement, établir un pré diagnostic à distance, vérifier la conformité du support et des alimentations en énergie, le fonctionnement des matériels et logiciels en interaction, analyser et interpréter les indicateurs de fonctionnement et établir un diagnostic ; réaliser l'intervention.",
            image: {src: PATH.IMAGES+"router.png"},
        },
        4: {
            title: "Vérifier la conformité du fonctionnement des matériels et logiciels identifiés puis de l'installation",
            paragraph: "Mettre à jour les documents relatant les historiques des interventions, communiquer lors de l'intervention, déceler et mettre en évidence les besoins du client, renseigner le rapport de recette ou le bon d'intervention, gérer ses lots de matériel, son temps d'intervention et les ressources.",
            image: {src: PATH.IMAGES+"filled_letter.png"}
        }
    }, Language.list.FRENCH.code))
Language.setValue(careers[careers.length-1].content,
    new Career.INFO(
        "Bac Pro Systèmes Numériques\nOption RISC\n[BTEC Equivalent]",
        "Vocational High School\nJacques Prévert",
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).start_year,
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).end_year,
        {
            1: {
                title: "Understanding implementations of simulated/physical networks",
                paragraph: "Keeping track of a network's state and gathering information on its operations and characteristics.",
                image: {src: Language.getValue(careers[careers.length-1].content).content["1"].image.src},
            },
            2: {
                title: "Analyzing the inner workings of networks and equipments prior to interventions",
                paragraph: "Planning interventions, performing hardware and/or software integrations, carrying out tests to ensure usability, drafting action plans and crafting appropriate implementation plans.",
                image: {src: Language.getValue(careers[careers.length-1].content).content["2"].image.src},
            },
            3: {
                title: "Performing tests, certifying physical integrity",
                paragraph: "Setting up functional systems, carrying out remote diagnosis, guaranteeing serviceability of a system's components, providing smooth interactions between hardware and software, interpreting operating indicators to draw up a diagnosis, carrying out interventions",
                image: {src: Language.getValue(careers[careers.length-1].content).content["3"].image.src},
            },
            4: {
                title: "Ensuring a smooth user experience",
                paragraph: "Keeping service logs up-to-date, communicating during interventions, identifying and highlighting customer needs, filling in acceptance reports and/or service orders, managing equipments batches, service time and resources.",
                image: {src: Language.getValue(careers[careers.length-1].content).content["4"].image.src}
            }
        }
    ), Language.list.ENGLISH.code);


careers.push(new  Career(`
            <text>
                <p><span var="title">title</span></p>
                <p><span var="paragraph">>paragraph</span></p>
            </text>
            <img var="image">
    `,
    "BTS Systèmes Informatiques aux Entreprises\nOption SLAM", "Lycée Paris Turgot", 2024, 2026, {
        1: {
            title: "Support et mise à disposition de services informatiques",
            paragraph: "Former à répondre aux attentes des utilisateurs en assurant la disponibilité des services informatiques existants. En mesure de prendre en compte les besoins informatiques dans l'entreprise et d'accompagner la transformation numérique des services informatiques, tout en maintenant son employabilité. Acquiert les compétences pour gérer le patrimoine informatique, répondre aux incidents, développer la présence de l'entreprise sur le Web, organiser son propre développement professionnel tout en s'intégrant aux équipes pour travailler en mode projet.",
            image: {src: PATH.IMAGES+"meeting.png"},
        },
        2: {
            title: "Cybersécurité des services informatiques",
            paragraph: "Travaille à la cybersécurité et à l'analyse des risques encourus par les entreprises en tenant compte des dimensions techniques, organisationnelles ou encore juridiques. Obtient ainsi des compétences sur la protection des données et l'identité numérique de l'entreprise, la sécurisation des équipements et des usages des utilisateurs. Participe à la cybersécurisation d'une solution applicative et de son développement.",
            image: {src: PATH.IMAGES+"phishing.png"},
        },
        3: {
            title: "Conception et développement d'applications",
            paragraph: "Participe à la conception, au développement, ainsi qu'au déploiement et à la maintenance des composants logiciels d'une solution applicative (Web, mobile, client…). Acquiert ainsi des compétences en conception et développement d'une solution applicative, en maintenance de celle-ci, mais aussi en bases de données, en gestion des données numériques et en gestion de version (git/forme logicielle).",
            image: {src: PATH.IMAGES+"programming.png"},
        }
    }, Language.list.FRENCH.code))

Language.setValue(careers[careers.length-1].content,
    new Career.INFO(
        "BTS Systèmes Informatiques aux Entreprises\nOption SLAM\n[Higher BTEC Equivalent]",
        "Paris Turgot",
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).start_year,
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).end_year,
        {
            1: {
                title: "IT Services and Support",
                paragraph: "Trained to meet user expectations by ensuring the availability of existing IT infrastructure. Able to account for the IT needs of the company and support the digital transformation of IT departments, while maintaining employability. Acquire the skills to manage IT assets, respond to incidents, develop the company's presence on the Web, organize their own professional development while integrating into teams to complete projects.",
                image: {src: Language.getValue(careers[careers.length-1].content).content["1"].image.src},
            },
            2: {
                title: "Cybersecurity for IT Departments",
                paragraph: "Works on cybersecurity and risk analysis for companies, taking into account technical, organizational and legal aspects. Acquires skills in data protection and corporate digital identity, and in insuring the safety of equipments and users. Participate in insuring the security of an application and its development.",
                image: {src: Language.getValue(careers[careers.length-1].content).content["2"].image.src},
            },
            3: {
                title: "Application Design and Development",
                paragraph: "Participates in the design, development, deployment and maintenance of the software components of an application (Web, mobile, client...). Acquires skills in the design and development of an application, and its maintenance, as well as in databases, digital data management and version management (git).",
                image: {src: Language.getValue(careers[careers.length-1].content).content["3"].image.src},
            }
        }
    ), Language.list.ENGLISH.code);



careers.push(new Career(`
        <column>
            <embed var="embed" src="report_link">
            <img var="image" src="exam_table">
        </column>
    `,
    "Stage Développement Unity C# (1/2)", "MONGAME", 2025, 2025,
    {
        1: {
            embed: {src: "https://docs.google.com/document/d/1h3c_9s8Du9m8zsmM8Z5swd3Q3CRuWN3bIGrADCvxwY8/", type: "application/pdf"},
            image: {src: PATH.IMAGES+"placeholder.png"},
        },
    },
    Language.list.FRENCH.code))

Language.setValue(careers[careers.length-1].content,
    new Career.INFO(
        "Unity C# Intern Developper (1/2)",
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).location,
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).start_year,
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).end_year,
        {
            1: {
                embed: {src: Language.getValue(careers[careers.length-1].content).content["1"].embed.src, type: Language.getValue(careers[careers.length-1].content).content["1"].embed.type},
                image: {src: Language.getValue(careers[careers.length-1].content).content["1"].image.src},
            },
        }
    ), Language.list.ENGLISH.code);



careers.push(new Career(`
        <column>
            <embed var="embed" src="report_link">
            <img var="image" src="exam_table">
        </column>
    `,
    "Stage Développement Unity C# (2/2)", "MONGAME", 2025, 2026,
    {
        1: {
            embed: {src: "", type: "application/pdf"},
            image: {src: PATH.IMAGES+"placeholder.png"},
        },
    },
    Language.list.FRENCH.code))

Language.setValue(careers[careers.length-1].content,
    new Career.INFO(
        "Unity C# Intern Developper (2/2)",
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).location,
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).start_year,
        Language.getValue(careers[careers.length-1].content, Language.list.FRENCH.code).end_year,
        {
            1: {
                embed: {src: Language.getValue(careers[careers.length-1].content).content["1"].embed.src, type: Language.getValue(careers[careers.length-1].content).content["1"].embed.type},
                image: {src: Language.getValue(careers[careers.length-1].content).content["1"].image.src},
            },
        }
    ), Language.list.ENGLISH.code);