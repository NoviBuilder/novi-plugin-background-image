
export function validBgImage(element){
    if (!element) return false;

    if ( !element.style.backgroundImage ) return true;

    // check for dynamic script added bg-image
    return !checkDynamicBg(element);

}

function checkDynamicBg(element){
    let staticStyle, dynamicStyle;
    staticStyle = novi.element.getInlineStyle(element, "backgroundImage");
    dynamicStyle = element.style.backgroundImage;
    return ((staticStyle !== dynamicStyle) && dynamicStyle.indexOf(staticStyle) > -1);
}
