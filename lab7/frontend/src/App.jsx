import Book from './components/Book.jsx'
import Pen from './components/Pen.jsx'

const b1 = {
  picURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmnsjWZw-SapWpOxx4gn3UT8KO9RR97gx13tJAQL4-A&s=10",
  bname: "Javascript modern web development",
  price:1200,
  quantity: 1,
  rating: 3.5,
};

const b2 = {
  picURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzEHzJBrBSOF4OLW6qp46nDi4-THEhhTPXKPEGOL0cQ&s",
  bname: "Javascript The Definitive Guide",
  price:2150,
  quantity: 5,
  rating: 4.5,
};
const p1 = {
  picURL: "https://m.media-amazon.com/images/I/61vkZ+PkJUL._AC_UL480_FMwebp_QL65_.jpg",
  company: "Pentonic",
  price:100,
  quantity: 5,
  rating: 4.5,
};
const p2 = {
  picURL: "https://m.media-amazon.com/images/I/61vFw7lPzGL._AC_UL480_FMwebp_QL65_.jpg",
  company: "Luxor",
  price:126,
  quantity: 5,
  rating: 4.5,
};

export default function App() {
  return(
    <>
    <h1>E-Book Store</h1>
    <div className="container">
    <Book book = {b1}/>
    <Book book = {b2}/>
    <Book book = {b1}/>
    <Book book = {b2}/>
    <Pen pen = {p1}/>
    <Pen pen = {p2}/>
    </div>
    </>
  )
}