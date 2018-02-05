const React = novi.react.React;
import * as ExcerptFunction from "./ExcerptFunction";
import BackgroundImageEditor from "./BackgroundImageEditor";
import BackgroundImageSettings from "./BackgroundImageSettings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-background-image",
    title: "Novi Background Image",
    description: "Novi Background Image description",
    version: "1.0.10",
    dependencies: {
        novi: "0.9.0"
    },
    defaults: {
        querySelector: '[class*="custom-bg-image"]',
        childQuerySelector: '[class*="custom-bg-image-image"]'
    },
    ui: {
        editor: [BackgroundImageEditor],
        settings: <BackgroundImageSettings />,
    },
    excerpt : ExcerptFunction.validBgImage,
    onLanguageChange: onLanguageChange
};


function onLanguageChange(plugin){
    const messages = Language.getDataByKey("novi-plugin-background-image");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    return plugin;
}

novi.plugins.register(Plugin);