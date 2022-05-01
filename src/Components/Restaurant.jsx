import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantDetails from "./RestaurantDetails";

export default function Restaurant() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/restaurants").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      {data.map((e) => {
        return <RestaurantDetails props={e} key={e.id} />;
      })}
    </div>
  );
}
