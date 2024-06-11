import { tuto1, tuto2, tuto3, tuto4, tuto5, avatar } from "../public";

export const tutors = [
  {
    id: 1,
    name: "David Wilson",
    contact: "david.wilson@example.com",
    image: tuto5,
    courses: ["Computer Science", "Mathematics"],
    programme: "Computer Engineering",
    bio: "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
    tutorialType: ["Online", "In-person"],
    price: 10,
    availability: [
      {
        day: "Mon",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Tue",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Wed",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Thu",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Fri",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sat",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sun",
        time: ["10:00 AM - 11:00 AM"],
      }
    ],
    ratings: [
      {
        id: 1,
        name: "Sarah Johnson",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
        star:5
        },
      {
        id: 2,
        name: "John Doe",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:4
        },
      {
        id: 3,
        name: "Andrew Burns",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:5
        },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    contact: "sarah.johnson@example.com",
    image: tuto1,
    courses: ["Economics", "Statistics"],
    availability: [
      {
        day: "Mon",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Tue",
        time:[ "10:00 AM - 11:00 AM"],
      },
      {
        day: "Wed",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Thu",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Fri",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sat",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sun",
        time:[ "10:00 AM - 11:00 AM"],
      }
    ],
    programme: "Business Administration",
    bio: "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
    tutorialType: ["In-person"],
    price: 15,
    ratings: [
      {
        id: 1,
        name: "Sarah Johnson",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:3
        },
      {
        id: 2,
        name: "John Doe",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:4
        },
      {
        id: 3,
        name: "Andrew Burns",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:5
        },
    ],
  },
  {
    id: 3,
    name: "Chris Lee",
    contact: "chris.lee@example.com",
    availability: [
      {
        day: "Mon",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Tue",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Wed",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Thu",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Fri",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sat",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sun",
        time: ["10:00 AM - 11:00 AM"],
      }
    ],
    image: tuto2,
    courses: ["Art", "Design"],
    programme: "Sociology",
    bio: "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
    tutorialType: ["Online"],
    price: 10,
    ratings: [
      {
        id: 1,
        name: "Sarah Johnson",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:1
        },
      {
        id: 2,
        name: "John Doe",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:5
        },
      {
        id: 3,
        name: "Andrew Burns",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:5
        },
    ],
  },
  {
    id: 4,
    name: "Anna Taylor",
    contact: "anna.taylor@example.com",
    availability: [
      {
        day: "Mon",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Tue",
      time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Wed",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Thu",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Fri",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sat",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sun",
        time: ["10:00 AM - 11:00 AM"],
      }
    ],
    image: tuto3,
    courses: ["Political Science", "Sociology"],
    programme: "Political Science",
    bio: "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
    tutorialType: ["In-person"],
    price: 12,
    ratings: [
      {
        id: 1,
        name: "Sarah Johnson",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:3
        },
      {
        id: 2,
        name: "John Doe",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:5
        },
      {
        id: 3,
        name: "Andrew Burns",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:1
        },
    ],
  },
  {
    id: 5,
    name: "Mark Robinson",
    contact: "mark.robinson@example.com",
    availability: [
      {
        day: "Mon",
        time: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"],
      },
      {
        day: "Tue",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Wed",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Thu",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Fri",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sat",
        time: ["10:00 AM - 11:00 AM"],
      },
      {
        day: "Sun",
        time: ["10:00 AM - 11:00 AM"],
      }
    ],
    image: tuto4,
    courses: ["Business Administration", "Finance"],
    programme: "Biomedical Engineering",
    bio: "Lorem ipsum dolor sit amet, consectetueradipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
    tutorialType: ["Online", "In-person"],
    price: 12,
    ratings: [
      {
        id: 1,
        name: "Sarah Johnson",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum dolor sit amet, consectpenatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:2
        },
      {
        id: 2,
        name: "John Doe",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ips massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:5
        },
      {
        id: 3,
        name: "Andrew Burns",
        image:avatar,
        department: "Computer Science",
        message:
          "Lorem ipsum d Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montesnascetur ridiculus mus.",
          star:5
        },
    ],
  },
];
