import React from "react";
import { withRouter } from "react-router-dom";

function Events(props) {
  return (
    <div>
      <h3
        style={{ fontFamily: "Corona" }}
        id="back-home"
        onClick={props.history.goBack}
      >
        &lt; Christmas Special
      </h3>
      <h4 style={{ fontFamily: "Corona", fontSize: 14 }}>Available</h4>
      <hr />
      <img src={require("../images/christmas.jpg")} />
    </div>
  );
}

export default withRouter(Events);
