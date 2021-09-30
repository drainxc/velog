import * as S from "./style"

export default function Post({ title, writer, backgroundImage, contents}) {
  return (
    <S.PostDiv>
      <div className="post">
          <img src={backgroundImage} alt=""/>
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
          <hr width="300px"/>
          <div className="writer">{writer}</div>
      </div>
    </S.PostDiv>
  );
}
