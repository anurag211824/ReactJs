
function customRender(){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }

     mainContainer.appendChild(domElement)

}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"click me to visit the google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)

let counter = 1
const counterPara = document.querySelector(".counter")
const inc = document.querySelector(".inc")
const dec = document.querySelector(".dec")
 counterPara.innerHTML = counter
inc.addEventListener("click",()=>{
    counter += 1
    counterPara.innerHTML = counter
})
dec.addEventListener("click",()=>{
    counter -= 1
    counterPara.innerHTML = counter
})
