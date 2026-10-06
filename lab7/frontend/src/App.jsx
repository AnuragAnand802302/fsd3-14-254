import Book from "./components/Book.jsx";
import Pen from "./components/Pen.jsx";
import Fruit from "./components/Fruit.jsx";
import { books } from "./data/books.js";
import { pens } from "./data/pens.js";

export default function App() {
  return (
    <>
      <h1>E-Book Store</h1>
      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
        <Fruit />
      </div>
    </>
  );
}
