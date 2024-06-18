import * as dao from "./dao.js";
import Database from "../Database/index.js";

const images = [
  "algorithms.jpg",
  "cloud.jpg",
  "compiler.jpg",
  "java.jpg",
  "Math.jpg",
  "python.jpg",
  "reactjs.jpg",
  "rust.png",
  "teslabot.jpg",
  "pencil.jpg",
  "stacked.jpg",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};
Database.courses = Database.courses.map((item) => ({
  ...item,
  image: `/${getRandomImage()}`,
}));

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const newCourse = {
      ...req.body,
      image: `/${getRandomImage()}`,
      number: new Date().getTime(),
    };
    const course = await dao.createCourse(newCourse);
    res.json(course);
  };
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  };
  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course);
    res.json(status);
  };

    app.get("/api/courses", findAllCourses);
    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:id", deleteCourse);
    app.put("/api/courses/:id", updateCourse);
}
