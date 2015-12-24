import React from 'react';
import { Router, Route, Link } from 'react-router';
import { render } from 'react-dom';
var mainElement = document.querySelector("#main");
if(!mainElement ){
  mainElement = document.createElement("div");
  mainElement.setAttribute("id","main");
  var bodyElement = document.getElementsByTagName("body").item(0);
  bodyElement.appendChild(mainElement);
}
var HelloWorld = React.createClass({
  render: function () {
    return (
      <p>
        Hello, <input type='text' placeholder='Your name here'/>!
      </p>
    );
  },
});
render  (
<Router>
  <Route path="/" component={HelloWorld}>
    <Route path='hello' handeler={HelloWorld} />
  </Route>
</Router>,mainElement

)
