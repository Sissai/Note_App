import React from "react"
import Header from "../../Components/Header/Header";
import Note from "../../Components/Note/Note";
import SearchBar from "../../Components/Search/SearchBar";
import Footer from "../../Components/Footer/Footer";

const Home = (props) => {
  return (
    <div>
        <Header></Header>
        <SearchBar></SearchBar>

        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>

        <Footer></Footer>
      
    </div>
  )
};

export default Home;
