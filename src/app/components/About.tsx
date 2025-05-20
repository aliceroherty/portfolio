"use client";

import React, { useContext } from 'react';
import { motion } from 'motion/react';
import { slideInLeft } from '../utils/motion';
import { Element } from 'react-scroll';
import { NavHeightContext } from './Nav';

const About = () => {
    const navHeight = useContext(NavHeightContext);

    return (
        <Element
            name="about"
            className="w-full"
            style={{ marginTop: navHeight }}
        >
            <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full text-left mt-1 mb-24"
                id="about"
                name="about"
            >
                <h4 className="lg:text-6xl text-5xl font-bold sm:mt-0 mb-16 text-pink-300 text-center lg:text-left">
                    About Me
                </h4>
                <div className="lg:w-1/2 sm:text-3xl text-lg">
                    <p className="mb-16">
                        I am a skilled software developer with experience in
                        JavaScript and expertise in .NET Core. I'm a quick
                        learner and collaborate closely with clients to create
                        effecient and user-friendly solutions that solve real
                        world problems. Let's work together and bring your ideas
                        to life!
                    </p>
                    <p className="mb-16">
                        I began programming in high school with VB.NET. I then
                        enrolled at New Brunswick Community College / NBCC where
                        I majored in Web and Mobile application development.
                        After two years of training at NBCC I graduated with
                        honours.
                    </p>
                    <p className="mb-16">
                        I then began my career at a small startup called BCJobs
                        where I would stay for two years working as the sole
                        developer at the company. While holding this position I
                        migrated their application from a traditional data
                        center to Amazon Web Services. I also maintained and
                        expanded upon their job board which was built in .NET
                        Core.
                    </p>
                </div>
            </motion.div>
        </Element>
    );
};

export default About;
