import "./HomePage.css";
import houseImage from "./house.png";
import star from "./star.svg";
import unfilled_star from "./unfilled-star.svg";

function HomePage() {
  const houses = [
    { image: "./logo.svg", title: "289 Lester UW", reviews: 25, stars: 4 },
    { image: "./logo.svg", title: "325 Lester UW", reviews: 40, stars: 3 },
    { image: "./logo.svg", title: "289 Columbia UW", reviews: 80, stars: 5 },
    { image: "./logo.svg", title: "160 King St UW", reviews: 11, stars: 1 },
    { image: "./logo.svg", title: "230 Albert UW", reviews: 25, stars: 3 },
    { image: "./logo.svg", title: "139 Columbia UW", reviews: 44, stars: 3 },
  ];

  return (
    <div className="home-container">
      <div className="home-title">Rentals</div>
      <div className="home-houses">
        {houses.map(house => {
          return (
            <div className="home-house">
              <img src={houseImage} className="home-image" />
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
