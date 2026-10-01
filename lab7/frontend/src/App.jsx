function Book(props){
  console.log(props);
  const {picURL,bname,price,quantity,rating} = props.book;
  
  return(
    <div className="book">
    <img src= {picURL} alt = {props.book.bname} />
    <h1>{bname}</h1>
    <h2>Price: {price}</h2>   
    <h3>Quantity: {quantity}</h3>
    <h4>Rating: {rating}</h4>
    <button>Buy Now</button>
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
    <h1>E-Book Store</h1>
    <div className="container">
    <Book book = {b1}/>
    <Book book = {b2}/>
    <Book book = {b1}/>
    <Book book = {b2}/>
    </div>
    </>
  )
}