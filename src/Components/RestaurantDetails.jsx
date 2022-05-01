export default function RestaurantDetails({ props }) {
  //   console.log("props", props.name);
  return (
    <div className="RestDiv">
      <img src={props.img_url} alt="" />
      <div>
        <h2>{props.name}</h2>
        <h4>{props.cuisines}</h4>
        <h4>Cost ₹ {props.average_cost} for one </h4>
        <h4>Ratings: {props.rating} ★</h4>
        <p>Accepts {props.payment} only </p>
      </div>
    </div>
  );
}
