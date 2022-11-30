import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { getCoursesOrderedByCategory } from "../services/courses.service";

function CoursesList() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    getCoursesOrderedByCategory(setCourses);
  }, []);

  console.log(courses);

  return (
    <>
      {!courses ? (
        <p>loading...</p>
      ) : (
        <div className="container">
          {courses.map((category, index) => (
            <div key={index}>
              <div className="row">
                <h2>{category.category}</h2>
                <hr />
              </div>
              <div className="row">
                {category.courses.map((course) => (
                  <div key={course.id} className="col-md-4">
                    <Course course={course} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function Course({ course }) {
  return (
    <div className="card shadow-lg border-0">
      <div className="card-body">
        {/* card img */}
        <img
          src={course.thumbnailPath}
          alt={course.name}
          className="img-fluid"
          style={{ height: "200px" }}
        />
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text">{course.description}</p>
        <Link to={`/courses/${course.id}`} className="btn btn-primary">
          Ver Curso
        </Link>
      </div>
    </div>
  );
}

export default CoursesList;
