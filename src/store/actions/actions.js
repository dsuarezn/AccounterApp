import {
    SET_CLIENT_VENC,
    SET_CLIENT_TYPE,
    SET_CLIENT_DATA,
    ADD_CLIENTE,
    ADD_VENCIMIENTO,
    SET_AUTH_DATA,
    REMOVE_AUTH_DATA,
    SET_PROFILE_DATA,    
    SET_SESSION_AUTH_DATA,
    SET_INDICADORES_DATA,
    SET_NOVEDADES_DATA,
    SET_EDIT_MODE,
    SELECT_CLIENTE,
    REMOVE_CLIENTE,
    UPDATE_CLIENTE
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
export const setEditionMode = (mode) => {
    return {
        type:SET_EDIT_MODE, 
        editMode: mode
    }
};
export const addCliente = (Contribuyente) => {
    return {
        type:ADD_CLIENTE, 
        contribuyente: Contribuyente
    }
};

export const updateCliente = (datosCliente) => {
    return {
        type:UPDATE_CLIENTE, 
        cliente: datosCliente
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

export const setProfileData = (datosPerfil) => {
    return {
        type:SET_PROFILE_DATA, 
        profileData: datosPerfil
    }
};

export const setIndicadoresData = (datos) => {
    return {
        type:SET_INDICADORES_DATA, 
        indicadoresData: datos
    }
};

export const setNovedadesData = (datos) => {
    return {
        type:SET_NOVEDADES_DATA, 
        novedadesData: datos
    }
};

export const selectClient = (client) => {
    return {
        type:SELECT_CLIENTE, 
        contribuyente: client
    }
};
export const removeClient = (uuid) => {
    return {
        type:REMOVE_CLIENTE, 
        uid: uuid
    }
};







