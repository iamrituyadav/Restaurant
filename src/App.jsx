import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Forms";
import RestaurantDetails from "./Components/Restaurant";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      {toggle ? (
        <div>
          <button className="toggleBtn" onClick={handleClick}>
            See Restaurants
          </button>
          <Form />
        </div>
      ) : (
        <div>
          <button className="toggleBtn" onClick={handleClick}>
            Add New Restaurant
          </button>
          <RestaurantDetails />
        </div>
      )}
    </div>
  );
}

export default App;
