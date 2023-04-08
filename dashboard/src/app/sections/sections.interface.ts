export interface SectionsInterface {
    navOptions: string;
    gacode: string;
    tagline: string;
    name: string;
    sm_version: string;
    color0: string;
    color1: string;
    images: string[];
    subnavOptions: string;
    formData: FormData[]
}

export interface FormData {
    name: string;
    content_layout_style: string;
    slideshow_layout_style: string;
    spotlight_layout_style: string;
    testimonial_rotator_layout_style: string;
    spotlight_flip_layout_style: string;
    assn_logo_layout_style: string;
}
