import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";

function App() {
  return (
    <div> 
      <div><Navbar /></div>
    <h1>Hello World!</h1>
    <div><Footer /></div>
    <Item name="item1"/>
    <Item name="item2"/>
    <Item name="item3"/>
    <Header />
    </div>
  );
}

export default App;
