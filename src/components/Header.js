import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("fdsfdasfsf");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

// CSS in JS
// const headingStyle = {
//   color: "red",
// };

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
