import { AppStateType } from "../store/Store";

export const getItems=(state:AppStateType)=>{
    return state.mainPage.searchResults;
}
export const serachFav=(state:AppStateType)=>{
    return state.mainPage.searchFavorite;
}
export const serachName=(state:AppStateType)=>{
    return state.mainPage.searchFieldValue;
}

