import React from "react";

export default class ImageListItem extends React.Component {
  render() {
    var { image } = this.props;
    return (
      <div className="ImageListItem">
        <img src={image} Align="absmiddle" />
      </div>
    );
  }
}
//TEMPLATE.propTypes = {
//  aaa: React.PropTypes.object.isRequired,
//  bbb: React.PropTypes.string.isRequired,
//  ccc: React.PropTypes.bool
//};