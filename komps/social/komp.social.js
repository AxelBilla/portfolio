window.addEventListener("DOMContentLoaded", ()=>{
    const social_KOMPACTED = new Kompacted();
    const social_scope = document.body;

    social_KOMPACTED.set("socials", socials)
    social_KOMPACTED.new((kmptd)=>{
        kmptd.add("social",
            `
            <a href="social_link">
                <img src="social_image" alt="social_name">
            </a>
            `,
            "load", (self)=>{
                let values = self.Values();
                
                let icon = self.getElementsByTagName('a')[0];
                icon.setAttribute('href', values.url);
                
                let image = icon.getElementsByTagName('img')[0];
                image.setAttribute('src', PATH.IMAGES+values.image);
                image.setAttribute('alt', values.name);
                
            }
        );
        
    }, social_scope, true)
})

class Social{
    constructor(name, url, image) {
        this.name = name;
        this.url = url;
        this.image = image;
    }
}

//////////////////////////////////
////           DATA           ////
//////////////////////////////////

const socials = [
    new Social("Github", "https://github.com/AxelBilla", "github.svg"),
    new Social("LinkedIn", "https://www.linkedin.com/axelbilla", "linkedin.svg"),
    new Social("Mail", "mailto:axelbillapro@gmail.com", "mail.svg")
]