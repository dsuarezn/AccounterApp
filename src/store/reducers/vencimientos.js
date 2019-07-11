import {
    LOAD_VENCIMIENTOS
} from '../actions/actionTypes';




const vencimientosInitialState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios     
    vencimientos:[]
}



const vencimientosReducer = (state = vencimientosInitialState, action) => {   
        switch(action.type){          
            case  LOAD_VENCIMIENTOS:
                return {
                    ...state,
                    vencimientos:{
                        ...state.vencimientos,
                        [action.contrib_key]:state.vencimientos[action.contrib_key].concat(action.vencimiento_key),
                    }              
                }   
          
            default:
                return {
                    ...state, state
                }
        }
    }
    


   

    
    export default vencimientosReducer;
