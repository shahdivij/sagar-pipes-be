export default ({ env }) => {
  return {
    tinymce: {
      enabled: true,
      config: {
        editor: {
          outputFormat: "html",
          editorConfig: {
            height: 500,
            menubar: false,

            valid_elements: "*[*]",
            extended_valid_elements: "*[*]",
            valid_children:
              "+body[style],+div[div|p|h1|h2|h3|h4|h5|h6|ul|ol|li|table|thead|tbody|tr|td|th]",

            convert_urls: false,
            entity_encoding: "raw",

            plugins:
              "advlist autolink lists link image charmap preview anchor \
searchreplace visualblocks code fullscreen table emoticons nonbreaking \
insertdatetime media table code help wordcount",

            toolbar:
              "undo redo | styles link | bold italic forecolor backcolor | \
alignleft aligncenter alignright alignjustify | \
image media table emoticons visualblocks code | \
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

/*    upload: {
     config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET"),
            ACL: null,
          },
        },

        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },

        baseUrl: `https://${env("AWS_BUCKET")}.s3.${env("AWS_REGION")}.amazonaws.com`,
      },
    },*/
  };
};
