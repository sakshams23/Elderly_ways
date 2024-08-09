import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LinearProgress from '@mui/material/LinearProgress';
import old from "../assets/old.png";
import ngo from "../assets/ngo.png";
import Volunteer from "../assets/volunteer.png";
import Poster from '../assets/Poster.mp4';
import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger);

const SpotLight = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const locomotiveScroll = new LocomotiveScroll();
    const stories = [
        {
            title: "Elderly Person's Journey",
            link: 'https://timesofindia.indiatimes.com/readersblog/untold-story/life-in-old-age-homes-9590/',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: old,
            progress: 75,
            fundRemaining: '1500',
            category: 'Elderly',
        },
        {
            title: 'NGO Spotlight',
            link: 'https://timesofindia.indiatimes.com/readersblog/untold-story/life-in-old-age-homes-9590/',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: ngo,
            progress: 40,
            fundRemaining: '3000',
            category: 'NGO',
        },
        {
            title: 'Community Support',
            link: 'https://timesofindia.indiatimes.com/readersblog/untold-story/life-in-old-age-homes-9590/',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: Volunteer,
            progress: 60,
            fundRemaining: '2000',
            category: 'Community',
        },
        {
            title: "Elderly Person's Journey",
            link: 'https://timesofindia.indiatimes.com/readersblog/untold-story/life-in-old-age-homes-9590/',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            src: old,
            progress: 85,
            fundRemaining: '1000',
            category: 'Elderly',
        },
    ];


    const filteredStories = selectedCategory === "All"
        ? stories
        : stories.filter(story => story.category === selectedCategory);

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className='bg-richblack-900 rounded shadow-lg w-full rounded-tl-3xl px-5 rounded-tr-3xl pb-40 mb-40'>
            <h2 className='md:text-center md:text-3xl md:px-5 md:py-12  md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-indigo-200 md:via-red-200 md:to-yellow-100 md:bg-transparent      text-xl px-5 py-12  text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-transparent'>Join Hands to Uplift Our Elders: Community Fundraisers for a Brighter Tomorrow!</h2>
            
            <div className="mb-6 px-5" >
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="md:block md:py-2 md:w-1/4 md:text-sm md:text-skin-200  md:bg-transparent md:border-1 md:border-b-2 md:border-gray-200 md:dark:text-gray-400 dark:white md:focus:outline-none md:focus:ring-0 md:focus:border-gray-200 peer    block py-2 w-full text-sm text-skin-200  bg-transparent border-1 border-b-2 border-gray-200 dark:text-gray-400 dark:white focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    
                >
                    <option value="All" className="bg-gray-900 text-white hover:bg-gray-800">All</option>
                    <option value="Elderly" className="bg-gray-900 text-white hover:bg-gray-800">Lend a Hand</option>
                    <option value="NGO" className="bg-gray-900 text-white hover:bg-gray-800">Need Supplies</option>
                    <option value="Community" className="bg-gray-900 text-white hover:bg-gray-800">Support a cause</option>
                
                </select>
            </div>

            <div  className="md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2 grid grid-cols-1 grid-rows-auto gap-y-5" >
                <div className="md:col-span-2 md:row-span-6">
                    <div>
                        <video  className="rounded-tl-md rounded-tr-md rounded-b-md w-full h-[550px] object-cover" muted onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()} src={Poster} alt="How it works?" />
                    </div>
                </div>
                
                {filteredStories.slice(0, 4).map((story, index) => (
                    <div
                        key={index}
                        
                        className={`md:col-span-2 md:row-span-3 col-span-2 row-span-3 ${index === 1 ? 'md:col-start-3 md:row-start-1' : ''} ${index === 2 ? 'md:col-start-3 md:row-start-4' : ''} ${index === 3 ? 'md:col-start-5 md:row-start-1' : ''} ${index === 4 ? 'md:col-start-5 md:row-start-4' : ''}`}
                    >
                        <img
                            src={story.src}
                            alt={`${story.title}`}
                            className='rounded-tl-md rounded-tr-md w-full h-40 object-cover'
                        />
                        <div className='bg-orange-100 px-5 py-2 rounded-b-md shadow-md'>
                            <a href={story.link}>
                                <h3 className='text-xl font-semibold my-1 text-black'>{story.title}</h3>
                            </a>
                            
                            <div className='flex items-center my-2 justify-between'>
                                <LinearProgress variant="determinate" value={story.progress} className='w-[20vw]' />
                                <a href={`/fund-remaining/${index}`} className=''>
                                    {story.fundRemaining}₹ Raised
                                </a>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpotLight;
