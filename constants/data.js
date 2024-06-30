import { step1, step2, step3 } from "@/public";
import { FaPlus } from "react-icons/fa6";
import { TbUserPlus } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";

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
    image: step1,
    step: "step 1",
    title: "Sign up",
    content: "Create an account on our platform or log in if you already have one",
  },
  {
    id: 2,
    image: step2,
    step: "step 2",
    title: "Profile Setup",
    content:
      "Fill out your profile with detailed information about your academic background, courses of expertise, availability and transcript",
  },

  {
    id: 3,
    image: step3,
    step: "step 3",
    title: "Verification",
    content: "Our team will review your profile and verify your credentials",
  },

  {
    id: 4,
    image: step2,
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

export const meetingdata = [
  {
    id:1,
    title: "New meeting",
    content:"Start an instant meeting",
    icon:FaPlus,
    color:"#f56042"
  },
  {
    id:2,
    title: "Join meeting",
    content:"Via invitation link",
    icon:TbUserPlus,
    color:"#28a0eb"
  },
  {
    id:3,
    title: "Schedule meeting",
    content:"Plan your meeting",
    icon:MdDateRange,
    color:"#630791"
  },
  {
    id:4,
    title: "View Recording",
    content:"Meeting recordings",
    icon:CiVideoOn,
    color:"#d1b204"
  }
]


export const bookings = [
  {
    id: 1,
    course: "Mathematics",
    name:'John Doe',
    date: "2024-06-25",
    time: "10:00",
    lessonType: "Online",
    learningGoals: "I want to improve my understanding of calculus.",
    studentEmail: "student1@example.com"
  },
  {
    id: 2,
    course: "Physics",
    date: "2024-06-26",
    name:'John Doe',
    time: "14:00",
    lessonType: "In-person",
    learningGoals: "I need help with quantum mechanics.",
    studentEmail: "student2@example.com"
  },
  {
    id: 3,
    course: "Chemistry",
    date: "2024-06-27",
    name:'John Doe',
    time: "11:00",
    lessonType: "Online",
    learningGoals: "I'm struggling with organic chemistry reactions.",
    studentEmail: "student3@example.com"
  },
  {
    id: 4,
    course: "Biology",
    date: "2024-06-28",
    name:'John Doe',
    time: "09:00",
    lessonType: "In-person",
    learningGoals: "I want to learn more about genetics.",
    studentEmail: "student4@example.com"
  },
  {
    id: 5,
    course: "English",
    date: "2024-06-29",
    name:'John Doe',
    time: "15:00",
    lessonType: "Online",
    learningGoals: "I need help improving my essay writing skills.",
    studentEmail: "student5@example.com"
  }
];


