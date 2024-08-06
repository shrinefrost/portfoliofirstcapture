import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h1>
          High <span>Quality</span> service
        </h1>
        <div className="cards">
          <div className="card">
            <div className="icons">
              <h2>Efficient</h2>
              <img src={clock} alt="icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icons">
              <h2>teamwork</h2>
              <img src={teamwork} alt="icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icons">
              <h2>Affordable</h2>
              <img src={money} alt="icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="icons">
              <h2>pro grade gear</h2>
              <img src={diaphragm} alt="icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesSection;
