import axios from "axios";

export const addFav = (character) => {
   const endpoint = "http://localhost:3001/rickandmorty/fav";
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         dispatch({
            type: "ADD_FAV",
            payload: data,
         });
      } catch (error) {
         console.error(error);
      }
   };
};

export const removeFav = (id) => {
   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);
         dispatch({
            type: "REMOVE_FAV",
            payload: data,
         });
      } catch (error) {
         console.error(error)
      }
   };
};