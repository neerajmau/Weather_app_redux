export const apiData = (res) => {
    return {
        type: "APIDATA",
        data: res
    }
}
export const searchValue = (res) => {
    return {
        type: "SEARCHVALUE",
        data: res
    }
}