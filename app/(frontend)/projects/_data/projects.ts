
export interface ProjectType {
    id: number;
    name: string;
    title: string;
    introduction: string;
    technology: string[];
    github: string;
    linkedIn: string;
    link: string;
    images:string[];
}

export const projectsItems : ProjectType[]=[
    {
        id:1,
        name:"Portfolio",
        title:"Portfolio Website (Next.js) — 2025",
        introduction:"This is my personal portfolio website built with Next.js and TypeScript, designed to showcase both my resume and my skills in Next.js, including database interaction and authentication without using an external backend. MongoDB is used for data storage, and NextAuth handles secure authentication.\n\n The portfolio includes multiple sections: a Home page with quick resume download, an About page highlighting my skills, courses, education, and work experience, a Projects page displaying my projects with detailed views, and a Notes page that demonstrates my advanced Next.js abilities. Users can sign up and log in to add, edit, and delete their own notes, while all notes are viewable with pagination. Zustand is used for managing logged-in user data, dark/light mode, and logout functionality. Actions such as adding, editing, deleting notes, or logging out are accompanied by toast notifications indicating success or errors.\n\n The website is fully responsive for both desktop and mobile, with smooth animations throughout, especially on the About page, implemented with custom animations and Framer Motion. The footer includes links to LinkedIn, GitHub, email, and Telegram.\n\n Overall, this project demonstrates my ability to build a fully functional, interactive, and visually engaging web application using Next.js, combining front-end skills with real-world data handling and authentication.",
        technology:[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Zustand",
             "Next-Auth",
            "Mongoose",
            "Swiper",
            "React Hot Toast",
            "React Icons",
            "Zod"
        ],
        github:"",
        linkedIn:"",
        link:"",
        images:[
            "/images/projects/p1/p-next1.png",
            "/images/projects/p1/p-next2.png",
            "/images/projects/p1/p-next3.png",
            "/images/projects/p1/p-next4.png",
            "/images/projects/p1/p-next5.png",
            "/images/projects/p1/p-next6.png",
            "/images/projects/p1/p-next7.png",
            "/images/projects/p1/p-next8.png",
            "/images/projects/p1/p-next9.png",
            "/images/projects/p1/p-next10.png",
            "/images/projects/p1/p-next11.png",
            "/images/projects/p1/p-next12.png",
            "/images/projects/p1/p-next13.png",
            "/images/projects/p1/p-next14.png",
            "/images/projects/p1/p-next15.png",
            "/images/projects/p1/p-next16.png",
            "/images/projects/p1/p-next17.png",
            "/images/projects/p1/p-next18.png",
            "/images/projects/p1/p-next19.png",
            "/images/projects/p1/p-next20.png",
            "/images/projects/p1/p-next21.png",
            "/images/projects/p1/p-next22.png",
            "/images/projects/p1/p-next23.png",
            "/images/projects/p1/p-next24.png",
        ]
    },
    {
        id:2,
        name:"Online Store",
        title:"Hanieh Shop (React.js) — 2024",
        introduction:"Hanieh Shop is an online e-commerce website built with React.js. The entire front-end design and implementation were done by me, and the admin panel is protected by a password. The project includes user authentication, and data is stored and retrieved using MongoDB. It leverages advanced tools and libraries such as Redux, React Router, React Query, Formik, and Tailwind CSS. Project pages include Home, Category, Subcategory, Product Details, Cart, Shipping, Payment Result, User Login/Register, and Admin Panel.",
        technology: [
            "React.js",
            "TypeScript",
            "Vite",
            "Redux",
            "React Router",
            "React Query",
            "Axios",
            "Formik",
            "Yup",
            "Tailwind CSS",
            "shadcn/ui",
            "Swiper",
            "React Icons",
            "React Multi Date Picker"
        ],
        github:"https://github.com/haniejnsh/store-site-project",
        linkedIn:"https://www.linkedin.com/feed/update/urn:li:activity:7254778465642561536/",
        link:"",
        images:[
            "/images/projects/p2/p-react1.png",
            "/images/projects/p2/p-react2.png",
            "/images/projects/p2/p-react3.png",
            "/images/projects/p2/p-react4.png",
            "/images/projects/p2/p-react5.png",
            "/images/projects/p2/p-react6.png",
            "/images/projects/p2/p-react7.png",
            "/images/projects/p2/p-react8.png",
            "/images/projects/p2/p-react9.png",
            "/images/projects/p2/p-react10.png",
            "/images/projects/p2/p-react11.png",
            "/images/projects/p2/p-react12.png",
            "/images/projects/p2/p-react13.png",
            "/images/projects/p2/p-react14.png",
            "/images/projects/p2/p-react15.png",
        ]
    },
    {
        id:3,
        name:"Shoe Store",
        title:"Shoe Store (Vanilla JavaScript) — 2024",
        introduction:"This is a simple e-commerce project fully built with Vanilla JavaScript, without using any frameworks like React. It is specifically designed for mobile screens only (Mobile-only), utilizing modern frontend tools and libraries.",
        technology:[
            "Vanilla JavaScript",
            "Tailwind CSS for styling",
            "Vite as the build tool",
            "Axios for API requests",
            "JSON Server for mock backend",
            "JSON Server Auth for authentication",
            "Navigo for client-side routing"
        ],
        github:"https://github.com/haniejnsh/js-final-project",
        linkedIn:"https://www.linkedin.com/feed/update/urn:li:activity:7254208129205166081/",
        link:"",
        images:["/images/projects/p3/p-js1.png",
            "/images/projects/p3/p-js2.png",
            "/images/projects/p3/p-js3.png",
            "/images/projects/p3/p-js4.png",
            "/images/projects/p3/p-js5.png",
            "/images/projects/p3/p-js6.png",
            "/images/projects/p3/p-js7.png",
            "/images/projects/p3/p-js8.png",
            "/images/projects/p3/p-js9.png"
        ]
    }
    
]