import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById("root");
  const tabObj1 = {
    title: "First Title",
    content: "content for the first",
  }
  const tabObj2 = {
    title: "Second Title",
    content: "second content",
  }
  const tabObj3 = {
    title: "Third Title",
    content: "Third is the worst",
  }
  const tabArr = [tabObj1, tabObj2, tabObj3]
  ReactDom.render(<div><Clock/><Tabs items={tabArr}/></div>, root);
})