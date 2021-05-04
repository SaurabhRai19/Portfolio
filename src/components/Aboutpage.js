import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';
import { motion } from 'framer-motion'
const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "Handling database, server using Nodejs, api using with SQL and NoSQL DB's.",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using flask or React."
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "A daily problem solver in HackerRank, Codechef and GeeksforGeeks."
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "Minimalistic user interface designer using figma and designing principles."
    },
    {
        icon: computer,
        title: "Machine Learning",
        about: "Build Machine Learning models using Pandas, Numpy, Scikitlearn libraries."
    },
]


const Aboutpage = () => {
    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="about"
        variants={about_variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <h6 className="about__intro">
            I’m resilient and adaptive. Capable of working with a team and motivating co-workers. Ability to master diverse web technologies.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Aboutpage;