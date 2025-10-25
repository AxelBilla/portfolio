class Language{
    static current = "en-US";
    static default = "fr-FR";
    
    static event_onUpdate = new ObserverEvent();
    
    static onUpdate(func){
        this.event_onUpdate.subscribe(func);
    }
    static setLanguage(lang){
        this.current = lang;
        this.event_onUpdate.trigger(lang);
    }
    
    static new(){
        return {};
    }
    static getValue(multilingual_object, lang=Language.default){
        if(multilingual_object.hasOwnProperty(lang)) return multilingual_object[lang];
        return multilingual_object[Language.default];
    }
    static setValue(multilingual_object, content, lang=Language.default){
        multilingual_object[lang]=content;
    }
}

