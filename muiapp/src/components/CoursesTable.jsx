import React from 'react'

function CoursesTable({ courses }) {
    return (
        <div>
            <table className="min-w-full table-auto text-left">
                <thead>
                    <tr className="text-blue-700 border-b">
                        <th className="p-3">Title</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Instructor</th>
                        <th className="p-3">Progress</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {courses.map((item, i) => {
                        const course = item.course;
                        const instructor = course.poster;
                        return (
                            <tr key={i} className="border-b last:border-none hover:bg-blue-50/30 transition">
                                <td className="p-3 max-w-[250px] truncate">{course.title}</td>
                                <td className="p-3">{course.difficulty}</td>
                                <td className="p-3 flex items-center gap-3">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(instructor.name)}&background=random`}
                                        alt={instructor.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span>{instructor.name}</span>
                                </td>
                                <td className="p-3">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-700 h-2 rounded-full"
                                            style={{ width: `${item.progress}%` }}
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600">{item.progress}%</span>
                                </td>
                                <td className="p-3">
                                    <span
                                        className={`text-sm font-semibold px-3 py-1 rounded-full ${item.status === "active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CoursesTable