import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import HighLightText from '../components/core/HomePage/HighLightText'
import Button from '../components/core/HomePage/Button'
import banner from '../assets/Images/banner.jpg'
import banner2 from '../assets/Images/banner2.jpg'
import banner3 from '../assets/Images/banner3.jpg'

import ReactPlayer from 'react-player'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div>
        {/* Section 1 */}
        <div className='relative mx-auto flex flex-col text-white w-11/12 justify-between items-center max-w-maxContent'>
            <NavLink to={'/signup'}>
                <div className='group mx-auto rounded-full bg-richblack-800 text-richblack-200 font-bold transition-all duration-200 hover:scale-95 mt-16 p-1 w-fit'>
                    <div className='flex items-center gap-3 rounded-full py-[10px] px-10 transition-all duration-200 group-hover:bg-richblack-900 border-b-2 border-richblack-600 hover:border-none'>
                        
                        <p>Become An Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </NavLink>

            <div className='text-white text-center text-4xl font-semibold mt-7'>
            Coding Your Path to Success: <HighLightText message={"Master Essential Skills Today!"} />
            </div>

            <div className='w-[90%] text-center text-lg text-richblack-300 mt-4 font-bold'>
            Embark your coding journey with our flexible online courses.
            Learn at your own pace, from anywhere, with access to practical projects, quizzes, and expert guidance. 
            Whether you're just starting out or advancing your skills, enjoy a rewarding learning experience globally.
            </div>

            <div className='flex gap-7 mt-8'>
                <div>
                    <Button active={true} link={"/signup"}>Learn More</Button>
                </div>
                <div>
                    <Button active={false} link={"/login"}>Book a Demo</Button>
                </div>
            </div>

            



            <div className='relative my-12 mx-auto max-w-7xl'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10'>
                {/* Image and Text Block 1 */}
                <div className='text-center'>
                    <div className='shadow-blue-200 shadow-md rounded-lg overflow-hidden'>
                        <img src={banner} alt='Image 1' className='w-full h-auto' />
                    </div>
                    <p className='mt-4 text-sm md:text-base font-semibold text-gray-800'>
                        Discover The Best Courses Tailored For{' '}
                        <span className='text-lightblue font-bold'>
                            STUDENTS
                        </span>
                        , Designed To Enhance Your Learning Experience And Skill Development.
                    </p>
                </div>

                {/* Image and Text Block 2 */}
                <div className='text-center mt-6 md:mt-0'>
                    <div className='shadow-blue-200 shadow-md rounded-lg overflow-hidden'>
                        <img src={banner2} alt='Image 2' className='w-full h-auto' />
                    </div>
                    <p className='mt-4 text-sm md:text-base font-semibold text-gray-800'>
                        Featuring World-Class{' '}
                        <span className='text-lightblue font-bold'>
                            FACULTIES
                        </span>
                        , With Extensive Experience In-Depth Knowledge And Personalized One-on-One Support.
                    </p>
                </div>

                {/* Image and Text Block 3 */}
                <div className='text-center mt-6 md:mt-0'>
                    <div className='shadow-blue-200 shadow-md rounded-lg overflow-hidden'>
                        <img src={banner3} alt='Image 3' className='w-full h-auto' />
                    </div>
                    <p className='mt-4 text-sm md:text-base font-semibold text-gray-800'>
                        Empowering{' '}
                        <span className='text-lightblue font-bold'>
                            WORKING PROFESSIONALS
                        </span>
                        , With Advanced And New Skills Learning, Tailored To Thrive In Careers.
                    </p>
                </div>
            </div>
        </div>






        <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <span>
                        Unlock your <HighLightText message="Coding Genius " /> with our innovative online courses.
                    </span>
                }
                subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                btn1="Try it yourself " 
                btn2="Learn more" 
                codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
                codecolor={"text-yellow-25"}
                link1={'/signup'}
                link2={'/login'}
                backgroundGradient={"gradient-yellow"}
            />
            <CodeBlocks 
                codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
                btn1="Continue Lesson"
                btn2="Learn More"
                heading={
                    <span>
                        Start <HighLightText message="coding in seconds " />
                    </span>
                }
                subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                codecolor={"text-richblack-5"}
                position={"lg:flex-row-reverse"}
                link1={'/login'}
                link2={'/signup'}
                backgroundGradient={"gradient-blue"}
            />
        </div>

            


            <ExploreMore />
            
        </div>

        {/* Section 2 */}
        <div className=' bg-pure-greys-5 text-richblack-700 pb-[100px]'>
            <div className='homepage_bg h-[333px]'>
                <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between'>
                    <div className='h-[150px]'>

                    </div>

                    <div className='flex gap-7 text-white'>
                        <div>
                            <Button active={true} link={"/signup"}>Explore Full Catlog <FaArrowRight /></Button>
                        </div>
                        <div>
                            <Button active={false} link={"/login"}>Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between mt-[100px]'>
                <div className='flex gap-5 justify-between'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a <HighLightText message={`Job that is in demand`}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start' >
                    
                    <span style={{ fontFamily: 'YourFontFamilyName', fontSize:'25px'}}>
    The modern <HighLightText message={"Academify "}></HighLightText> sets its own standards. 
    Today, being a competitive professional
    requires more than just technical skills.
</span>

    
                        <Button active={true} link={'/signup'}>Learn More</Button>
                    </div>
                </div>

            </div>

            <TimeLineSection />
            <LearningLanguageSection />
        </div>

        {/* Section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col gap-8 items-center justify-between bg-richblack-900 text-white'>
            <InstructorSection />
            <h2 className='text-4xl text-center font-semibold mt-10'>Reviews from Other Learners</h2>
            <ReviewSlider />
        </div>

        {/* Section 4 */}
        <Footer />
    </div>
  )
}

export default Home