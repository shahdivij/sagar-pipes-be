import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'",
            "'unsafe-inline'",
            "'unsafe-eval'",
            '*.tinymce.com',
            '*.tiny.cloud',
            'https:',
          ],
          'connect-src': [
            "'self'",
            '*.tinymce.com',
            '*.tiny.cloud',
            'blob:',
            'https:',
            '*.strapi.io',
          ],
          'img-src': [
            "'self'",
            '*.tinymce.com',
            '*.tiny.cloud',
            'data:',
            'blob:',
            'https:',
            'dl.airtable.com',
            'strapi.io',
            's3.amazonaws.com',
            'sagar-assets.s3.ap-south-1.amazonaws.com',
            'cdn.jsdelivr.net',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https:',
            'sagar-assets.s3.ap-south-1.amazonaws.com'
          ],
          'style-src': [
            "'self'",
            "'unsafe-inline'",
            '*.tinymce.com',
            '*.tiny.cloud',
          ],
          'font-src': [
            "'self'",
            'data:',
            '*.tinymce.com',
            '*.tiny.cloud',
          ],
          'frame-src': [
            "'self'",
            '*.tinymce.com',
          ],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
