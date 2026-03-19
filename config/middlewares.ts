// config/middlewares.ts
export default [
  // Required core middlewares (must come first)
  'strapi::errors', // <-- This was missing and caused your error
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  // Custom security policy (can be placed anywhere after 'strapi::security')
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
            '*.tiny.cloud'
          ],
          'connect-src': [
            "'self'",
            '*.tinymce.com',
            '*.tiny.cloud',
            'blob:',
            '*.strapi.io'
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            '*.tinymce.com',
            '*.tiny.cloud',
            'dl.airtable.com',
            'strapi.io',
            'cdn.jsdelivr.net',
            's3.amazonaws.com'
          ],
          'style-src': [
            "'self'",
            "'unsafe-inline'",
            '*.tinymce.com',
            '*.tiny.cloud'
          ],
          'font-src': [
            "'self'",
            'data:',
            '*.tinymce.com',
            '*.tiny.cloud'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:'
          ],
          'frame-src': [
            "'self'",
            '*.tinymce.com'
          ]
        }
      }
    }
  }
];
