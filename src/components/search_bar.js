import React, { Component } from "react";

//검색바가 추가기능을 가지도록 --> 함수형에서 클래스형 컴포넌트로 바꿈
class SearchBar extends Component {
  //state 사용하기 전에 초기화 -> constructor 메소드 안에 넣음
  constructor(props) {
    super(props); //super호출하면 부모 클래스의 메소드 호출가능

    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
