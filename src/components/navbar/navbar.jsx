import "./navbar.css";
const navbar = ({ citieslength }) => {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">LovedCities</h1>
        <h3 className="navbar-counter">
          {citieslength > 0
            ? " There are " + citieslength + " cities "
            : "No cities :("}
        </h3>
      </div>
    </div>
  );
};

export default navbar;
