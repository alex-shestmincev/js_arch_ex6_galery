import React from "react";

export default class Settings extends React.Component {
  render() {
    return (
      <div>
        <p>
          <label>n</label>
          <input type="text" ref="n" />
        </p>
        <p>
          <label>m</label>
          <input type="text" ref="m" />
        </p>
      </div>
    );
  }
}