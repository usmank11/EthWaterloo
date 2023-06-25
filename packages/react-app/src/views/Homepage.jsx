import "./Homepage.css";
import houseImage1 from "./110.png";
import houseImage2 from "./258.png";
import houseImage3 from "./271.png";
import houseImage4 from "./308.png";
import houseImage5 from "./house.png";
import houseImage6 from "./house2.png";
import star from "./star.svg";
import unfilled_star from "./unfilled-star.svg";

import { useHistory } from "react-router-dom";

function HomePage({ onClick }) {
  const houses = [
    {
      image: houseImage1,
      title: "271 Lester UW",
      reviews: 25,
      stars: 4,
      reviewTexts: ['"Loved this Place!"', '"Great Price, Okay Management, Close to campus!"'],
    },
    {
      image: houseImage2,
      title: "325 Lester UW",
      reviews: 40,
      stars: 3,
      reviewTexts: [
        "Decent place, but could use some improvements.",
        "Average price for the location, but management needs to be more responsive.",
      ],
    },
    {
      image: houseImage3,
      title: "289 Columbia UW",
      reviews: 80,
      stars: 5,
      reviewTexts: [
        "Absolutely amazing place to live!",
        "Top-notch management and excellent amenities.",
        "Highly recommended for students.",
      ],
    },
    {
      image: houseImage4,
      title: "160 King St UW",
      reviews: 11,
      stars: 1,
      reviewTexts: ["Terrible experience overall.", "Overpriced and poorly managed."],
    },
    {
      image: houseImage5,
      title: "230 Albert UW",
      reviews: 25,
      stars: 3,
      reviewTexts: [
        "Decent location, but maintenance can be slow at times.",
        "Affordable rent, but noise can be an issue.",
      ],
    },
    {
      image: houseImage6,
      title: "139 Columbia UW",
      reviews: 44,
      stars: 3,
      reviewTexts: ["Average place to live, nothing special.", "Close to campus, but the building can be noisy."],
    },
  ];

  let history = useHistory();

  return (
    <div className="home-container">
      <div className="home-title">Rentals</div>
      <div className="home-houses">
        {houses.map(house => {
          return (
            <div
              className="home-house"
              onClick={() => {
                history.push("/testing", { state: { review: house.reviewTexts, listing_name: house.title } });
              }}
            >
              <img src={house.image} className="home-image" />
              <div className="home-desc">
                <div className="home-house-title">
                  <p>{house.title}</p>
                </div>
                <div className="home-reviews">
                  <div>
                    {Array(...Array(5)).map((v, i) => {
                      return house.stars > i ? (
                        <img key={i} src={star} className="home-star"></img>
                      ) : (
                        <img key={i} src={unfilled_star} className="home-star"></img>
                      );
                    })}
                  </div>
                  <p>{house.reviews} reviews</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
