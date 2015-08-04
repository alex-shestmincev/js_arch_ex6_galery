import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

/* eslint-disable no-multi-spaces */
// Only import from `route-handlers/*`
import Application  from "route-handlers/Application";

import GalleryPage     from "route-handlers/GalleryPage";
import NotFoundPage from "route-handlers/NotFoundPage";
/* eslint-enable */

// polyfill
if(!Object.assign)
	Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
    <Route name="gallery" path="/gallery" handler={GalleryPage} />
    <DefaultRoute handler={GalleryPage} />
		<NotFoundRoute handler={NotFoundPage} />
	</Route>
);
