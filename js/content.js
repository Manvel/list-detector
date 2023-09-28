const dataIter1 = [];
const dataIter2 = [];
for (const elem of document.querySelectorAll(`*:has(> * > * > *)`)) {
  const obj = {elem, classes: elem.getAttribute("class")};
  dataIter1.push(obj);
}


for (const {elem, classes} of dataIter1) {
  let match = false;
  for (const pivot of dataIter1) {
    if (pivot.elem === elem) continue;
    // TODO: check for vocabulary.
    // TODO: check for roles.
    if (classes === pivot.classes && elem.parentElement === pivot.elem.parentElement) {
      match = true;
    }
  }
  if (match) dataIter2.push({elem});
}

// Set on parents as this is the wrapper for lists
for (const {elem} of dataIter2) {
  if (elem.parentElement === document.body) continue;
  elem.parentElement.dataset.maybeList = true;
}

// Cleanup child detected as list
for (const elem of document.querySelectorAll("[data-maybe-list]")) {
  if (elem.parentElement.closest("[data-maybe-list]")) {
    delete elem.dataset.maybeList;
  }
}
