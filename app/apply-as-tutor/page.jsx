'use client'

import React, { useState } from 'react';
import { MdUpload } from "react-icons/md";
import { MultiSelect } from '@mantine/core';
import { TagsInput } from '@mantine/core';
import { Navbar, Footer } from '@/components';

const TutorForm = () => {
  const [values, setValues] = useState([]);
  const [formInfo, setFormInfo] = useState({
    bio: '',
    courses: [],
    contact: '',
    tutorialType: ['Online', 'In-person'],
    availability: '',
    picture: '',
    transcript: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormInfo((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
  };

  return (
    <div className="bg-black/5 min-h-screen">
      <div className='bg-white'>
      <Navbar />
      </div>
      <h1 className='text-center pt-4 font-bold text-2xl mt-[70px]'>Apply to be a tutor</h1>
      <div className='w-[90%] sm:max-w-lg mx-auto p-6 my-8 bg-white shadow-md rounded-lg mt-5 h-[80vh] scrollable-container overflow-y-scroll'>
        <form onSubmit={handleSubmit} className=''>
          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-2 font-medium mb-2">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formInfo.bio}
              onChange={handleChange}
              placeholder='Tell us about yourself and why you will be a great tutor'
              rows="4"
              className="w-full p-2 border border-gray-2 outline-blue/25 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="courses" className="block text-gray-2 font-medium mb-2">Courses</label>
            <TagsInput data={[]} value={values} onChange={setValues} placeholder='courses you want to teach' className='py-2'/>
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-2 font-medium mb-2">Amount per hour</label>
            <input
              type="text"
              id="amount"
              name="contact"
              value={formInfo.contact}
              placeholder='Amount per hour for the tutor'
              onChange={handleChange}
              className="w-full p-2 border border-gray-2 outline-blue/25 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-2 font-medium mb-2">Contact</label>
            <input
              type="text"
              id="contact"
              placeholder='your phone number'
              name="contact"
              value={formInfo.contact}
              onChange={handleChange}
              className="w-full p-2 border border-gray-2 outline-blue/25 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="availability" className="block text-gray-2 font-medium mb-2">Availability</label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formInfo.availability}
              onChange={handleChange}
              className="w-full p-2 border border-gray-2 outline-blue/25 rounded-md"
              required
            />
          </div>

          <MultiSelect
            label="Tutorial Type"
            placeholder="Choose the type of tutorial you would like to offer"
            data={formInfo.tutorialType}
            className='py-6'
          />

          <div className="my-4">
            <label htmlFor="picture" className="block text-gray-2 font-medium mb-2">Upload Image for profile</label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <label
              htmlFor="picture"
              className="flex items-center justify-center w-full px-3 py-1 border border-blue/65 rounded-md outline-blue/40 text-black/70 cursor-pointer"
            >
              <MdUpload className="h-6 w-6 mr-2" />
              Upload Profile Picture
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="transcript" className="block text-gray-2 font-medium mb-2">Upload Transcript</label>
            <input
              type="file"
              id="transcript"
              name="transcript"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <label
              htmlFor="transcript"
              className="flex items-center justify-center w-full px-3 py-1 border border-blue/65 rounded-md outline-blue/40 bg-blue-50 text-black/70 cursor-pointer"
            >
              <MdUpload className="h-6 w-6 mr-2" />
              Only .pdf
            </label>
          </div>

          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-blue text-white font-medium rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
</div>
      <div className=''>
      <Footer />
      </div>
</div>
  )
}

export default TutorForm