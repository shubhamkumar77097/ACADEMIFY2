import React from 'react';

import logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import timelineImage from '../../../assets/Images/TimelineImage.png';

const timeline = [
  {
    logo: logo1,
    heading: 'Innovative Teaching',
    Description: 'Empowering minds through creative and effective teaching methods',
  },
  {
    logo: logo2,
    heading: 'Problem-Solving Expertise',
    Description: 'Fully committed to overcoming challenges with practical solutions',
  },
  {
    logo: logo3,
    heading: 'Continuous Learning',
    Description: 'Dedicated to fostering an environment of perpetual growth and development',
  },
  {
    logo: logo4,
    heading: 'Mentorship Excellence',
    Description: 'Guiding and nurturing future professionals with personalized support and expertise',
  },
];

const TimeLineSection = () => {
  return (
    <div className="w-full mx-auto max-w-maxContent mt-10 md:mt-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {timeline.map((element, index) => (
            <div className="flex flex-row gap-6 items-center" key={index}>
              <div className="flex items-center bg-white w-12 h-12 rounded-full justify-center">
                <img src={element.logo} alt="" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="font-semibold text-lg md:text-xl">{element.heading}</h2>
                <p className="text-base">{element.Description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative md:w-1/2 shadow-blue-200">
          <img src={timelineImage} alt="" className="object-cover w-full h-auto md:h-fit" />

          <div className="absolute bg-caribbeangreen-700 text-white flex uppercase py-6 md:py-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center md:flex-row gap-5 px-7">
              <div className="border-r border-caribbeangreen-300 pr-5 md:pr-7">
                <p className="text-2xl md:text-3xl font-bold">10</p>
                <p className="text-caribbeangreen-300 text-sm md:text-base">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold">250</p>
                <p className="text-caribbeangreen-300 text-sm md:text-base">Types of Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
