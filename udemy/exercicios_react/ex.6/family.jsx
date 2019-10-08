import React from 'react'

export default props => (
    <div>
        <h1>Família</h1>
        {
            /*
                Família possui uma propriedade lastname, é preciso propagar essa propriedade para as classes filhas.
                Uma forma de fazer isso através da função cloneElement, cujo primeiro parametro são os filhos e a segunda são as propriedades que desejo passar.
                Não é uma boa prática passar diretamente as propriedades do pai para o filho, o ideal é passar um clone (utilizando o operador Spread)
                (SÓ FUNCIONA PARA UM ÚNICO ELEMENTO)
            */
            React.cloneElement(props.children, { ...props} )
        }
    </div>
)