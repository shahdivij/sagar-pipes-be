export default ({ env }) => {
  const uploadMaxFileSizeMb = env.int("UPLOAD_MAX_FILE_SIZE_MB", 250);
  const s3Enabled = env.bool("AWS_S3_ENABLED", false);

  const uploadConfig = s3Enabled
    ? {
        provider: "aws-s3",
        providerOptions: {
          ...(env("AWS_BASE_URL") ? { baseUrl: env("AWS_BASE_URL") } : {}),
          rootPath: env("AWS_S3_PREFIX", ""),
          s3Options: {
            ...(env("AWS_ACCESS_KEY_ID") &&
            (env("AWS_ACCESS_SECRET") || env("AWS_SECRET_ACCESS_KEY"))
              ? {
                  credentials: {
                    accessKeyId: env("AWS_ACCESS_KEY_ID"),
                    secretAccessKey:
                      env("AWS_ACCESS_SECRET") || env("AWS_SECRET_ACCESS_KEY"),
                  },
                }
              : {}),
            region: env("AWS_REGION"),
            ...(env("AWS_ENDPOINT") ? { endpoint: env("AWS_ENDPOINT") } : {}),
            forcePathStyle: env.bool("AWS_FORCE_PATH_STYLE", false),
            params: {
              ACL: env("AWS_ACL") || undefined,
              Bucket: env("AWS_BUCKET"),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      }
    : {};

  return {
    tinymce: {
      enabled: true,
      config: {
        editor: {
          outputFormat: "html",
          tinymceSrc: "/tinymce/js/tinymce/tinymce.min.js",
          editorConfig: {
            height: 500,
            menubar: false,
            valid_elements: "*[*]",
            extended_valid_elements: true,
            valid_children: "*[*]",
            convert_urls: false,
            entity_encoding: "raw",
            plugins:
              "advlist autolink lists link image charmap preview anchor \
                            searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                            insertdatetime media table code help wordcount",
            toolbar:
              "undo redo | styles link | bold italic forecolor backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            image media table emoticons visualblocks code|\
                            nonbreaking bullist numlist outdent indent | searchreplace removeformat | help",
            style_formats: [
              {
                title: "Headings",
                items: [
                  { title: "h1", block: "h1" },
                  { title: "h2", block: "h2" },
                  { title: "h3", block: "h3" },
                  { title: "h4", block: "h4" },
                  { title: "h5", block: "h5" },
                  { title: "h6", block: "h6" },
                ],
              },
              {
                title: "Text",
                items: [
                  { title: "Paragraph", block: "p" },
                  {
                    title: "Paragraph with small letters",
                    block: "small",
                  },
                ],
              },
            ],
          },
        },
      },
    },
    upload: {
      config: {
        ...uploadConfig,
        sizeLimit: uploadMaxFileSizeMb * 1024 * 1024,
      },
    },
  };
};
