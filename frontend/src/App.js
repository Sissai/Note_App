import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Note from "./Components/Note/Note";
import SearchBar from "./Components/Search/SearchBar";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import SignUpPage from "./Pages/Signup/Signup";
function App() {
  return (
    <div className="App">
      <SignUpPage></SignUpPage>
    </div>
  );
}

export default App;
