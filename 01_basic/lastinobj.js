const course = {
    coursename: "js in english",
    price: "12345",
    courseInstructor: "payal"  // ✅ use : not =
};

// ✅ Object Destructuring
const { courseInstructor: instructor } = course;
console.log(instructor);
// console.log(courseInstructor);  // Output: payal







