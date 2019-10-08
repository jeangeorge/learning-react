import React from 'react'

/*
    Map que pega os elementos dos filhos e devolve os mesmos elementos, mas com as propriedades do pai
    Recebe dois parametros:
        1 - Os filhos
        2 - Callback
    Percorre o array dos filhos e coloca os atributos do pai, no fim retorna eles
*/
function childrenWithProps(children, props) {
    return React.Children.map(
        props.children,
        child => React.cloneElement(child, {...props})
    )
}

export { childrenWithProps }