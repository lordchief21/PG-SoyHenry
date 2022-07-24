import {
    GET_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_DETAIL,
    CLEANER,
    CREATE_PRODUCT,
    PAGINACION,
    GET_FILTER_PRICE,
    GET_FILTER_BRAND,
    GET_ORDER_BY_NAME,
    GET_CATEGORIES
} from './actions'

const initialState = {
    data: [],
    copyData: [],
    searchedProducts: [],
    detail: [],
    clean: [],
    productsPerPage: 15,
    pages: 0,
    productsToRender: [],
    filterPrice: [],
    categories: []
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                data: payload,
                copyData: payload,
                filterPrice: payload
            };
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                searchedProducts: payload
            }
        case CREATE_PRODUCT:
            return {
                ...state,
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: payload
            };
        case CLEANER:
            return {
                ...state,
                clean: []
            };
        case PAGINACION:
            return {
                ...state,
                productsToRender: state.data.slice(payload, payload + state.productsPerPage)
            };
        case GET_FILTER_PRICE:
            return {
                ...state,
                data: payload
            }
        case GET_FILTER_BRAND:
            return {
                ...state,
                data: payload
            }
        case GET_ORDER_BY_NAME:
            return {
                ...state,
                data: payload
            }
        case GET_CATEGORIES:
            return {
                ...state,
                data: payload,
                categories: payload                
            }
        default: return state;
    }
}

export default rootReducer;