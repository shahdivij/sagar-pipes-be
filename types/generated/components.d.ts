import type { Schema, Struct } from '@strapi/strapi';

export interface AncillaryAvailableSizesSection extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_available_sizes_sections';
  info: {
    displayName: 'Available Sizes Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'ancillary.button', false>;
    heading: Schema.Attribute.String;
    TechnicalSpecs: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
  };
}

export interface AncillaryButton extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
  };
}

export interface AncillaryCategoryCarousel extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_category_carousels';
  info: {
    displayName: 'Category Carousel';
  };
  attributes: {
    product_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-category.product-category'
    >;
  };
}

export interface AncillaryContactUs extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_contact_uses';
  info: {
    displayName: 'Contact Us';
  };
  attributes: {
    emailAddress: Schema.Attribute.Email;
    emailHeading: Schema.Attribute.String;
    faxHeading: Schema.Attribute.String;
    faxNumber: Schema.Attribute.String;
    officeAddress: Schema.Attribute.Text;
    officeHeading: Schema.Attribute.String;
    officeMapUrl: Schema.Attribute.String;
    phoneHeading: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    webHeading: Schema.Attribute.String;
    webUrl: Schema.Attribute.String;
  };
}

export interface AncillaryExploreMore extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_explore_mores';
  info: {
    displayName: 'Explore More';
  };
  attributes: {
    button: Schema.Attribute.Component<'ancillary.button', false>;
    heading: Schema.Attribute.String;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface AncillaryFaq extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    faqDescription: Schema.Attribute.Text;
    faqHeading: Schema.Attribute.String;
    faqLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    faqLogoExpanded: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface AncillaryFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_footer_columns';
  info: {
    displayName: 'Footer Column';
  };
  attributes: {
    heading: Schema.Attribute.String;
    navLink: Schema.Attribute.Component<'ancillary.nav-link', true>;
  };
}

export interface AncillaryFooterLegalLinks extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_footer_legal_links';
  info: {
    displayName: 'Footer Legal Links';
  };
  attributes: {
    heading: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AncillaryIndustries extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_industries';
  info: {
    displayName: 'Industries';
    icon: 'archive';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    IndustryDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    IndustryName: Schema.Attribute.String;
    IndustryVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    product_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::product-category.product-category'
    >;
    ProductImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ProductName: Schema.Attribute.String;
  };
}

export interface AncillaryModal extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_modals';
  info: {
    displayName: 'modal';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AncillaryNavLink extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_nav_links';
  info: {
    displayName: 'navLink';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AncillaryNewsroom extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_newsrooms';
  info: {
    displayName: 'Newsroom';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AncillaryOpenings extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_openings';
  info: {
    displayName: 'Openings';
  };
  attributes: {
    heading: Schema.Attribute.String;
    jobs: Schema.Attribute.Relation<'oneToMany', 'api::job.job'>;
    preHeading: Schema.Attribute.String;
  };
}

export interface AncillaryOtherApplications extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_other_applications';
  info: {
    displayName: 'Other Applications';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonURL: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    industry: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AncillaryOurApplications extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_our_applications';
  info: {
    displayName: 'Our Applications';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mainText: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    text: Schema.Attribute.Component<'ancillary.text', true>;
  };
}

export interface AncillaryOurHistory extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_our_histories';
  info: {
    displayName: 'Our History';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    year: Schema.Attribute.String;
  };
}

export interface AncillaryOurHistorySection extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_our_history_sections';
  info: {
    displayName: 'Our History Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    milestones: Schema.Attribute.Component<'ancillary.text', true>;
    ourHistory: Schema.Attribute.Component<'ancillary.our-history', true>;
    startLabel: Schema.Attribute.String;
  };
}

export interface AncillaryOurValuesPointers extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_our_values_pointers';
  info: {
    displayName: 'Our Values Pointers';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    ourValuesPointers: Schema.Attribute.Component<'ancillary.text', true>;
  };
}

export interface AncillaryOurValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_our_values_sections';
  info: {
    displayName: 'Our Values Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    ourValues: Schema.Attribute.Component<
      'ancillary.our-values-pointers',
      false
    >;
  };
}

