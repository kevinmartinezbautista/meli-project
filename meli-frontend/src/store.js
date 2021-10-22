import { createStore } from "redux";

const initialState = {
    ultimaBusqueda: '',
    productos: [],
    idProductoDetalle: 0
}

const reducerBusqueda = (state = initialState, action) => {
    return state;
}
export default createStore(reducerBusqueda);