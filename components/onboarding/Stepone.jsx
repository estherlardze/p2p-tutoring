'use client'

import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Stepone = ({ handleFormChange, formInfo }) => {
  const [searchValue, setSearchValue] = useState('');
  const { bio, courses } = formInfo;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      e.preventDefault();
      if (!courses.includes(searchValue.trim())) {
        handleFormChange({
          target: {
            name: 'courses',
            value: [...courses, searchValue.trim()],
          },
        });
        setSearchValue('');
      }
    }
  };

  const removeCourse = (course) => {
    handleFormChange({
      target: {
        name: 'courses',
        value: courses.filter((c) => c !== course),
      },
    });
  };

  return (
    <form className="mt-8">
      <div className="mb-4">
        <label htmlFor="bio" className="block mb-2 text-sm font-medium">
          Bio (250 words max)
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={3}
          className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
          placeholder="something small about you"
          value={bio}
          onChange={handleFormChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="courses" className="block text-gray-700 font-bold text-gray-1 mb-2">
          Courses
        </label>
        <div className="flex flex-wrap items-center border border-black/35 rounded-md px-2 py-1">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full mr-2 mb-2"
            >
              {course}
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() => removeCourse(course)}
              >
                <IoMdClose />
              </button>
            </div>
          ))}
          <input
            type="text"
            id="courses"
            name="courses"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-2 py-1 outline-none border-none"
            placeholder="Type a course name and press Enter"
          />
        </div>
      </div>
    </form>
  );
};

export default Stepone;
