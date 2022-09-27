import { useContext } from "react";
import { PoliceCallPageContext } from "../../../contexts/PoliceCallPageContext";
import policeWoman from "../../../images/policeWoman.svg";
import { useNavigate } from "react-router-dom";

function PoliceContainer() {
  const {
    crowdMailWebsite,
    policeWords,
    interaction,
    navigationInteraction,
    requestDnaResult,
    setShowDnaResult,
    setRequestDnaResult,
    showCrowdmail,
  } = useContext(PoliceCallPageContext);
  let navigate = useNavigate();

  return (
    <div className="police-container">
      <div className="police-image-container">
        <img src={policeWoman} alt="Police woman" />
      </div>
      <div className="police-dialog-container">
        <div className="dialog-box-police">
          <p>{policeWords}</p>
          {interaction ? (
            <button onClick={() => navigate(navigationInteraction)}>
              Contact
            </button>
          ) : null}
          {requestDnaResult ? (
            <button
              onClick={() => {
                setShowDnaResult(true);
                setRequestDnaResult(false);
              }}
            >
              Order DNA Test
            </button>
          ) : null}
          {showCrowdmail ? (
            <button>
              <a href={crowdMailWebsite} target="_blank">
                {" "}
                Visit Crowdmail
              </a>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PoliceContainer;
