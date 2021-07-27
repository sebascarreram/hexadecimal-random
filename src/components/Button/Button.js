import "./button.scss";

const Button = (props) => (
  <button className="button" onClick={props.click}>
    {props.children}
  </button>
);

export default Button;
