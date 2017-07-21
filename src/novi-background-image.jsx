const React = novi.react.React;
import * as ExcerptFunction from "./ExcerptFunction";
import BackgroundImageEditor from "./BackgroundImageEditor";
import BackgroundImageSettings from "./BackgroundImageSettings";

const Plugin = {
    name: "novi-plugin-background-image",
    title: "Novi Background Image",
    description: "Novi Background Image description",
    version: "1.0.5",
    defaults: {
        querySelector: '[class*="custom-bg-image"]'
    },
    ui: {
        editor: [BackgroundImageEditor],
        settings: <BackgroundImageSettings />,
    },
    excerpt : ExcerptFunction.validBgImage
};

novi.plugins.register(Plugin);