import { MultiSelect } from '@mantine/core';



  

const Steptwo = ({handleFormChange, formInfo}) => {

    const {contact, tutorialType, availability} = formInfo;
   
   
     return (
       
         <form className="mt-8">
            <div className="mb-4">
            <label
              htmlFor="tutorialType"
              className="block text-gray-700 font-bold text-gray-1 mb-2"
            >
              Tutorial type
            </label>
            <MultiSelect
            label="Course"
            placeholder="Select a course"
            data={tutorialType}
          />
          </div>

             <div className="mb-4">
             <label htmlFor="contact" className="block mb-2 text-sm font-medium">Contact</label>
                 <input
                   type="tel"
                   id="contact"
                   name="contact"
                   value={contact}
                   className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
                   onChange={handleFormChange}
                   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                 />
             </div>
   
             <div className="mb-4">
               <label
                 htmlFor="availability"
                 className="block text-gray-700 font-bold text-gray-1 mb-2"
               >
                Availability
               </label>
               <input
                 type="text"
                 id="availability"
                 name="availability"
                 value={availability}
                 onChange={handleFormChange}
                 placeholder="Enter your student email"
                 className="w-full px-3 py-1 border border-black/35 rounded-md outline-blue/40"
                 required
               />
             </div>

          
         </form>
   
     )}
   export default Steptwo