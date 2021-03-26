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

// export const executeSelector=(state:AppStateType)=>{
//     return state.mainPage.execute;
// }
export const requestSelector=(state:AppStateType)=>{
    return state.mainPage.reqNumber;
}
export const userSelector=(state:AppStateType)=>{
    return state.mainPage.authUser;
}
export const saveReqSelector=(state:AppStateType)=>{
    return state.mainPage.savedReq;
}

export const editSelector=(state:AppStateType)=>{
    return state.mainPage.edit;
}

