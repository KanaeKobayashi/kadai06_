import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./CommentsPage.css";
import axios from "axios";
import Modal from "./Modal";
import Papa from "papaparse";
import IconButton from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    db.collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const exportToCsv = () => {
    const csv = Papa.unparse(
      comments.map((comment) => ({
        bookTitle: comment.bookTitle,
        text: comment.text,
      }))
    );

    const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const csvURL = window.URL.createObjectURL(csvData);
    let tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", "comments.csv");
    tempLink.click();
  };

  const fetchBookDetails = async (id) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      setSelectedBook(res.data);
      setShowModal(true);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteComment = (id) => {
    db.collection("comments")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Comment successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing comment: ", error);
      });
  };

  return (
    <div className="comments">
      <div className="commentsWrapper">
        <h1>Comments</h1>
        <button onClick={exportToCsv}>Export to CSV</button>
      </div>

      {comments.map((comment, index) => (
        <div key={index}>
          <h2>{comment.bookTitle}</h2>
          <p>{comment.text}</p>
          <button
            className="detailButton"
            onClick={() => fetchBookDetails(comment.bookId)}
          >
            Show Details
          </button>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => deleteComment(comment.id)}
          >
            <DeleteIcon fontSize="large" style={{ color: 'gray' }} />
          </IconButton>
        </div>
      ))}
      {selectedBook && (
        <Modal
          show={showModal}
          item={selectedBook}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CommentsPage;
