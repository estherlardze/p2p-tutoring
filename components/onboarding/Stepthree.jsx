import React from 'react';
import { MdUpload } from "react-icons/md";


const Stepthree = ({ handleFormChange, formInfo }) => {
    const { availability, picture, transcript } = formInfo;

    const triggerFileInput = (id) => {
        document.getElementById(id).click();
    };

    return (
        <form className="mt-8">
            <div className="mb-4">
            <label
                 htmlFor="picture"
                 className="block text-gray-700 font-bold text-gray-1 mb-2"
               >
                Upload Image for profile
               </label>
                <input
                    type="file"
                    id="picture"
                    name="picture"
                    onChange={handleFormChange}
                    className="hidden"
                    required
                />
                <button
                    type="button"
                    onClick={() => triggerFileInput('picture')}
                    className="flex items-center justify-center w-full px-3 py-1 border border-blue/65 rounded-md outline-blue/40 text-black/70"
                >
                    <MdUpload className="h-6 w-6 mr-2" />
                    Upload Profile Picture
                </button>
            </div>

            <div className="mb-4">
            <label
                 htmlFor="transcript"
                 className="block text-gray-700 font-bold text-gray-1 mb-2"
               >
                Upload Transcript
               </label>
                <input
                    type="file"
                    id="transcript"
                    name="transcript"
                    onChange={handleFormChange}
                    className="hidden"
                    required
                />
                <button
                    type="button"
                    onClick={() => triggerFileInput('transcript')}
                    className="flex items-center justify-center w-full px-3 py-1 border border-blue/65 rounded-md outline-blue/40 bg-blue-50 text-black/70"
                >
                    <MdUpload className="h-6 w-6 mr-2" />
                     only .pdf
                </button>
            </div>
        </form>
    );
};

export default Stepthree;
