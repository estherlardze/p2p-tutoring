import { IoIosSearch } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";
import { FaBook } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

export const howitworks = [
    {
        id: 1,
        icon: <CgLogIn />,
        title:'Sign Up & Profile creating',
        content:'Sign up with your student email and set up your profile'
    },
    {
        id: 2,
        icon: <IoIosSearch />,
        title:'Search for Tutors',
        content:'Search for tutors based on courses and availability'
    },
    {
        id: 3,
        icon: <FaBook />,
        title:'Book a lesson',
        content:'Connect with tutors using provided contact information and book a lesson'
    },
    {
     id: 4,
     icon: <MdOutlinePayment/>,
     title:'Payment',
     content:'Pay for the lesson using your preferred payment method'
    },
    
    {
        id: 5,
        icon: <MdFeedback />,
        title:'Review',
        content:'After the tutoring sessions, students provide feedback and ratings based on their experience'
    }
]