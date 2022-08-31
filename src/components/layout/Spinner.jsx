import PacmanLoader from "react-spinners/PacmanLoader";

function Spinner() {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className="spinnerContainer">
      <PacmanLoader color="#22b8cf" cssOverride={override} size={30}/>
    </div>
  );
}

export default Spinner;