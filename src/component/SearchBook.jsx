import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./SearchBook.css";
import { db } from "../firebase.js";
import firebase from "firebase/compat/app";

const SearchBook = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_BOOKS_API_KEY}&maxResults=40`
      )

      .then((res) => {
        setData(res.data.items);
        console.log(search);
        setSearch(""); // 検索後に入力ボックスをクリアする
// Firestoreに検索ワードを書き込む
db.collection("searches").add({
    keyword: search,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });

      })
      .catch((err) => console.log(err));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchBook();
    }
  };
  return (
    <>
      <div className="searchBookWrapper">
        <h1>A book is a dream that you hold in your hand.</h1>
        <h2 className="header-text">SearchBook</h2>
        <input
          className="inputTextArea"
          type="text"
          placeholder="let's find a book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          maxlength={50} // 最大文字数を50に指定
        />
        <button onClick={searchBook}>Search</button>
        {/* {bookData.map((book, index) => (
                    <div key={index}>
                        <h3>{book.volumeInfo.title}</h3>
                    </div>
                ))} */}
                <button className="clearButton" onClick={() => setData([])}>Clear</button>
                
      </div>
      
      
      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
};

export default SearchBook;
