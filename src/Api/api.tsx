import axios from "axios";
import { DataReqType } from "../Types/Types";


export const getListsVideos = {
  getLists(value:string,maxRes:number,orderVal:string) {
    return axios
      .get<DataReqType>(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxRes}&q=${value}&order=${orderVal}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
};
