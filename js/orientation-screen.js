const MIN_LANDSCAPE = 600;

const getClassListById = (id) => document.getElementById(id).classList;
const addClassById = (id, className) => getClassListById(id).add(className);
const removeClassById = (id, className) =>
  getClassListById(id).remove(className);

const changeOrientationColumnsClass = () => {
  let isLandscape = window.matchMedia("(orientation: landscape)");
  let screenHeight = window.screen.height;

  if (isLandscape.matches && screenHeight < MIN_LANDSCAPE) {
    removeClassById("container", "cover-container");
    addClassById("container", "cover-container-landscape");
    addClassById("section-one", "col");
    addClassById("section-two", "col");
  } else {
    removeClassById("section-one", "col");
    removeClassById("section-two", "col");
    removeClassById("container", "cover-container-landscape");
    addClassById("container", "cover-container");
  }
};

window.onload = changeOrientationColumnsClass;
window.addEventListener("resize", changeOrientationColumnsClass);
