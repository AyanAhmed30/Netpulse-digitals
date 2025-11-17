// types/blog-d-t.ts
import { StaticImageData } from "next/image";

export interface IBlogDT {
  id: number;
  img?: StaticImageData;
  images?: StaticImageData[];
  title: string;
  slug: string;
  date: string;
  category: string;
  author: string;
  videoId?: string;
  avatar?: StaticImageData;
  blogQuote?: boolean;
  video?: boolean;
  imgSlider?: boolean;
  blogQuoteTwo?: boolean;
  blogHeroSlider?: boolean;
  desc?: string;
  content?: string; // Add content field for detailed blog content
}