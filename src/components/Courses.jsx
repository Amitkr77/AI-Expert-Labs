import "../styles/courses.css";

const Courses = () => {
  return (
    <section className="courses">
      <h2>Popular Courses</h2>
      <div className="course-grid">
        <div className="card">AI & Machine Learning</div>
        <div className="card">Data Science</div>
        <div className="card">Full Stack + AI</div>
      </div>
    </section>
  );
};

export default Courses;
