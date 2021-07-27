import "./snackBar.scss";

const SnackBar = (props) => {
  return (
    <div className={props.className} id="snackbar">
      <h1>Copied {props.name}</h1>
    </div>
  );
};

export default SnackBar;