export interface AncillaryProcessCarousel extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_process_carousels';
  info: {
    displayName: 'Process Carousel';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AncillaryProductCategoryCollection
  extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_product_category_collections';
  info: {
    displayName: 'ProductCategoryCollection';
    icon: 'arrowUp';
  };
  attributes: {
    Button: Schema.Attribute.Component<'ancillary.button', false>;
    Heading: Schema.Attribute.Text;
    PreHeading: Schema.Attribute.Text;
    product_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::product-category.product-category'
    >;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface AncillaryProductCategorySection
  extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_product_category_sections';
  info: {
    displayName: 'Product Category Section';
  };
  attributes: {
    productCategories: Schema.Attribute.Component<'ancillary.products', true>;
  };
}

export interface AncillaryProductGallery extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_product_galleries';
  info: {
    displayName: 'Product Gallery';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface AncillaryProductProcess extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_product_processes';
  info: {
    displayName: 'Product Process';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mainText: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    stepNo: Schema.Attribute.Integer;
    text: Schema.Attribute.Component<'ancillary.text', true>;
  };
}

export interface AncillaryProducts extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_products';
  info: {
    displayName: 'Products';
    icon: 'archive';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    product_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::product-category.product-category'
    >;
    sideImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AncillarySection extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    button: Schema.Attribute.Component<'ancillary.button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    preHeading: Schema.Attribute.String;
  };
}

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

export interface AncillarySocials extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface AncillaryTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    description: Schema.Attribute.Text;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    topic: Schema.Attribute.String;
  };
}

export interface AncillaryText extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface AncillaryWhatDoWeDo extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_what_do_we_dos';
  info: {
    displayName: 'What Do We Do';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    mainText: Schema.Attribute.Text;
  };
}

export interface AncillaryWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_why_choose_uses';
  info: {
    displayName: 'Why Choose Us';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    whyChooseUsPointers: Schema.Attribute.Component<'ancillary.text', true>;
  };
}

export interface AncillaryWhyUsPointers extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_why_us_pointers';
  info: {
    displayName: 'Why Us Pointers';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    point: Schema.Attribute.Integer;
  };
}

export interface AncillaryWhyUsSection extends Struct.ComponentSchema {
  collectionName: 'components_ancillary_why_us_sections';
  info: {
    displayName: 'Why Us Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    whyUsPointers: Schema.Attribute.Component<
      'ancillary.why-us-pointers',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ancillary.available-sizes-section': AncillaryAvailableSizesSection;
      'ancillary.button': AncillaryButton;
      'ancillary.category-carousel': AncillaryCategoryCarousel;
      'ancillary.contact-us': AncillaryContactUs;
      'ancillary.explore-more': AncillaryExploreMore;
      'ancillary.faq': AncillaryFaq;
      'ancillary.footer-column': AncillaryFooterColumn;
      'ancillary.footer-legal-links': AncillaryFooterLegalLinks;
      'ancillary.industries': AncillaryIndustries;
      'ancillary.modal': AncillaryModal;
      'ancillary.nav-link': AncillaryNavLink;
      'ancillary.newsroom': AncillaryNewsroom;
      'ancillary.openings': AncillaryOpenings;
      'ancillary.other-applications': AncillaryOtherApplications;
      'ancillary.our-applications': AncillaryOurApplications;
      'ancillary.our-history': AncillaryOurHistory;
      'ancillary.our-history-section': AncillaryOurHistorySection;
      'ancillary.our-values-pointers': AncillaryOurValuesPointers;
      'ancillary.our-values-section': AncillaryOurValuesSection;
      'ancillary.process-carousel': AncillaryProcessCarousel;
      'ancillary.product-category-collection': AncillaryProductCategoryCollection;
      'ancillary.product-category-section': AncillaryProductCategorySection;
      'ancillary.product-gallery': AncillaryProductGallery;
      'ancillary.product-process': AncillaryProductProcess;
      'ancillary.products': AncillaryProducts;
      'ancillary.section': AncillarySection;
      'ancillary.seo-details': AncillarySeoDetails;
      'ancillary.socials': AncillarySocials;
      'ancillary.testimonial': AncillaryTestimonial;
      'ancillary.text': AncillaryText;
      'ancillary.what-do-we-do': AncillaryWhatDoWeDo;
      'ancillary.why-choose-us': AncillaryWhyChooseUs;
      'ancillary.why-us-pointers': AncillaryWhyUsPointers;
      'ancillary.why-us-section': AncillaryWhyUsSection;
    }
  }
}
