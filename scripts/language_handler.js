class Language{
    
    static list = {
        FRENCH: {name: "Français (FR)", code: "fr-FR", icon: "fr_fr.png"}, 
        ENGLISH: {name: "English (US)", code: "en-US", icon: "en_us.png"},
    }
    static current = Language.list.ENGLISH.code;
    static default = Language.list.FRENCH.code;

    static getCurrent(){
        return Language.current;
    }
    static getDefault(){
        return Language.default;
    }
    static new(){
        return {};
    }
    
    static event_onUpdate = new ObserverEvent();
    
    static onUpdate(func){
        this.event_onUpdate.subscribe(func);
    }
    static setLanguage(lang){ 
        this.current = lang;
        this.event_onUpdate.trigger(lang);
    }
    static getValue(multilingual_object, lang=Language.getDefault()){
        if(multilingual_object.hasOwnProperty(lang)) return multilingual_object[lang];
        return multilingual_object[Language.getDefault()];
    }
    static setValue(multilingual_object, content, lang=Language.getDefault()){
        multilingual_object[lang]=content;
    }
}

