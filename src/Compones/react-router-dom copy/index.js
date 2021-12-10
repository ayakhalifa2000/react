"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("regenerator-transform/src/react-router-dom copy/cjs/react-router-dom.min");
} else {
  module.exports = require("regenerator-transform/src/react-router-dom copy/cjs/react-router-dom");
}
