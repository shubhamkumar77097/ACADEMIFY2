import React from 'react';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({ btn1, link1, link2, btn2, position, heading, subheading, codeblock, backgroundGradient, codecolor }) => {
    return (
        <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10 mx-5`}>
            {/* left section */}
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
                <p className='text-2xl md:text-4xl font-semibold'>{heading}</p>
                <p className='text-richblack-300 font-bold'>{subheading}</p>
                <div className='flex gap-7 mt-7'>
                    <Button active={true} link={link1}>
                        <div className="flex items-center gap-2">
                            {btn1}
                            <FaArrowRight />
                        </div>
                    </Button>
                    <Button active={false} link={link2}>{btn2}</Button>
                </div>
            </div>
            
            {/* right section */}
            <div className='h-fit flex text-sm md:text-base w-full py-4 md:w-[500px] relative glass'>
                <div className='text-center flex flex-col w-1/12 font-inter text-richblack-400 font-bold'>
                    {[...Array(11)].map((_, index) => (
                        <p key={index}>{index + 1}</p>
                    ))}
                </div>
                <div className={`w-11/12 flex flex-col gap-2 font-bold font-mono ${codecolor} pr-2`}>
                    <div className={`${backgroundGradient}`}></div>
                    <TypeAnimation 
                        sequence={[codeblock, 5000, ""]}
                        repeat={Infinity}
                        omitDeletionAnimation={true}
                        cursor={true}
                        style={{
                            whiteSpace: "pre-line",
                            display: "block",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CodeBlocks;
