


// --- local
import { ACTIONS } from './actions';





const initState = {
    loadingStatus: null,
    items: [],
    addedToCompare: [],
}


const reducers = (state = initState, action) => {

    switch (action.type) {
        case ACTIONS.LOADING_DATA:
            return {
                ...state,
                loadingStatus: "loading"
            }
        case ACTIONS.LOADING_DATA_SUCCESS:
            return {
                ...state,
                loadingStatus: "success",
                items: action.payload.data
            }
        case ACTIONS.LOADING_DATA_FAILED:
            return {
                ...state,
                loadingStatus: "failed"
            }
        case ACTIONS.TOGGLE_COMPARE:
            let newAddedToCompare = [ ...state.addedToCompare ]
            let alreadyExists = newAddedToCompare.find(id => id === action.payload.id)
            if(alreadyExists) {
                newAddedToCompare = newAddedToCompare.filter(id => id !== action.payload.id)
            }
            else {
                if(newAddedToCompare.length < 4) {
                    newAddedToCompare.push(action.payload.id)
                }
            }

            return {
                ...state,
                addedToCompare: newAddedToCompare
            }
        default:
            return state
    }
}

export default reducers