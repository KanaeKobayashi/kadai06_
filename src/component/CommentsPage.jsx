import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./CommentsPage.css"

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    db.collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="comments">
      <h1>Comments</h1>
      {comments.map((comment, index) => (
        <div key={index}>
          <h2>{comment.bookTitle}</h2>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsPage;
