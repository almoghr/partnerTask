import React from "react";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import MainPage from "./components/MainPage/MainPage";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
