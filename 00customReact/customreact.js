
function customRender(mainContainer,reactElement){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children;

    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
        console.log(`${prop} : ${reactElement.props[prop]}`);
    }
    mainContainer.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    Children: "Hey click me to visit "

}

const mainContainer = document.getElementById('root');
customRender(mainContainer,reactElement);