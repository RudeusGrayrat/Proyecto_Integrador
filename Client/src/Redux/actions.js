export const addFav = (character)=>({
    type: "ADD_FAV",
    payload: character
})
export const removeFav = (id)=>({
    type: "REMOVE_FAV",
    payload: id
})