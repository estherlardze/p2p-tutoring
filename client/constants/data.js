import { step1, step2, step3, profile, verify , tutor} from "@/public";
import { FaPlus } from "react-icons/fa6";
import { TbUserPlus } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { FaHome, FaBook, FaUser } from "react-icons/fa";


export const howitworks = [
  {
    id: 1,
    image: step1,
    step: "step 1",
    title: "Register",
    content: "Sign up with your student email and set up your profile either as a student or tutor",
  },
  {
    id: 2,
    image: step2,
    step: "step 2",
    title: "Search for Tutors",
    content:
      "Search for tutors based on courses and Connect with tutors using provided contact information and book a lesson.",
  },

  {
    id: 3,
    image: step3,
    step: "step 3",
    title: "Payment",
    content: "Pay for the lesson using your preferred payment method",
  },

  {
    id: 4,
    image: step2,
    step: "step 4",
    title: "Review",
    content:
      "After the tutoring sessions, students provide feedback and ratings based on their experience",
  },
];

export const whychooseus = [
  {
    id: 1,
    image: profile,
    step: "step 1",
    title: "Sign up",
    content: "Create an account on our platform by entering your student id to confirm you are a student",
  },
  {
    id: 2,
    image: step2,
    step: "step 2",
    title: "Profile Setup",
    content:
      "Fill out your profile with detailed information about your academic background, courses of expertise, availability and current result",
  },

  {
    id: 3,
    image: verify,
    step: "step 3",
    title: "Verification",
    content: "Your uploaded result will be reviewed if you pass the criteria to be a tutor",
  },

  {
    id: 4,
    image: tutor,
    step: "step 4",
    title: "Start Tutoring",
    content:
      "Once approved, students can find and book sessions with you based on your availability",
  },
];

export const features = [
  "Enables students to easily find tutors based on specific subjects, availability, and ratings, ensuring they can connect with the most suitable tutor for their needs.",
  "The platform provides an accessible way for students to find help when they need it, regardless of their location, making academic support more inclusive",
  "Students can send tailored requests to tutors detailing their specific course and learning gaps. This ensures that the help provided is targeted and effective",
  "Allows students to rate and review tutors, helping others make informed decisions based on the experiences of their peers. This builds trust and enhances the overall quality of the tutoring services",
  "This platform fosters a peer-to-peer learning community. Students can connect with others who excel in their desired subjects, creating a valuable network for academic support and potentially even friendships.",
];





export const adminLinks = [
  {
    name: "Tutor",
    route: "/dashboard/tutor-request",
    icon: <FaHome />,
  },
  {
    name: "Admin-support",
    route: "/dashboard/admin-support",
    icon: <FaBook />
  }
]


export const  tutorLinks = [
  {
    name: "Home",
    route: "/dashboard",
    icon: <FaHome />,
  },
  {
    name: "Bookings",
    route: "/dashboard/bookings",
    icon: <FaBook />,
  },
  {
    name: "Support",
    route: "/dashboard/support",
    icon: <FaUser />,
  },
]

export const studentLinks = [
  {
    name: "Home",
    route: "/dashboard",
    icon: <FaHome />,
  },
  {
    name: "Bookings",
    route: "/dashboard/tutor-request",
    icon: <FaUser />,
  },
  {
    name: "Ratings",
    route: "/dashboard/ratings",
    icon: <FaUser />,
  },
  {
    name: "Support",
    route: "/dashboard/support",
    icon: <FaBook />
  },
]

