import {
    SET_CLIENT_DATA,
    SET_CLIENT_TYPE,           
    SET_CLIENT_VENCIMIENTOS, 
    ADD_CONTRIBUYENTE,
    REMOVE_CONTRIBUYENTE
} from '../actions/actionTypes';

const initialState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios
    tempCliente:{
        clientType:'',
        razonSocial:'',
        ciudad:'',
        nit:'', 
        granContribuyente:'',
        vencimientos:[]
    },               
    contribuyentes : []
}

const contribuyenteReducer = (state = initialState, action) => {
    switch(action.type){
        case  SET_CLIENT_TYPE:        
            return {
                ...state,
                tempCliente:{
                    ...state.tempCliente,
                    clientType:action.clientType
                }
            }
        case  SET_CLIENT_DATA:
            return {
                ...state,
                tempCliente:{
                    ...state.tempCliente,
                    clientType:action.clientData.clientType,
                    razonSocial:action.clientData.razonSocial,
                    ciudad:action.clientData.ciudad,
                    nit:action.clientData.nit,
                    granContribuyente:action.clientData.granContribuyente
                }
            }                        
        case  SET_CLIENT_VENCIMIENTOS:
                return {
                    ...state,
                    tempCliente:{
                        ...state.tempCliente,
                        vencimientos:action.listaVencimientos                        
                    }
                }
        case  ADD_CONTRIBUYENTE:
            return {
                ...state,
                contribuyentes:state.contribuyentes.concat(action.contribuyente)
            }
        case  REMOVE_CONTRIBUYENTE:
            return {
                ...state,
                contribuyentes:state.contribuyentes.filter(contrib=>{
                    return contrib.key !== action.contribuyente.key
                })
            }
   
        default:
            return state;
    }
}
    
export default contribuyenteReducer;
