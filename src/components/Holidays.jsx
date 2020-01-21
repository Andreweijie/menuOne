import React from "react";
import { withRouter } from "react-router-dom";

function Holidays(props) {
  return (
    <div>
      <h3
        style={{ fontFamily: "Corona" }}
        id="back-home"
        onClick={props.history.goBack}
      >
        &lt; CNY Holiday Menu
      </h3>
      <h4 style={{ fontFamily: "Corona", fontSize: 14 }}>
        Available daily from 24th Jan - 27th Jan
      </h4>
      <hr />
      <img style={{ height: "auto", width: 380 }} src="/images/cny2.jpg" />
      <img style={{ height: "auto", width: 380 }} src="/images/cny1.jpg" />
    </div>
  );
}

export default withRouter(Holidays);
