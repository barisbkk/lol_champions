import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex flex-row align-items-center justify-content-center position-fixed w-100 z-1">
      <img
        className="position-absolute start-0 ms-5"
        src="https://purepng.com/public/uploads/large/league-of-legends-new-logo-wg7.png"
        alt=""
      />
      <h1>Champions</h1>
    </div>
  );
};

export default Header;
