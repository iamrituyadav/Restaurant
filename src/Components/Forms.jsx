import axios from "axios";
import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    rating: "",
    average_cost: "",
    cuisines: [],
    img_url: "",
    payment: "",
  });

  const handleClick = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/restaurants", formData).then(() => {
      alert("Form Submitted Successfully");
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Form to Add New Restaurant</h2>
      <input
        type="text"
        placeholder="Enter Restaurant Name"
        id="name"
        onClick={handleClick}
      />
      <input
        type="text"
        placeholder="Enter Categories"
        id="cuisines"
        onClick={handleClick}
      />
      <input
        type="text"
        placeholder="Enter Image "
        id="img_url"
        onClick={handleClick}
      />
      <input
        type="text"
        placeholder="Enter Average Cost"
        onClick={handleClick}
        id="average_cost"
      />
      <input
        type="text"
        placeholder="Enter Ratings"
        onClick={handleClick}
        id="rating"
      />
      <input
        type="text"
        placeholder="Enter Payments Method"
        onClick={handleClick}
        id="payment"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
