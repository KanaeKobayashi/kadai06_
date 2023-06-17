import React, { useState } from "react";
import { db } from "../firebase.js";
import firebase from "firebase/compat/app";
import "./Modal.css";

const Modal = ({ show, item, onClose }) => {
  const [comment, setComment] = useState("");
  if (!show) {
    return null;
  }
  const submitComment = (e) => {
    e.preventDefault();

    db.collection("comments")
      .add({
        text: comment,
        bookId: item.id,
        bookTitle: item.volumeInfo.title,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log("Comment written with ID: ", docRef.id);
        db.collection("comments").doc(docRef.id).set({
          id: docRef.id,
          text: comment,
          bookTitle: item.volumeInfo.title,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .catch((error) => {
        console.error("Error adding comment: ", error);
      });

    setComment("");
  };
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay" onClick={onClose}>
        <div className="overlay-inner" onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={onClose}>
            <i class="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a
                href={item.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
          <form onSubmit={submitComment} className="comment-form">
            <textarea
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
