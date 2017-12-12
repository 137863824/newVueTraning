export function addClass(el,className){  //添加class函数封装
    if(hasClass(el,className)){
        return
    }
    let nreClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}
export function hasClass(el,className){
    let reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
    return reg.text(el.className)
}