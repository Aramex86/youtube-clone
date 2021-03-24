import axios from "axios";
import { DataReqType } from "../Types/Types";


export const getListsVideos = {
  getLists(value:string) {
    return axios
      .get<DataReqType>(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${value}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
};
