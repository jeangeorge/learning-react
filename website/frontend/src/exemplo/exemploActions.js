import axios from 'axios'

const URL = 'http://sage.saude.gov.br/paineis/aqt/lista_farmacia.php?output=json&'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(URL, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Type': 'application/json'
        }
    })

    return {
        type: 'EXEMPLO_SEARCHED',
        payload: request
    }
}