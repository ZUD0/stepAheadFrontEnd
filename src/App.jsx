import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <div className="App ">
      <Header/>
      {/* <Home /> */}
      <SignUp/>
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
