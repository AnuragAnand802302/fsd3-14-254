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

export default function App() {
  return(
    <>
    <Book/>
    <h1>Hello My Name is Anurag Anand</h1>
    <Book/>
    </>
  )
}