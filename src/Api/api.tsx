import axios from "axios";
import { DataReqType } from "../Types/Types";

const API_KEY = "AIzaSyCu2z1fzpK9f28o-QU5kSMQeWAKYrhqdd0";

export const getListsVideos = {
  getLists() {
    return axios
      .get<DataReqType>(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=kygo&key=${API_KEY}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response;
      });
  },
};
