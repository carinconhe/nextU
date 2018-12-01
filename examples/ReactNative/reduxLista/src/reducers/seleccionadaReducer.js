export default (state = null,action) =>{
    switch (action.type) {
        case 'seleccionarFruta':
            return action.payload;
        default:
            return state;
    }
    
};