import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

let user_id = 11


export const changeName = (event) => ({
    type: 'NAME_CHANGED',
    payload: event.target.value
})

export const changeAddress = (event) => ({
    type: 'ADDRESS_CHANGED',
    payload: event.target.value
})

export const changePhone = (event) => ({
    type: 'PHONE_CHANGED',
    payload: event.target.value
})

export const changeEmail = (event) => ({
    type: 'EMAIL_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(URL)

    return {
        type: 'EXEMPLO_SEARCHED',
        payload: request
    }
}

// export const addUser = (user) => ({
//     type: 'ADD_USER',
//     id: user_id++,
//     user
// })

export function addUser(name, address, phone, email) {
    return {
        type: 'ADD_USER',
        payload: {
            id: user_id++,
            name,
            address,
            phone,
            email
        }
    }
}

export const deleteUser = (id) => ({
    type: 'DELETE_USER',
    id: id
})