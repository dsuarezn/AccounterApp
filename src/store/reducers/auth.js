import {
    SET_AUTH_DATA,
    REMOVE_AUTH_DATA,
    SET_SESSION_AUTH_DATA,
    SET_PROFILE_DATA
} from '../actions/actionTypes';





const initialAuthState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios
    securityData:{
        taccmobile:null,
        uuid:null,                    
        uuidg:null
    },
    tempSecurityData:{
        taccmobile:null,
        uuid:null,                    
        uuidg:null
    },
    profileData:{
        ciudad: null,
        correoElectronico: null, 
        noIdentificacion: null,
        nombreUsuario: null,
        password: null,
        telefono: null
    },
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
                    taccmobile:null,
                    uuid:null,                    
                    uuidg:null
                }                          
            } 
        case  SET_SESSION_AUTH_DATA:        
            return {
                ...state,
                tempSecurityData:action.authData               
            }
        case  SET_PROFILE_DATA:        
            return {
                ...state,
                profileData:action.profileData               
            }   
        default:
            return state;
    }
}




    
    export default authReducer;
