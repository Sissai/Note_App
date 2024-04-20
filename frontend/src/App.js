import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Note from "./Components/Note/Note";
import SearchBar from "./Components/Search/SearchBar";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <SignIn />
      <SearchBar />
      <Note />
      <SignUp />
    </div>
  );
}

export default App;
