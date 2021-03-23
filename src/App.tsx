import React, { useEffect, useState } from "react";
import "../src/Sass/App.scss";
import LoginForm from "./componets/LoginForm/LoginForm";
import SearchComponent from "./componets/SearchComponent/SearchComponent";
import SearchResults from "./componets/SearchComponent/SearchResults";
import ModalWindow from "./componets/ModalWindow/ModalWindow";
import { getListsVideos } from "./Api/api";
import { DataReqType } from "./Types/Types";

function App() {
  const [x, setX] = useState<DataReqType>();

  // useEffect(() => {
  //   getListsVideos
  //     .getLists()
  //     .then((res) => setX(res))
  //     .catch((err) => console.error(err.response));
  // }, []);

  // console.log(x?.items);

  return (
    <div className="App">
     {/*  <LoginForm /> */}
       <SearchComponent />
     {/* <SearchResults />
      <ModalWindow /> */}
    </div>
  );
}

export default App;
