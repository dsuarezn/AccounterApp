import {
    SET_CLIENT_VENC,
    SET_CLIENT_TYPE,
    SET_CLIENT_DATA,
    ADD_CONTRIBUYENTE,
    ADD_VENCIMIENTO,
    SET_AUTH_DATA,
    REMOVE_AUTH_DATA,
    REG_NEW_USER,
    ADD_VENCIMIENTO_PERS,
    REMOVE_CONTRIBUYENTE,
    REMOVE_VENCIMIENTO,
    REMOVE_VENCIMIENTO_PERS 
} from './actionTypes';

export const setClientData = (clientinfo) => {
    return {
        type:SET_CLIENT_DATA, 
        clientData: clientinfo
    }
};
export const setClientType = (clientType) => {
    return {
        type:SET_CLIENT_TYPE, 
        clientType: clientType
    }
};
export const addContribuyente = (Contribuyente) => {
    return {
        type:ADD_CONTRIBUYENTE, 
        contribuyente: Contribuyente
    }
};

export const setAuthData = (tokendata) => {
    return {
        type:SET_AUTH_DATA, 
        authData: tokendata
    }
};

export const removeAuthData = () => {
    return {
        type:REMOVE_AUTH_DATA
    }
};

export const registerUserData = (usuario) => {
    return {
        type:REG_NEW_USER, 
        user: usuario
    }
};



export const setClientVenc = (listaVenc) => {
    return {
        type:SET_CLIENT_VENC, 
        listaVencimientos: listaVenc
    }
};
export const removeContribuyente = (contribuyente) => {
    return {
        type:ADD_CONTRIBUYENTE, 
        contribuyente: contribuyente
    }
};
export const addVencimiento = (datosvencimiento) => {
    return {
        type:ADD_VENCIMIENTO, 
        contrib_key: datosvencimiento.contrib_key,
        vencimiento_key: datosvencimiento.vencimiento_key
    }
};
export const removeVencimiento = (datosvencimiento) => {
    return {
        type:ADD_CONTRIBUYENTE, 
        contrib_key: datosvencimiento.contrib_key,
        vencimiento_key: datosvencimiento.vencimiento_key
    }
};