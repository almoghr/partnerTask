import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../db.json";
import { dataLoader } from "../../helpers/dbLoader";
import { checkAuthentication } from "../../helpers/isLoggedInChecker";
import AuthForm from "../AuthForm/AuthForm";
import ProductsPage from "../ProductsPage/ProductsPage";

const MainPage = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState()
  
  useEffect(() => {
    dataLoader(db, dispatch);
    const authenticated = checkAuthentication()
    authenticated ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, []);
  
  return (<div>
      {!isLoggedIn ? <AuthForm setIsLoggedIn={setIsLoggedIn}/> : <ProductsPage />}
  </div>);
};

export default MainPage;
