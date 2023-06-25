import { useLocation } from "react-router-dom";

export default function FunctionForm() {
  const location = useLocation();

  const reviews = location.state.state.review;
  console.log(reviews);

  return (
    <div>
      <p style={{ fontSize: 45, fontWeight: 700 }}>{location.state.state.listing_name}</p>
      {reviews.map(review => {
        return <p style={{ fontSize: 25 }}>{review}</p>;
      })}
    </div>
  );
}
