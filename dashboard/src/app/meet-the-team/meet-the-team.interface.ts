import {Image} from "../image-selector/image";

export interface MeetTheTeamInterface {
  members: member[];
}

export interface member {
  name: string;
  position: string;
  bio: string;
  image: Image;
  imageAlt: string;
  imageClass: string;
}
