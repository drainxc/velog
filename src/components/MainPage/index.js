import Post from "../Post";
import * as S from "./styles";
import { data } from "../../lib/export/data";

export default function Mainpage() {
  console.log(data);
  return (
    <S.MainDiv>
      <div className="container">
        {data.map((post) => (
          <Post
            title={post.title}
            writer={post.name}
            backgroundImage={post.cover_url}
            contents={post.description}
            postID={post.id}
          />
        ))}
      </div>
    </S.MainDiv>
  );
}
