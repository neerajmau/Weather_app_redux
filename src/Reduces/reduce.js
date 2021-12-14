const initialState = {
    tempinfo: "Welcome to info",
    apiData: [],
    futureDate: ""
}
const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "APIDATA": state.apiData = action.data
            return { ...state }
        case "FUTUREDATE": state.futureDate = action.data
            return { ...state }
        default: return state;
    }

}
export default WeatherReducer;