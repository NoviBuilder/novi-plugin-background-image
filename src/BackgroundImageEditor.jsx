const React = novi.react.React;
const Icons = novi.ui.icons;
const Types = novi.types;
const Language = novi.language;
const messages = Language.getDataByKey("novi-plugin-background-image");
const EditorItem = {
    trigger: Icons.ICON_BG_IMAGE,
    closeIcon: "submit",
    title: messages.editor.title,
    tooltip: messages.editor.tooltip,
    onTriggerClick: onClick
};

export default EditorItem;


function onClick(element) {
    let ratio = element.offsetWidth / element.offsetHeight;
    novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), ratio, type: Types.mediaImage})
}

function onSubmitCrop(element, path){
    let correctPath = path.replace(/['|"]/g, ``);
    novi.element.setInlineStyle(element, "backgroundImage", `url(${correctPath})`);
    element.style.backgroundImage = `url(${correctPath})`;
}
