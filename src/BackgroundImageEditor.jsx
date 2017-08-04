const React = novi.react.React;
const Icons = novi.ui.icons;
const modal = novi.modal;
const acceptImages = novi.types.images;

const EditorItem = {
    trigger: Icons.ICON_BG_IMAGE,
    tooltip: "Replace Image",
    closeIcon: "submit",
    title: "Replace Image",
    onTriggerClick: onClick
};

export default EditorItem;


function onClick(element) {
    modal.fileUpload({
        path: novi.media.directory,
        accept: acceptImages,
        messages: {
            submit: "Upload Background Image",
            title: "Upload an image",
            body: 'Click on "Choose File" to upload your image.'
        },
        onSubmitClick: onSubmitClick.bind(this, element)
    })
}

function onSubmitClick(element, path, data) {
    if (data.underLimit){
        return setBackground(element, path);
    }
    let originalRatio = element.offsetWidth / element.offsetHeight;
    modal.imageCrop({
        path,
        aspect: originalRatio,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        onCrop: setBackground.bind(this, element, path)
    });
}

function setBackground(element, path){
    console.log(2);
    let correctPath = path.replace(/['|"]/g, ``);
    novi.element.setInlineStyle(element, "backgroundImage", `url(${correctPath})`);
    element.style.backgroundImage = `url(${correctPath})`;
}
