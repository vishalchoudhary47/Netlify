const initialState = {
    news: []
}
const Apicall = (state = initialState , {type, payload}) => {
    if(type === "allNews") {
        state = {...state, news: payload}
        return state;
    }else {
        return state;
    }
}
export default Apicall;