// Presentation only: maps content to a colour tone. Each tone is defined
// once in App.css (light + dark), so the same domain always gets the same colour.
export const categoryTone = {
  Healthcare: "teal",
  EdTech: "violet",
  Commerce: "amber",
  Mobile: "sky",
  "Open source": "coral",
  Web: "rose",
};

const cycle = ["teal", "violet", "amber", "coral", "sky"];

export const toneAt = (index) => cycle[index % cycle.length];
