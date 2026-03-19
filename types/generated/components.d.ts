import type { Schema, Struct } from '@strapi/strapi';

export interface AncillarySeoDetails extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_seo_details';
  info: {
    displayName: 'SEODetails';
    icon: 'bell';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    geo_block: Schema.Attribute.JSON;
    MetaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Schema: Schema.Attribute.JSON;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ancillary.seo-details': AncillarySeoDetails;
    }
  }
}
