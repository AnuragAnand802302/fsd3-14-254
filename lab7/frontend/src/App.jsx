function Book(props){
  console.log(props);
  
  return(
    <div>
    <img src= {props.book.picURL} alt = {props.book.bname} />
    <h1>{props.book.bname}</h1>
    <h2>Price: {props.book.price}</h2>
    <h3>Quantity: {props.book.quantity}</h3>
    <h4>Rating: {props.book.rating}</h4>
    </div>
  );
}

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

export default function App() {
  return(
    <>
    
    <h1>Hello My Name is Anurag Anand</h1>
    <Book book = {b1}/>
    <Book book = {b2}/>
    </>
  )
}