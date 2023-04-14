import React, { useState } from "react";
import { BodyAccordion, Container, HeaderAccordion } from "./styles";
import arrowUp from "../../assets/imgs/icons/arrow-up.svg";
import arrowDown from "../../assets/imgs/icons/arrow-down.svg";



export default function Accordion(props: any) {
  const [showBody, setShowBody] = useState(false);

  return (
    <Container show={props.show}>
      <HeaderAccordion onClick={() => {
        setShowBody(!showBody)
        props.onClick()
      }}>
        <span>
          <img src={props.iconHeader}  alt="" />
          <strong>{props.textHeader} </strong>
        </span>

        <span>
          {showBody ? (
            <img src={arrowUp} alt="" />
          ) : (
            <img src={arrowDown} alt="" />
          )}
        </span>
      </HeaderAccordion>
      <BodyAccordion showBody={showBody}>{props.children}</BodyAccordion>
    </Container>
  );
}
