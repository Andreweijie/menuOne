import React from "react";
import { withRouter } from "react-router-dom";

function HighTea(props) {
  return (
    <div>
      <h3
        style={{ fontFamily: "Corona" }}
        id="back-home"
        onClick={props.history.goBack}
      >
        &lt; High Tea
      </h3>
      <h4 style={{ fontFamily: "Corona", fontSize: 14 }}>
        Available daily from 3:30pm - 6:00pm
      </h4>
      <hr />
      <img src={require("../images/high-tea.jpg")} />
    </div>
  );
}

export default withRouter(HighTea);
