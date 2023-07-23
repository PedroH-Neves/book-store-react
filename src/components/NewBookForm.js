import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/booksSlice';
import './NewBookForm.css';

const NewBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addNewBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <div>
        <input className="form-input" id="title" type="text" value={title} placeholder="Book title" onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <input className="form-input" id="author" type="text" value={author} placeholder="Book author" onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div>
        <input className="form-input" id="category" type="text" value={category} placeholder="Book category" onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <button type="submit" className="form-btn">Add book</button>
    </form>
  );
};

export default NewBookForm;
