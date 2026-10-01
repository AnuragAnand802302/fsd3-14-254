export default function Book(props){
  console.log(props);
  const {picURL,bname,price,quantity,rating} = props.book;
  const qtyStyle = {
    fontSize:"1rem",
    color:"blue",
    textAlign:"center",
    backgroundColor:"yellow",
    padding:"10px",   
  };

  return(
    <div className="book">
    <img src= {picURL} alt = {bname} />
    <h1>{bname}</h1>
    <h2>Price: {price}</h2>   
    <h3 style={qtyStyle}>Quantity: {quantity}</h3>  
    <h4>Rating: {rating}</h4>
    <button>Buy Now</button>
    </div>
  );
}