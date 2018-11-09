// 整个页面

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Details2 from './details/Details2';
import Content from './content/Content';
import Relevant from './relevant/Relevant';
import Okr_o from './okr/Okr_o';
import Comment from './comment/Comment';

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <Details2></Details2>
        <div class="areaTwo">
        <Content></Content>
        <Relevant></Relevant>
        <div class="areaThree">
        <Okr_o></Okr_o>

        </div>
        <div class="areaFour">
          <Comment></Comment>
        </div>
        </div>
        </div>
      </div>
    );
  }
}


export default App;
