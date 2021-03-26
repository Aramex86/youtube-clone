import { type } from "node:os";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getListsVideos } from "../../Api/api";
import { DataReqType, SavedRequestType, UsersType } from "../../Types/Types";
import { AppStateType } from "../store/Store";

const SEARCH_FIELD = "mainpageReducer/SEARCH_FIELD";
const SEARCH_RESULTS = "mainpageReducer/SEARCH_RESULTS";
const SEARCH_FAVORITE = "mainpageReducer/SEARCH_FAVORITE";
const EDIT = "mainpageReducer/EDIT";
const DELETE_ITEM_FAVORITE = "mainpageReducer/DELETE_ITEM_FAVORITE";
const USER = "mainpageReducer/USER";
const REQUEST_NUMBER = "mainpageReducer/REQUEST_NUMBER";
const SAVE_REQUEST = "mainpageReducer/SAVE_REQUEST";
const UPDATE_REQUEST = "mainpageReducer/UPDATE_REQUEST";

const initialState = {
  searchFieldValue: "",
  searchResults: {} as DataReqType,
  searchFavorite: [] as Array<string>,
  authUser: {} as UsersType,
  reqNumber: 12,
  savedReq: [] as Array<SavedRequestType>,
  edit: false,
};

type initialStateType = typeof initialState;

type ActionsTypes =
  | GetItemsType
  | SearchFieldValueType
  | SearchFav
  | DeleteFavType
  | UserType
  | ReqNumberType
  | SeavedReqType
  | UpdateRequestType
  | EditType;

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

const mainPageReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case SEARCH_FIELD: {
      return {
        ...state,
        searchFieldValue: action.searchFieldValue,
      };
    }
    case SEARCH_FAVORITE: {
      return {
        ...state,
        searchFavorite: [...state.searchFavorite, ...action.searchFavorite],
      };
    }
    case DELETE_ITEM_FAVORITE: {
      return {
        ...state,
        savedReq: [
          ...state.savedReq.filter(
            ({ nameReq }) => nameReq !== action.deteleFavorite.join()
          ),
        ],
      };
    }
    case USER: {
      return {
        ...state,
        authUser: action.authUser,
      };
    }
    case REQUEST_NUMBER: {
      return {
        ...state,
        reqNumber: action.reqNumber,
      };
    }

    case SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.searchResults,
      };
    }
    case SAVE_REQUEST: {
      return {
        ...state,
        savedReq: [...state.savedReq, ...action.savedReq],
      };
    }
    // case UPDATE_REQUEST: {
    //   return {
    //     ...state,
    //      savedReq: [...state.savedReq.map((item,i)=>{
    //       if(item.nameReq === action.updateRequest.nameReq){
    //         return{
    //           ...item,
    //           nameReq:action.updateRequest.nameReq,
    //           request:action.updateRequest.request,
    //           reqNum:action.updateRequest.reqNum,
    //           select:action.updateRequest.select,
    //         }
    //       }
    //     })],
    //   };
    // }
    case EDIT: {
      return {
        ...state,
        edit: action.edit,
      };
    }
    default:
      return state;
  }
};

type EditType = {
  type: typeof EDIT;
  edit: boolean;
};

export const editform = (edit:boolean): EditType => {
  return { type: EDIT,edit };
};
type SearchFieldValueType = {
  type: typeof SEARCH_FIELD;
  searchFieldValue: string;
};

export const searchValue = (searchFieldValue: string): SearchFieldValueType => {
  return { type: SEARCH_FIELD, searchFieldValue };
};
type SearchFav = {
  type: typeof SEARCH_FAVORITE;
  searchFavorite: Array<string>;
};

export const searchFav = (searchFavorite: Array<string>): SearchFav => {
  return { type: SEARCH_FAVORITE, searchFavorite };
};

type GetItemsType = {
  type: typeof SEARCH_RESULTS;
  searchResults: DataReqType;
};

export const items = (searchResults: DataReqType): GetItemsType => {
  return { type: SEARCH_RESULTS, searchResults };
};
type DeleteFavType = {
  type: typeof DELETE_ITEM_FAVORITE;
  deteleFavorite: Array<string>;
};

export const deleteFav = (deteleFavorite: Array<string>): DeleteFavType => {
  return { type: DELETE_ITEM_FAVORITE, deteleFavorite };
};

type UserType = {
  type: typeof USER;
  authUser: UsersType;
};

export const getUser = (authUser: UsersType): UserType => {
  return { type: USER, authUser };
};
type ReqNumberType = {
  type: typeof REQUEST_NUMBER;
  reqNumber: number;
};

export const requestNumber = (reqNumber: number): ReqNumberType => {
  return { type: REQUEST_NUMBER, reqNumber };
};
type SeavedReqType = {
  type: typeof SAVE_REQUEST;
  savedReq: Array<SavedRequestType>;
};

export const saveRequesModal = (
  savedReq: Array<SavedRequestType>
): SeavedReqType => {
  return { type: SAVE_REQUEST, savedReq };
};

export type UpdateRequestType = {
  type: typeof UPDATE_REQUEST;
  updateRequest: SavedRequestType;
};

export const updateRequest = (
  updateRequest: SavedRequestType
): UpdateRequestType => {
  return { type: UPDATE_REQUEST, updateRequest };
};

export const getSearchResults = (
  value: string,
  maxRes: number,
  orderVal: string
): ThunkType => async (dispatch: DispatchType) => {
  const res = await getListsVideos.getLists(value, maxRes,orderVal)
  
  if (value !== "") {
    dispatch(items(res));
  }
};

export default mainPageReducer;
