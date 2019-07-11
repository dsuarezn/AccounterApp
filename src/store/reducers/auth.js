import {
    SET_AUTH_DATA,
    REMOVE_AUTH_DATA
} from '../actions/actionTypes';





const initialAuthState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios
    securityData:{
        userName:null,
        tokenInfo:null,
        userGrants:null
    },
    datosPerfil:[],
    thisversion : 1.0,
    currentVersion : 1.0
}



const authReducer = (state = initialAuthState, action) => { 
    switch(action.type){
        case  SET_AUTH_DATA:        
            return {
                ...state,
                securityData:action.authData               
            }
        case  REMOVE_AUTH_DATA:        
            return {
                ...state,                 
                securityData:{
                    ...state.securityData,
                    userName:null,
                    tokenInfo:null,
                    userGrants:null
                }                          
            }    
        default:
            return state;
    }
}




    
    export default authReducer;
