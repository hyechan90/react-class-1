import React, { Fragment } from 'react';
import styled from 'styled-components';
import './App.scss';
import menu from './menu.png'
import why from './why.png'
import song from './song.png'
import key from './key.png'
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Center></Center>
      <Bottom></Bottom>
    </Fragment>
  );
}
function Header() {
  return (
    <div className="Header">
      <div>Gmail</div>
      <div>이미지</div>
      <img src={menu} alt="menu" className="Header__image" />
      <Button color="#4285f4">로그인</Button>
    </div>
  );
}
function Center() {
  return (
    <div className="center">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="center" width="330px" height="110px" style={{ paddingTop: "109px" }} />
      <Input></Input>
      <div style={{ display: 'flex', marginTop: 20 + 'px' }}>
        <Button color="#f2f2f2" fcolor="#000000" style={{ margin: 10 + "px" }}>Google 검색</Button>
        <Button color="#f2f2f2" fcolor="#000000" style={{ margin: 10 + "px" }}>I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}
function Input() {
  return (
    <div className="Input">
      <img src={why} alt="돋보기" />
      <input className="Input__Input" />
      <img src={key} alt="키보드" width="28px" height="28px" style={{ marginRight: 10 + "px" }} />
      <img src={song} alt="마이크" width="28px" height="28px" />
    </div>
  );
}

function Bottom() {
  return (
    <div className="Bottom">
      <div className="Bottom__Box">대한민국</div>
      <div className="Bottom__Bottom">
        <div>
          <span>광고</span>
          <span>비지니스</span>
          <span>Google 정보</span>
          <span>검색의 원리</span>
        </div>
        <div>
          <span>개인정보처리방침</span>
          <span>약관</span>
          <span>설정</span>
        </div>
      </div>
    </div>
  );
}

const Button = styled.button`
  display: block;
  font-size: 1rem;
  padding: 0.7em 1em;
  border: 0;
  border-radius: 3px;
  box-shadow: 2px 2px 3px rgba(41, 18, 66, 0.3);
  width: fit-content;
  min-height:fit-content;
  color: ${props => props.fcolor || 'white'};
  background-color:${props => props.color || 'black'}
`

export default App;
