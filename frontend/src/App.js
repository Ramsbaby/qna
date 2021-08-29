//App.js
import React from "react";
import { Route } from "react-router-dom";
import PostMainCounselor from "./pages/post/PostMainCounselor";
import PostMainCustomer from "./pages/post/PostMainCustomer";
import PostView from "./pages/post/PostView";
import PostViewAnswer from "./pages/post/PostViewAnswer";
import PostViewHistory from "./pages/post/PostViewHistory";
import PostRegistCounselor from "./pages/post/PostRegistCounselor";
import PostRegistCustomer from "./pages/post/PostRegistCustomer";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/postMainCounselor" component={PostMainCounselor} />
      <Route exact path="/postMainCustomer" component={PostMainCustomer} />
      <Route exact path="/postView" component={PostView} />
      <Route exact path="/postViewAnswer" component={PostViewAnswer} />
      <Route exact path="/postViewHistory" component={PostViewHistory} />
      <Route
        exact
        path="/postRegistCounselor"
        component={PostRegistCounselor}
      />
      <Route exact path="/postRegistCustomer" component={PostRegistCustomer} />
    </div>
  );
}

export default App;
