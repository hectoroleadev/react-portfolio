const MIN_LANDSCAPE = 600;
const CONTACT_SECTION_ID = "contact-section";
const RESUME_SECTION_ID = "resume-section";
const CONTAINER_ID = "container";
const COL_STYLE = "col";
const COVER_CONTAINER_STYLE = "cover-container";
const COVER_CONTAINER_LANDSCAPE_STYLE = "cover-container-landscape";

const getClassListById = (id) => document.getElementById(id).classList;
const addClassById = (id, className) => getClassListById(id).add(className);
const removeClassById = (id, className) =>
  getClassListById(id).remove(className);


const changeOrientationColumnsClass = () => {
  let isLandscape = window.matchMedia("(orientation: landscape)");
  let screenHeight = window.screen.height;

  if (isLandscape.matches && screenHeight < MIN_LANDSCAPE) {
    removeClassById(CONTAINER_ID, COVER_CONTAINER_STYLE);
    addClassById(CONTAINER_ID, COVER_CONTAINER_LANDSCAPE_STYLE);    
    addClassById(CONTACT_SECTION_ID, COL_STYLE);
    addClassById(RESUME_SECTION_ID, COL_STYLE);
  } else {
    removeClassById(CONTACT_SECTION_ID, COL_STYLE);    
    removeClassById(RESUME_SECTION_ID, COL_STYLE);
    removeClassById(CONTAINER_ID, COVER_CONTAINER_LANDSCAPE_STYLE);
    addClassById(CONTAINER_ID, COVER_CONTAINER_STYLE);
  }
};

window.onload = changeOrientationColumnsClass;
window.addEventListener("resize", changeOrientationColumnsClass);
