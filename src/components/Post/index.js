import { useState } from "react";
import * as S from "./style";

export default function Post({ title, writer, backgroundImage, contents }) {
  const [onMouse, SetOnMouse] = useState(false);

  function onMouseOverEvent() {
    SetOnMouse(true);
  }

  function onMouseLeaveEvent() {
    SetOnMouse(false);
  }

  return (
    <S.PostDiv onMouseOver={onMouseOverEvent} onMouseLeave={onMouseLeaveEvent}>
      <div className={onMouse ? "increase" : "main"}>
        <img src={backgroundImage} alt="" />
        <div className="post">
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
        </div>
        <hr />
        <div className="writer">{writer}</div>
      </div>
    </S.PostDiv>
  );
}
