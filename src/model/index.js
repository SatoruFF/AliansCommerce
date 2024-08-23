import { papers } from "./papers";

let formattedPapers = papers.map((p, i) => {
  p.id = i + 1;
  return p;
});

export default formattedPapers;
