// okr详情栏

import React, { Component } from 'react';
import logo from './logo.svg';
import './Content.css';

class Content extends Component {
  render() {
    var user_name = "王嬷嬷";
    var title = "OKR 首先是沟通工具：团队中的每个人都要写OKR，所有这些OKR都会放在一个文档里。任何员工都可以看到每个人在这个季度最重要的目标是什么，团队这个季度的目标是什么。通过月度会议Review ，时时跟进OKR： 在月度会议上需要。目标必须一致：制定者和执行者目标一致、团队和个人的  "
    return (
      <div>
        <div class="content">
        <div class="okr-title">
         <img class="img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4135477902,3355939884&fm=11&gp=0.jpg"/>
        <a class="name">{user_name}</a>
        <a class="time">编辑于 2018-10-10</a>
        </div>
        <div class="okr-details">
        <a>{title}</a>
        </div>
        </div>
      </div>
    );
  }
}

export default Content;