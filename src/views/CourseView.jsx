import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCourseById } from "../services/courses.service";

function CourseView() {
  let { courseId } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourseById(courseId, setCourse);
  }, []);

  return (
    <>
      {!course ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <img
                src={course.info.thumbnailPath}
                alt={course.info.name}
                className="img-fluid"
                width="100%"
              />
            </div>
            <div className="col-md-6 p-3">
              <h1>{course.info.name}</h1>
              <p>{course.info.description}</p>
            </div>
          </div>
          <div className="row mb-3">
            {course.classes.map((classItem) => (
              <div key={classItem.id} className="col-md-4">
                <ClassItem classItem={classItem} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function ClassItem({ classItem }) {
  return (
    <div className="card shadow-lg border-0">
      <div className="card-body">
        {/* card img */}
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${classItem.videoPath.replace(
            "https://youtu.be/",
            ""
          )}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h5 className="card-title">{classItem.title}</h5>
        <p className="card-text">{classItem.description}</p>
      </div>
    </div>
  );
}

export default CourseView;
