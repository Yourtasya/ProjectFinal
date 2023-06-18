import React, { Component } from "react";

export default class NavBar extends Component {
  render(): React.ReactNode {
    return (
      <div className="NavBar">
        <div className="ButtonListInNavBar">
          <button className="ButtonInNavBar"> кнопки</button>
          <button className="ButtonInNavBar"> кнопки</button>
          <button className="ButtonInNavBar"> кнопки</button>
          <button className="ButtonInNavBar"> кнопки</button>
          <button className="ButtonInNavBar"> кнопки</button>
        </div>
      </div>
    );
  }
}
