import React from 'react'
import { Search } from '@mui/icons-material'

function CoursesSearch() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-4">
      {/* Search Bar */}
      <div className="search flex items-center shadow-md gap-3 bg-blue-50 rounded-sm px-4 py-2 w-full md:w-fit">
        <Search />
        <input
          type="text"
          placeholder="Search for course"
          className="w-full md:w-auto h-full focus:outline-none bg-blue-50"
        />
      </div>

      {/* Filters */}
      <div className="filters flex flex-col sm:flex-row gap-4 w-full md:w-fit">
        <div className="filter shadow-md px-4 py-2 flex items-center bg-blue-50 rounded-sm w-full sm:w-auto">
          <select
            name="difficulty"
            className="bg-blue-50 focus:outline-none w-full sm:w-auto"
          >
            <option value="">Filter by difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="filter shadow-md px-4 py-2 flex items-center bg-blue-50 rounded-sm w-full sm:w-auto">
          <select
            name="sort"
            className="bg-blue-50 focus:outline-none w-full sm:w-auto"
          >
            <option value="">Sort by</option>
            <option value="popular">Most popular</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default CoursesSearch
