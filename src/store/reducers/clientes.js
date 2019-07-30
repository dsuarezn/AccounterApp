import {
    SET_CLIENT_DATA,
    SET_CLIENT_TYPE,           
    SET_CLIENT_VENCIMIENTOS, 
    ADD_CLIENTE,
    REMOVE_CLIENTE,
    SELECT_CLIENTE,
    SET_EDIT_MODE,
    UPDATE_CLIENTE
} from '../actions/actionTypes';

const initialState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios
    tempCliente:{
        clientType:'',
        razonSocial:'',
        ciudad:'',
        nit:'', 
        granContribuyente:'',
        vencimientos:[], 
        uuid:null
    }, 
    editMode:false,              
    contribuyentes : [],
    contribuyenteSeleccionado:null
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
        case  SET_EDIT_MODE:        
            return {
                ...state,
                editMode:action.editMode
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
        case  UPDATE_CLIENTE:               
                return {
                    ...state,
                    contribuyentes: state.contribuyentes.map(data => {                                                
                        if(data.uuid === action.cliente.uuid) {                          
                          return action.cliente;
                        }
                        else{
                            return item;
                        }                        
                      })
                    }
                                       
        case  SET_CLIENT_VENCIMIENTOS:
                return {
                    ...state,
                    tempCliente:{
                        ...state.tempCliente,
                        vencimientos:action.listaVencimientos                        
                    }
                }
        case  ADD_CLIENTE:
            return {
                ...state,
                contribuyentes:state.contribuyentes.concat(action.contribuyente)
            }
        case  REMOVE_CLIENTE:
            return {
                ...state,
                contribuyentes:state.contribuyentes.filter(contrib=>{
                    return contrib.uuid !== action.uid
                })
            }
        case  SELECT_CLIENTE:
            return {
                ...state,
                contribuyenteSeleccionado:action.contribuyente
            }
            
   

            
        default:
            return state;
    }
}
    
export default contribuyenteReducer;
