'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface PropsType {
  isEducation: boolean;
}
interface ItemsType {
  title: string;
  place: string;
  date: string;
  description?: string;
}

export default function Experience({isEducation} :PropsType) {

  const experiences = [
  {
    title: "Frontend Developer",
    place: "ghestila Company, Tehran",
    date: "Dec 2024 to Jun 2025",
    description: "Developed and maintained the company website using React. Collaborated with the team to implement responsive and user-friendly interfaces.",
  },
  {
    title: "React Intern",
    place: "Maktab Sharif Bootcamp",
    date: "Apr 2024 to Oct 2024",
    description: "Completed a 7-month intensive React course and built several practical projects using modern frontend tools.",
  },
  {
    title: "Electronics Specialist",
    place: "Dorkav Company, Tehran",
    date: "Dec 2021 to Jun 2023",
    description: "Worked on designing, testing, and troubleshooting electronic circuits.",
  }
]

const education = [
  {
    title: "Master’s degree",
    place: "Electrical Engineering (Electronics) , Shahid Beheshti University, Tehran",
    date: "(2018–2021)",
  },
  {
    title: "Bachelor’s degree",
    place: "Electrical Engineering , Shahid Bahonar University of Kerman ",
    date: "(2013–2018)",
  }
]


const ExperienceItem = ({ title, place, date, description }: ItemsType) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <li ref={ref} className="relative pl-7 lg:pl-9 border-l-2 border-pink-100 mb-0 pb-8 lg:pb-16 lg:pt-[2px]">
      
      <figure className="absolute -left-[10px] lg:-left-[17px] top-1 lg:-top-[1px]">
        <svg 
        className="w-5 h-5 lg:w-8 lg:h-8" 
        viewBox="0 0 20 20"
        >
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="#fce7f3"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="10"
            cy="10"
            r="8"
            stroke="#fd7ec4"
            strokeWidth="2"
            fill="none"
            pathLength="1"
            style={{ pathLength }}
          />
        </svg>
      </figure>
      <h3 className="text-lg font-bold text-[var(--stone-700)] mb-1 lg:mb-2">{title}</h3>
      <p className="text-sm font-bold text-[var(--stone-700)]lg:text-base lg:text-[var(--stone-600)]">{place} — {date}</p>
      {(description)?
        <p className="text-sm text-[var(--stone-600)] text-justify mt-1 lg:text-base">{description}</p>
      :""}
    </li>
  )
}


  return (
    <ul className="flex flex-col gap-0">
      {isEducation?
      education.map((item, i) => (
        <ExperienceItem key={i} {...item} />
      )):
      experiences.map((item, i) => (
        <ExperienceItem key={i} {...item} />
      ))}
      
    </ul>
  )
}

