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
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
  app.post("/api/courses", (req, res) => {
    const course = {
      ...req.body,
      _id: new Date().getTime().toString(),
      image: `/${getRandomImage()}`,
    };
    Database.courses.push(course);
    res.send(course);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses.filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });

}
