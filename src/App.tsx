import React, { useEffect, useState } from "react";
import "../src/Sass/App.scss";
import LoginForm from "./componets/LoginForm/LoginForm";
import SearchComponent from "./componets/SearchComponent/SearchComponent";
import SearchResults from "./componets/SearchComponent/SearchResults";
import ModalWindow from "./componets/ModalWindow/ModalWindow";
import { getListsVideos } from "./Api/api";
import { DataReqType } from "./Types/Types";
import Favorites from "./componets/Favorites/Favorites";
import Header from "./componets/Header/Header";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

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
     {/*   <SearchComponent /> 
      <Favorites/> */}
      {/* <ModalWindow />  */}

      <Switch>
        <Route exact  path='/search' component={SearchComponent}/>
        <Route exact path="/favorites" component={Favorites}/>
        <Route path="/" component={LoginForm}/>
      </Switch>
    </div>
  );
}

export default App;
