import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import { Rate } from 'antd'

import Boy from "../../assets/png/boy.png"
import Back from "../../assets/svg/backarrow.svg"

const Info = () => {

    const { state } = useLocation()
    console.log(state, "zankpp")

    const navigate = useNavigate()

  return (
    <div className='w-[912px]  mx-auto h-[500px] flex'>
        <div className='flex'>
            <img src={Boy} alt='Doctor' className='w-[338px] h-[500px] rounded-tl-xl rounded-bl-xl' />
            <div className='flex flex-col gap-[22px] px-[45px] overflow-y-scroll  pt-[25px] bg-[#fff] rounded-tr-xl rounded-br-xl w-full'>
                <img src={Back} alt='back' className='w-6 h-6 cursor-pointer' onClick={() => {navigate(-1); window.scrollTo(0, 0)}} />
                {/* <FaArrowLeftLong className='text-[24px] text-[#3E5EA9]' /> */}
                <p className='text-[#0C1322] font-euclid font-medium text-[24px]'>{state?.name}</p>
                <div className='w-[263px] bg-[#F1F5FC] h-[52px] gap-2 rounded-lg p-2 flex items-center'>
                    <p className='font-euclid text-[#0C1322] text-base '>Consultation fee :</p>
                    <p className='text-[#3E5EA9] font-euclid font-medium text-[24px]'>{state?.amount}</p>
                </div>
                <p className='text-[#5D626C] font-euclid text-base'>Speciality: <span className='ml-1'>{state?.speciality}</span></p>
                <p className='text-[#5D626C] font-euclid text-base'>Heala ID : <span className='ml-1'>{state?.id}</span></p>
                <div className='flex items-center gap-2'>
                    <p className='text-[#5D626C] font-euclid text-base'>4.9</p>
                    <Rate value={5} />
                </div>
                <div className='w-[478px] bg-[#F1F5FC] h-[112px] border border-[#3E5EA9] gap-2 rounded-lg p-3 flex items-center'>
                    <p className='text-[#293F71] font-euclid font-medium text-base'>
                        With 24/7 access to online doctors, care is always available, anytime and anywhere. 
                        Select and see your favorite providers again and again, right from your smartphone, 
                        tablet or computer
                    </p>
                </div>
                <div className='flex gap-[8px] flex-col mt-[48px] w-full '>
                    <button
                        type='button'
                        className='bg-[#3E5EA9] rounded-lg h-[48px]  w-[478px]'
                    >
                        <p className='text-[#fff] text-base font-euclid'>Start Consultation</p>
                    </button>
                    <button
                        type='button'
                        className='bg-transparent flex items-center  h-[48px] justify-center  w-[478px]'
                    >
                        <p className='text-[#3E5EA9] text-base font-euclid'>View previous consultation</p>
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Info