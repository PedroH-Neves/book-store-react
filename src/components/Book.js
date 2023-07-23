import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';

const Book = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <div className="book-div">
        <p>{category}</p>
        <h2>{title}</h2>
        <p className="blue-color">{author}</p>
      </div>
      <div className="book-btn-div">
        <button className="book-btn blue-color" type="button">Comments</button>
        <button className="book-btn blue-color" type="button" onClick={handleRemoveBook}>Remove</button>
        <button className="book-btn blue-color" type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  itemId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  itemId: '',
  title: '',
  author: '',
  category: '',
};

export default Book;
