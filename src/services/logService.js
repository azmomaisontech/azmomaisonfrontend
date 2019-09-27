// initialize a logger service of your choice
import Raven from "raven-js";

function init() {
  // Raven.config("https://0830f040ad394249b4dfcd0c8ff4d864@sentry.io/1551580", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
