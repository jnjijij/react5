// sentry.js
import { Integrations } from '@sentry/tracing';

const initSentry = () => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: 'YOUR_SENTRY_DSN',
      integrations: [new Integrations.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }
};

export default initSentry;
