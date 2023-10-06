import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  const courses = props.coursesData;
  const category = props.category;
  const [likedCourses, setlikedCourses] = useState([]);

  function getCourse() {
    if (category === "All") {
      let allcourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((course) => {
          allcourses.push(course);
        });
      });
      console.log(allcourses);
      return allcourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="w-[100%] h-[auto] grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 content-center-center justify-center gap-6 rounded-md">
      {getCourse().map((course) => {
        return (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setlikedCourses={setlikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
