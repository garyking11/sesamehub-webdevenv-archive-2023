import {Image} from "../image-selector/image";

export interface LocationInterface {
    locations: location[];
    standardHeight: string;
    standardWidth: string;
}

export interface location {
    practiceName: string;
    doctorOne: string;
    doctorTwo: string;
    doctorThree: string;
    addressLineOne: string;
    addressLineTwo: string;
    telephone: string;
    fax: string;
    email: string;
    emailText: string;
    officeHours: string;
    image: Image;
    imageAlt: string;
    imageClass: string;
    notes: string;
    googleShareLink: string;
    googleEmbedCode: string;
    days: day;
}

export interface day {
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
}

