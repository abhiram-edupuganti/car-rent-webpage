"use client";

import React from 'react'
import Image from 'next/image'
import { type } from 'os'
import { CustomButtonProps } from '@/types';
const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, isDisabled, rightIcon} : CustomButtonProps) => {
  return (
    // <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">explore Cars
    // </button>
    <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}

    > 
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className='relative h-6 w-6'>
        <Image src={rightIcon} alt='right-icon' fill className='object-contain'/>
      </div>
    )}
    </button>
    

  )
}

export default CustomButton