import { groq } from "next-sanity";

// Queries for Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

// Queries for Contact & Hours
export const hoursQuery = groq`*[_type == "hours"] | order(order asc)`;

// Queries for Flavors
export const flavorCategoriesQuery = groq`*[_type == "flavorCategory"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  order
}`;

export const flavorsQuery = groq`*[_type == "flavor" && available == true] {
  _id,
  name,
  description,
  "imageUrl": image.asset->url,
  "category": category->{
    title,
    "slug": slug.current
  }
}`;

// Queries for Toppings
export const toppingCategoriesQuery = groq`*[_type == "toppingCategory"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  order
}`;

export const toppingsQuery = groq`*[_type == "topping" && available == true] {
  _id,
  name,
  description,
  "imageUrl": image.asset->url,
  "category": category->{
    title,
    "slug": slug.current
  }
}`;

// Queries for Featured Flavors (Homepage Highlighting)
export const featuredFlavorsQuery = groq`*[_type == "flavor" && available == true][0..2] {
  _id,
  name,
  description,
  "imageUrl": image.asset->url
}`;

// Queries for Events
export const eventsQuery = groq`*[_type == "event" && date >= now()] | order(date asc) {
  _id,
  title,
  date,
  description,
  "imageUrl": image.asset->url,
  featured
}`;
