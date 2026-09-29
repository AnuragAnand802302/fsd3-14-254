function Book(){
  return(
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1y_dEwIYSDLkAHVN92cnICONJ6PEvQ8yXoyrj93zkVg&s=10" alt="React Book For beginners" />
      <h1>Let us React</h1>
      <h2>Price : 765.00</h2>
      <h3>Quantity: 5</h3>
      <h3>Rating: 4.8(7)</h3>
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
  picURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmnsjWZw-SapWpOxx4gn3UT8KO9RR97gx13tJAQL4-A&s=10",
  bname: "Javascript modern web development",
  price:1200,
  quantity: 1,
  rating: 3.5,


};

export default function App() {
  return(
    <>
    <Book/>
    <h1>Hello My Name is Anurag Anand</h1>
    <img src= {b1.picURL} alt = {b1.bname} />
    <h1>Price: {b1.price}</h1>
    <h2>Quantity: {b1.quantity}</h2>
    <h3>Rating: {b1.rating}</h3>
    </>
  )
}