import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getListsVideos } from "../../Api/api";
import { DataReqType } from "../../Types/Types";
import { AppStateType } from "../store/Store";

const SEARCH_FIELD = "mainpageReducer/SEARCH_FIELD";
const SEARCH_RESULTS = "mainpageReducer/SEARCH_RESULTS";
const SEARCH_FAVORITE = "mainpageReducer/SEARCH_FAVORITE";

const initialState = {
  searchFieldValue: "",
  searchResults: {} as DataReqType,
  searchFavorite: [] as Array<string>,
};

type initialStateType = typeof initialState;

type ActionsTypes = GetItemsType | SearchFieldValueType | SearchFav;

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
    case SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.searchResults,
      };
    }
    default:
      return state;
  }
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

export const getSearchResults = (value: string): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getListsVideos.getLists(value);
  if (value !=='') {
    dispatch(items(res));
  }
};

export default mainPageReducer;
