import React, { useEffect, useState } from "react";
import "../src/Sass/App.scss";
import LoginForm from "./componets/LoginForm/LoginForm";
import SearchComponent from "./componets/SearchComponent/SearchComponent";
import ModalWindow from "./componets/ModalWindow/ModalWindow";
import Favorites from "./componets/Favorites/Favorites";
import { Switch, useHistory } from "react-router";
import { Route } from "react-router-dom";
import { AppStateType } from "./store/store/Store";
import { userSelector } from "./store/selectors/MainSelector";
import { useSelector } from "react-redux";
const Users = require("../src/Data/users.json");



function App() {
  const [token, setToken] = useState();
  const history = useHistory();
  const user = useSelector((state:AppStateType)=>userSelector(state));


  if(user){
    Users.data.users.find(({password}:any)=>{
      // console.log(password)
      if(password === user.password){
        history.push('/search');
      }
    })
  }else{
    history.push('/')
  }


  // console.log(user);
  // console.log(Users);
  // if(!token){
  //   return <LoginForm setToken={setToken}/>
  // }



  return (
    <div className="App">
      <Switch>
        <Route exact  path='/search' component={SearchComponent}/>
        <Route exact path="/favorites" component={Favorites}/>
        <Route exact path='/modal' component={ModalWindow}/>
        <Route path="/" component={LoginForm}/>
      </Switch>
    </div>
  );
}

export default App;
