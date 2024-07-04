import React from 'react'
import HighLightText from '../HomePage/HighLightText';
import Button from '../HomePage/Button';

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Academify partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Academify partners with more than 275+ leading universities and companies to bring best content and faculty",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Accredited courses that lead to recognized certifications in various fields",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Advanced systems for automated assessment and feedback to enhance learning efficiency.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Practical skills and industry-specific knowledge designed to prepare you for the workforce.",
  },
];

const LearningGrid = () => {
  return (
    <div className='grid  grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit'>
    {
        LearningGridArray.map( (card, index) => {
            return (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                    card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
                >
                {
                    card.order < 0 
                    ? (
                        <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                            <div className='text-4xl font-semibold'>
                                {card.heading}
                                <HighLightText message={card.highlightText} />
                            </div>
                            <p className='font-medium text-richblack-200'>
                                {card.description}
                            </p>
                            <div className='w-fit mt-4'>
                                <Button active={true} linkto={card.BtnLink}>
                                    {card.BtnText}
                                </Button>
                            </div>
                        </div>
                    )
                    : (<div className='flex flex-col gap-8 p-7'>
                        <h1 className='text-richblack-5 text-lg'>
                            {card.heading}
                        </h1>
                        <p className='text-richblack-300 font-medium'>
                            {card.description}
                        </p>
                    </div>)
                }

                </div>
            )
        } )
    } 
    </div>
  )
}

export default LearningGrid