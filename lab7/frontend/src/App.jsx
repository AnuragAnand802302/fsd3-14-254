import Book from "./components/Book.jsx";
import Pen from "./components/Pen.jsx";
import Fruit from "./components/Fruit.jsx";
import Event from "./components/Event.jsx";
import { books } from "./data/books.js";
import { pens } from "./data/pens.js";

const MyButton = ()=>{
  return(
    <button className="bg-black text-white rounded-md text-xl m-4 px-4 py-2">Submit</button>
  )
}

export default function App() {
  return (
    <>
      <MyButton/>
    </>
  );
}
