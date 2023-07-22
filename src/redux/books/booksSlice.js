import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PMtbg86Ojn5OB4HJGKx7/books');
    return response.data || [];
  } catch (err) {
    return 'Fetch error';
  }
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (newBook) => {
  try {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PMtbg86Ojn5OB4HJGKx7/books', newBook);
    return newBook;
  } catch (err) {
    return 'Add book error';
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PMtbg86Ojn5OB4HJGKx7/books/${bookId}`);
    return bookId;
  } catch (err) {
    return 'Remove book error';
  }
});

const initialState = {
  books: [],
  status: 'Loading',
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const addedBook = action.payload;
        const mappedBooks = Object.keys(addedBook).map((key) => ({
          itemId: key,
          title: addedBook[key][0].title,
          author: addedBook[key][0].author,
          category: addedBook[key][0].category,
        }));
        state.books = [...mappedBooks];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.status = 'fullfilled';
        const postedBook = action.payload;
        state.books = [...state.books, postedBook];
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.itemId !== bookId);
      });
  },
});

export const selectAllBooks = (store) => store.books.books;
export const getBooksStatus = (store) => store.books.status;
export const getBooksErrors = (store) => store.books.error;

export default booksSlice.reducer;
