import model from "./model.js";
export const createCourse = (course) => {
  delete course._id
  return model.create(course);
}
export const findAllCourses = () => model.find().lean();
export const findCourseByNumber = (courseNumber) => model.findOne({ number: courseNumber});
export const findCourseByID = (courseID) => model.findById(courseID);
export const deleteCourse = (courseID) => model.deleteOne({ _id: courseID});
export const updateCourse = (courseID, course) => model.updateOne({ _id: courseID}, {$set: course});