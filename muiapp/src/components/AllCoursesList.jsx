import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

function AllCoursesList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://code4changehackerthon25.onrender.com/courses/', {
          headers: {
            Authorization: `Bearer ${token}` // 🔐 Replace this token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading courses...</p>;

  return (
    <div className="grid gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default AllCoursesList;
