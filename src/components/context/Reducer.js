import {ADD_SERVICE, EDIT_SERVICE, FETCH_SERVICES, REMOVE_SERVICE} from "./types";

const handlers = {
    [FETCH_SERVICES]: (state, {payload}) => ({...state, services: payload }),
    [ADD_SERVICE]:(state, {payload}) =>({ ...state,  services: [...state.services, payload]}),
    [EDIT_SERVICE]:(state, {payload}) => ({ ...state,  services: state.services.map((service) => service.id === payload.id ? service = payload : service)}),
    [REMOVE_SERVICE]: (state, {payload}) => ({ ...state, services: state.services.filter(service => service.id !== payload) }),
    DEFAULT: state => state
};

export const reducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};