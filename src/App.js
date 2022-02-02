import React, { Fragment, useCallback } from "react";

import qr from "qr-image";
import InlineSVG from "svg-inline-react";

const GenQR = (props) => {
  return (
    <Fragment>
      <h1>QR</h1>
      <div
        style={{
          backgroundColor: "#fff",
          maxWidth: 400,
          margin: "0 auto"
        }}
      >
        <InlineSVG
          src={qr.imageSync(
            JSON.stringify({
              location: "1",
              tlc: 100,
              organization: "greenway"
            }),
            {
              type: "svg",
              parse_url: false
            }
          )}
        />
      </div>
    </Fragment>
  );
};

export default GenQR;
