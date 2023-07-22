import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewBookForm from './NewBookForm';
import Book from './Book';
import {
  getBooksErrors, getBooksStatus, selectAllBooks, fetchBooks,
} from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const booksStatus = useSelector(getBooksStatus);
  const booksErrors = useSelector(getBooksErrors);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  let content;

  if (booksStatus === 'loading') {
    content = <h2>Loading Books...</h2>;
  } else if (booksStatus === 'succeeded') {
    content = books.map((book) => (
      <Book
        key={book.itemId}
        itemId={book.itemId}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ));
  } else if (booksStatus === 'failed') {
    <h2>{booksErrors}</h2>;
  }

  return (
    <div>
      <h2>Book List</h2>
      {content}
      <h2>Add a Book</h2>
      <NewBookForm />
    </div>
  );
};

export default BookList;
