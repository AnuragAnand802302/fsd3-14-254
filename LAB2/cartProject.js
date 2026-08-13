import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";
//database using file starts;

const File = "product.json";
const getCart = async () => {
  const data = await readFile(File, "utf-8");
  return JSON.parse(data);
};
const saveCart = async (cart) => {
  await writeFile(File, JSON.stringify(cart, null, 2)); //cart is variable name which contains product data, null is used to filter attributes and 2 is space in between two datas
};
const addToCart = async (product) => {
  const cart = await getCart();
  const isFoundInCart = cart.find((item) => item.id === product.id);
  if (isFoundInCart) {
    isFoundInCart.qty += product.qty;
  } else cart.push(product);
  await saveCart(cart);
  console.log(`${product.name} added/updated to 🛒`);
};

const displayCart = async () => {
  const cart = await getCart();
  if (cart.length == 0) {
    console.log("🛒 is empty");
    return;
  }
  console.table(cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  console.log(`Total payable amount Rs. ${total}`);
};

const removeProduct = async(pid)=>{
  const cart = await getCart();
  // const isFoundInCart = cart.find((item) => item.id === pid);
  let x = cart.length;
  const newProducts = cart.filter((item) => item.id !== pid);
  let y = newProducts.length;
  if(y<x){
    await saveCart(newProducts);
    console.log('product deleted');
  }else console.log('product not found');
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Amazon Shopping🛒");
    console.log("1 ......... Show Cart");
    console.log("2 ......... Add Product");
    console.log("3 .........  Remove Product");
    console.log("4 ......... Update Product");
    console.log("5 ......... CheckOut");
    choice = await cin.question("enter your choice? ");
    switch (Number(choice)) {
      case 1:
        await displayCart();
        break;
      case 2:
        const item = await cin.question("enter Id, name, price, qty:");
        const [id, name, price, qty] = item.split(",").map((p) => p.trim());
        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });
        break;
      case 3:
        let pid = await cin.question("enter the product id to be deleted:");
        await removeProduct(Number(pid));
        break;
      case 4:
        console.log("Update Product");
        break;
      case 5:
        console.log("CheckOut");
        break;
      default:
        console.log("invalid Choice");
    }
  } while (choice != 5);
  cin.close();
};
main();
