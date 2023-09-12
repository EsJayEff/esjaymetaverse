'use client';

import { motion } from "framer-motion";
import { textContainer, textVariant2} from "../utils/motion";


export const TypingText = ({title, textStyLes}) => (
  <motion.p
  variants={textContainer}
  className={`first-letter:font-normal text-[14px] text-secondary-white ${textStyLes}`}> 

  {Array.from(title).map((Letter, index)=>(
  <motion.span 
  variants={textVariant2} key={index}>
    {Letter === ' ' ? '\u00A0' : Letter}
    </motion.span>
 ))} 
 </motion.p>
);

export const TitleText = ({title,textStyLes}) => (
<motion.h2
variants={textVariant2}
initial='hidden'
whileInView="show"
className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyLes}`}>  
{title}
</motion.h2>
);
