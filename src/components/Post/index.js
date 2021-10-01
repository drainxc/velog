import * as S from "./style";

export default function Post({ title, writer, backgroundImage, contents }) {
    return (
    <S.PostDiv>
      <img src={backgroundImage} alt="" />
      <div className="post">
        <div className="title">{title}</div>
        <div className="contents">{contents}</div>
      </div>
      <hr width="300px" />
      <div className="writer">{writer}</div>
    </S.PostDiv>
  );
}
