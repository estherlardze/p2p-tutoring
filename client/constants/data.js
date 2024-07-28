import { step1, step2, step3, profile, verify , tutor} from "@/public";
import { FaHome, FaBook, FaUser } from "react-icons/fa";


export const howitworks = [
  {
    id: 1,
    image: step1,
    step: "step 1",
    title: "Register",
    content: "Sign up to search for tutors. If you are interested in becoming a tutor, visit the 'Become a Tutor' page to learn more.",
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
    content: "Pay for the lesson using your preferred mobile money payment method.",
  },

  {
    id: 4,
    image: step2,
    step: "step 4",
    title: "Review",
    content:
      "After the tutoring sessions, students are encouraged to visit the platform and rate the tutors based on their experience.",
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
      "Fill out your profile with detailed information about your academic background, courses of expertise, availability and current academic result",
  },

  {
    id: 3,
    image: verify,
    step: "step 3",
    title: "Verification",
    content: "Your academic result will be reviewed shortly, note that you your current Average needs be 70 or above to be approved",
  },

  {
    id: 4,
    image: tutor,
    step: "step 4",
    title: "Start Tutoring",
    content:
      "Once approved, students can book you for a lesson using our platform.",
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
    name: "Tutors",
    route: "/dashboard/tutors",
    icon: <FaHome />,
  },
  {
    name: "Students",
    route: "/dashboard/students",
    icon: <FaHome />,
  },
  {
    name: "Issues",
    route: "/dashboard/issues",
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

