import {
    SET_NOVEDADES_DATA
} from '../actions/actionTypes';




const notificacionesInitialState = {
    firstapicall:false, //la primera ves que llama al api para buscar cambios descarga todos los cambios     
    notificaciones : []
}


const notificacionesReducer = (state = notificacionesInitialState, action) => {
    switch(action.type){
        case  SET_NOVEDADES_DATA:        
            return {
                ...state,
                notificaciones:action.novedadesData
            }      
        default:
            return state;
    }
}


    export default notificacionesReducer;
