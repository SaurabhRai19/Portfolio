import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import linkedin from '../assets/icons/linkedin.svg'
import mightycoder from '../assets/mightycoder.svg'
import myphoto from '../assets/myphoto.jpeg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:saurabhrai473@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={myphoto} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Saurabh <span>Rai</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="!#"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.linkedin.com/in/saurabh-rai-8385161a0/" target="_blank"><img src={linkedin} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/SaurabhRai19" target="_blank"><img src={github} alt="github" className="sidebar__icon mr-3" />Github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Vadodara, India</div>
                <div className="sidebar__item">saurabhrai473@gmail.com</div>
                <div className="sidebar__item">6353957718/7433829520</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;