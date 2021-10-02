import React from "react";
import * as S from "./styles";
import logo from "../../asset/velog.png";
import search from "../../asset/search.png";
import arrow from "../../asset/stock.png";
import clock from "../../asset/clock.png";

export default function Header() {
  return (
    <S.HeaderDiv>
      <div className="top">
        <span>
          <img src={logo} alt="" className="logo" />
        </span>
        <span>
          <img src={search} alt="" className="search" />
          <button className="login">로그인</button>
        </span>
      </div>
      <div className="bottom">
        <button>
          <img src={arrow} alt="" className="tranding" />
          <span>트렌딩</span>
        </button>
        <button>
          <img src={clock} ait="" className="latest" />
          <span>최신</span>
        </button>
      </div>
      <hr width="100px"/>
    </S.HeaderDiv>
  );
}
