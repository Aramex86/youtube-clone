import axios from "axios";
import { DataReqType } from "../Types/Types";


export const getListsVideos = {
  getLists() {
    return axios
      .get<DataReqType>(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=kygo&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
};
