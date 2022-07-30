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
    GET_CATEGORIES,
    GET_ALL_CATEGORIES,    
    GET_FILTERS,
    GET_CATE,
    LOGIN_USER
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
    categories: [],
    allCategories:[],
 
    laptos: [],    
    filters: [],
    cate: [],
    logged: []
    }

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                data: payload,
                copyData: payload,
            }
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
            }
        case CLEANER:
            return {
                ...state,
                detail: []
            }
        case PAGINACION:
            return {
                ...state,
                productsToRender: state.data.slice(payload, payload + state.productsPerPage)
            }
        case GET_FILTERS:
            return {
                ...state,
                data: payload,
                filters: payload,
                laptos: payload,
            }
        case GET_CATE:
            return {
                ...state,               
                cate: payload
            }
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: payload,
            }
        case LOGIN_USER:
            return {
                ...state,
                logged: payload
            }
        default: return state;
    }
}

export default rootReducer;