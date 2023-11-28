import incomeLogin from "../assets/incomeLogo.svg";
import incomeLoginBg from "../assets/incomeLogoBg.svg";
import "./cardComponent.css";
const CardComponent = () => {
  return (
    <>
      <div className="w-58 h-46 rounded-lg border-t-2 border-r-2 border-blue-700 bg-black shadow-md relative left-1/2">
        <div className="card-logo">
          <img
            className="absolute top-2 left-2 flex"
            src={incomeLoginBg}
            alt="income background"
          />
          <img
            className="absolute top-3 left-3 justify-center"
            src={incomeLogin}
            alt="abc"
          />
        </div>
      </div>
    </>
  );
};

export default CardComponent;
