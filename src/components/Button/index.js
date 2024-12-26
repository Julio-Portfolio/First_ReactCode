import React from "react";

//aqui ele esta recebendo props no (title)
//assim desestruturamos , isto é resuminos simplismente inserindo diretamente na propriedade do botão o 
//que gostaria de receber para retorno 
/*
export default function Button(title){
    return(
        <button>{title}</button>
    )
}
*/
// ou fazer indicando explicitamente que se trata de uma props
export default function Button(props){

    const {title}= props;

    return(
        <button>{title}</button>
    )
}