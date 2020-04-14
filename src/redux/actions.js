const ACTIONS = {
    LOADING_DATA: 'LOADING_DATA',
    LOADING_DATA_SUCCESS: 'LOADING_DATA_SUCCESS',
    LOADING_DATA_FAILED: 'LOADING_DATA_FAILED',
    TOGGLE_COMPARE: 'TOGGLE_COMPARE',
}




const loadingData = () => ({
    type: ACTIONS.LOADING_DATA,
})
const loadingDataSuccess = (data) => ({
    type: ACTIONS.LOADING_DATA_SUCCESS,
    payload: {
        data
    }
})
const loadingDataFailed = () => ({
    type: ACTIONS.LOADING_DATA_FAILED,
})
const toggleCompare = (id) => ({
    type: ACTIONS.TOGGLE_COMPARE,
    payload: {
        id
    }
})





export {
    ACTIONS,
    loadingData,
    loadingDataSuccess,
    loadingDataFailed,
    toggleCompare,
}