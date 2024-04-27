import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";
import Message from "./Message";
import Counter from "./Counter";

function App() {
  return (
    <div> 
      <div><Navbar /></div>
    <h1>Hello World!</h1>
    <div><Footer /></div>
    <Item name="item1"/>
    <Item name="item2"/>
    <Item name="item3" price="500"> <p> This is the explanation of the item</p> </Item>
    <Header />
    <Message />
    <Counter />
    </div>
  );
}

export default App;
