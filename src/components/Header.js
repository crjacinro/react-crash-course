import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTasks }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTasks ? "red" : "green"}
        text={showAddTasks ? "Close" : "Add"}
        onClick={onAdd}
      />
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
