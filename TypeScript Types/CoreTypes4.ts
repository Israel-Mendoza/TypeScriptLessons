// ENUMS

// Enums are constant array-like objects containing numbers
// but that we want them to have human readable names.

// Using the JavaScript style:

const AUTHOR = 0;
const EDIT = 1;
const READONLY = 2;

let myRole = AUTHOR;

// Using the TypeScrip style:

enum Role { AUTHOR, EDIT, READONLY };

myRole = Role.AUTHOR;

enum otherRole { VIEW = 100, NOVIEW = 200 };

myRole = otherRole.VIEW;
