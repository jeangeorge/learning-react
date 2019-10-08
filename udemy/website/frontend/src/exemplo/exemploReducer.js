const INITIAL_STATE = {
    name: '',
    address: '',
    phone: '',
    email: '',
    list: [

    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'ADDRESS_CHANGED':
            return { ...state, address: action.payload }
        case 'PHONE_CHANGED':
            return { ...state, phone: action.payload }
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload }
        case 'EXEMPLO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'EXEMPLO_ADDED':
            return { ...state, name: '', address: '', phone: '', email: ''}
        case 'ADD_USER':
            return [ ...state.list, action.payload ]
        default:
            return state
    }
}