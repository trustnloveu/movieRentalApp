import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn:
      "https://ea74f3a515b6487890f23666d8d47157@o481610.ingest.sentry.io/5531748",
    release: "movieRentalApp" + process.env.npm_package_version,
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
