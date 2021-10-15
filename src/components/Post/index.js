import * as S from "./style";
import { Link } from "react-router-dom";

export default function Post({
  title,
  writer,
  backgroundImage,
  contents,
  date,
  comment,
  postID,
}) {
  return (
    <S.PostDiv>
      <Link
        to={`/detail/${postID}`}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <img src={backgroundImage} alt="" />
        <div className="post">
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
        </div>
        <div className="date">
          {date} · {comment}개의 댓글{" "}
        </div>
        <hr />
        <div className="writer">{writer}</div>
      </Link>
    </S.PostDiv>
  );
}
