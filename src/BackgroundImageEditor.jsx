const React = novi.react.React;
const Icons = novi.ui.icons;

const EditorItem = {
    trigger: Icons.ICON_BG_IMAGE,
    tooltip: "Replace Image",
    closeIcon: "submit",
    title: "Replace Image",
    onTriggerClick: onClick
};

export default EditorItem;


function onClick(element) {
    let ratio = element.offsetWidth / element.offsetHeight;
    novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), ratio})
}

function onSubmitCrop(element, path){
    let correctPath = path.replace(/['|"]/g, ``);
    novi.element.setInlineStyle(element, "backgroundImage", `url(${correctPath})`);
    element.style.backgroundImage = `url(${correctPath})`;
}
