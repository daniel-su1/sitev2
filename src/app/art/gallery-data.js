/**
 * Gallery data file.
 *
 * To add a new piece:
 *   1. Drop the image into public/art/
 *   2. Add an entry below with src, title, and section
 *
 * Sections are created automatically from the "section" field.
 * Entries appear in the order listed here within each section.
 */

const gallery = [
  // -- Graphic Design --
  {
    src: "/art/sample-design-1.jpg",
    title: "Poster Design",
    section: "graphic design",
  },
  {
    src: "/art/sample-design-2.jpg",
    title: "Brand Identity",
    section: "graphic design",
  },

  // -- Photography --
  {
    src: "/art/sample-photo-1.jpg",
    title: "Urban",
    section: "photography",
  },
  {
    src: "/art/sample-photo-2.jpg",
    title: "Landscape",
    section: "photography",
  },
];

export default gallery;
