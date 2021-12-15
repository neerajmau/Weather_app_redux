const initialState = {
    tempinfo: "Welcome to info",
    apiData: [],
    searchvalue: "Delhi"
}
const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APIDATA": state.apiData = action.data
            return { ...state }
        case "SEARCHVALUE": state.searchvalue = action.data
            return { ...state }
        default: return state;
    }

}
export default WeatherReducer;