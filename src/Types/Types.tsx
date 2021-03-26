type ThumbnailsInsideType = {
  height: number;
  url: string;
  width: number;
};

type ThumbnailsType = {
  default: ThumbnailsInsideType;
  medium: ThumbnailsInsideType;
  high: ThumbnailsInsideType;
};
type SnipetType = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: ThumbnailsType;
  title: string;
};

type IdType = {
  kind: string;
  videoId: string;
};

export type ItemsType = {
  etag: string;
  kind: string;
  id: IdType;
  snippet: SnipetType;
};

type PageInfoType = {
  totalResults: number;
  resultsPerPage: number;
};

export type DataReqType = {
  etag: string;
  kind: string;
  regionCode: string;
  pageInfo: PageInfoType;
  nextPageToken: string;
  items:Array<ItemsType>;
};

export type SearchFavoriteType={
  id:number,
  text:string
}

export type UsersType={
  login:string,
  password:string|number
}

export type SavedRequestType={
  request:string,
  nameReq:string,
  reqNum:number,
  select:string
}