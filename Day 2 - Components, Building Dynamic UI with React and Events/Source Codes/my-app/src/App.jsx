import "./App.css";
import MyAlert from "./Components/MyAlert";
import MyButton from "./Components/MyButton";
import MyBody from "./Components/MyBody";
import Nesting from "./Components/Nesting";
import MouseEvents from "./Components/MouseEvents";
import FormEvents from "./Components/FormEvents";
import MUIButton from "./Components/MUIButton";
import MyForm from "./Components/MyForm";
import ShoppingCart from "./Components/ShoppingCart"
import ObjectsWithUseState from "./Components/ObjectsWithUseState"

function App() {
  return (
    <div >
      <MyButton className="my-button" />
      <br />
      <MyAlert />
      <MyBody/>
      <Nesting />
      <MouseEvents />
      <FormEvents />
      <MUIButton />
      <MyForm />
      <ShoppingCart />
      <ObjectsWithUseState />
    </div>
  );
}

export default App;
