import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './Components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/style.scss'


const Layout = (props)=>{
  return (
    <div>
      <p>Header</p>
      {props.content}
      <p>Footer</p>
    </div>
  );
}





ReactDOM.render(<IndecisionApp/>, document.querySelector("#app"));
