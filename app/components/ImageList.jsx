import React from "react";
import ImageListItem from "components/ImageListItem";

export default class ImageList extends React.Component {
  render() {
    var { images, settings } = this.props;
    var items = [];
    console.log("settings",settings)

    images.forEach(function(image, idx) {
      items.push(<ImageListItem key={idx} image={image} />);
      if ((idx+1) % settings.n === 0) items.push(<br/>);
    });

    return (
      <div>
        {items}
      </div>
    );
  }
}
//TEMPLATE.propTypes = {
//  aaa: React.PropTypes.object.isRequired,
//  bbb: React.PropTypes.string.isRequired,
//  ccc: React.PropTypes.bool
//};