import model from "./model.js";
export const createCourse = (course) => {
  delete course._id
  return model.create(course);
}
export const findAllCourses = () => model.find();
export const findCourseByNumber = (courseNumber) => model.findOne({ number: courseNumber});
