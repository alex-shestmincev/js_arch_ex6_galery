import React from "react";
import ImageList from "components/ImageList";
import Settings from "components/Settings";

import styles from "./GalleryPage.css";

export default class GalleryPage extends React.Component {
	static getProps() {
		return {};
	}
	render() {

    var images = [
      "https://upload.wikimedia.org/wikipedia/en/f/fc/REACT_Color_Logo.jpg",
      "http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png",
      "https://pbs.twimg.com/profile_images/1868507182/react.jpg.jpg",
      "http://communicatebetterblog.com/wp-content/uploads/2015/03/keep-calm-and-react-8-1.png",
      "http://www.watershed.co.uk/sites/default/files/styles/dshed-collection/public/project_images/REACT_logo_4-3_0.jpg?itok=mZgUPDZK",
      "http://www.cultivatecreative.co.uk/wp-content/uploads/2012/03/react-toolkit-logo-940x629.jpg",
      "http://www.reactcharity.org/images/img_react-logo.jpg",
      "https://yt3.ggpht.com/-1somqzfPLs0/AAAAAAAAAAI/AAAAAAAAAAA/M_2BF6kP41w/s900-c-k-no/photo.jpg",
      "http://reactintl.org/wp-content/uploads/2015/02/React-International-INC_final.bmp",
      "http://thumbs.dreamstime.com/z/act-react-action-reaction-two-side-human-psyche-one-can-logic-emotions-43487831.jpg",
      "http://img13.deviantart.net/d85d/i/2011/313/3/5/react_logo_design_by_oliver240693-d4fn9m7.jpg",
      "https://d2eip9sf3oo6c2.cloudfront.net/series/covers/000/000/005/full/react_flux_series_banner_2.png?1404147531",
      "https://www.progville.com/wp-content/uploads/2015/01/react-native-ios-javascript.jpg",
      "http://mjw56.github.io/content/images/2015/05/react_native.png"
    ]

    var settings = {
      n: 5,
      m: 4
    }


		return <div className={styles.this}>
			<h2>GalleryPage</h2>
      <div className={styles.settingsBlock} >
        <Settings />
      </div>
      <div className={styles.imagesBlock}>
        <ImageList images={images} settings={settings} />
      </div>
		</div>;
	}
}
