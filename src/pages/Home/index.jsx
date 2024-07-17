import React, { Fragment, useState } from 'react'
import Doctor from "../../assets/png/doctor_guys.png"
import { Listbox, Transition } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'

import Bayo from "../../assets/png/bayo.png"
import Dammy from "../../assets/png/dammy.png"
import Odun from "../../assets/png/odun.png"
import Pizzy from "../../assets/png/pizzy.png"
import Consultation from "../../assets/png/consultation.png"

import Arrow from "../../assets/svg/forward_arrow_white.svg"
import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/search.svg"
import Hourglass from "../../assets/svg/hourglass.svg"


const location = [
    {name: "Lagos"},
    {name: "Ogun"}
]
const gender = [
    {name: "Gender"},
    {name: "Male"},
    {name: "Female"}
]
const ratings = [
    {name: "Ratings"},
    {name: 5},
    {name: 4}
]


const Home = () => {
    const [selected, setSelected] = useState(location[0])
    const [selectedGender, setSelectedGender] = useState(gender[0])
    const [selectedRatings, setSelectedRatings] = useState(ratings[0])
    const [search, setSearch] = useState("")

  return (
    <div className='w-full bg-[#fff] flex flex-col mt-20 lg:mt-0'>
        <div className='flex items-center p-6 gap-4 lg:hidden'>
            <div className='rounded-[24px] w-[297px] p-4 border border-[#f6f6f6] h-[64px] shadow-lg flex items-center'>
                <img src={Search} alt='Search' className='w-[17px] h-[17px] mt-1' />
                <input 
                    type='text'
                    value={search}
                    placeholder='Search name, Speciality'
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full text-[#5D626C] font-euclid font-medium text-sm'
                />
            </div>
            <div className='flex items-center gap-2.5 w-[32px] justify-center p-2 rounded-[100px] border border-[#80808040]'>
                <img src={Filter} alt='Filter' className='w-4 h-4'/>
            </div>
        </div>
        <div className='bg-[#FAFAFA] h-[612px] w-full px-5 lg:px-[104px]'>
            <div className='flex flex-col lg:flex-row items-center '>
                <img src={Doctor} alt='Doctor'  className=' flex lg:hidden mb-[29px]'/>
                <div className='flex w-full gap-[36px] flex-col items-start'>
                    <p className='text-[#25324B] font-euclid text-center lg:text-left text-[24px] lg:text-[57px] font-semibold leading-[36px] lg:leading-[65px]'>
                        Meet with an urgent care doctor 
                        <span className='text-[#3E5EA9] ml-2'>in minutes</span>
                    </p>
                    <p className='text-[#5D626C] font-medium font-euclid text-center lg:text-left text-base'>
                        With 24/7 access to online doctors and other medical experts, 
                        care is always available, anytime and anywhere.
                    </p>
                    <div className='flex gap-[8px] flex-col lg:flex-row lg:justify-start w-full items-center'>
                        <button
                            type='button'
                            className='bg-[#3E5EA9] rounded-lg h-[48px] lg:hidden w-[170px]'
                        >
                            <p className='text-[#fff] text-base font-euclid'>Find a Doctor</p>
                        </button>
                        <button
                            type='button'
                            className='border-[#3E5EA9] lg:border rounded-lg w-[231px] h-[48px] flex flex-col items-center justify-center'
                        >
                            <p className='text-base font-medium text-[#3E5EA9] font-euclid'>Become a Heala Doctor</p>
                        </button>
                        <button
                            type='button'
                            className='bg-[#3E5EA9] rounded-lg hidden lg:flex items-center justify-center h-[48px] w-[170px]'
                        >
                            <p className='text-[#fff] text-base font-euclid'>Find a Doctor</p>
                        </button>
                    </div>
                </div>
                <img src={Doctor} alt='Doctor'  className='w-[668px] h-[432px] hidden lg:flex'/>
            </div>
            <div className='w-[1000px] hidden rounded-[24px] bg-[#fff] lg:flex items-center p-2 mx-auto  mt-[64px] shadow-lg'>
                <div className='flex items-center mx-6 gap-1 w-[573px]'>
                    <img src={Search} alt='Search' className='w-[17px] h-[17px] mt-1' />
                    <input 
                        type='text'
                        value={search}
                        placeholder='Search Name, Specialization, Hospital'
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-full text-[#5D626C] font-euclid font-medium text-base'
                    />
                </div>
                <div className='bg-[#AEB0B5] h-[64px] w-[1px]'></div>
                <div className='flex flex-col w-[163px] ml-6 mr-3'>
                    <label htmlFor='Location' className='font-euclid font-normal text-[#00141B] ml-3 text-[13px]' >Location</label>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative">
                                <Listbox.Button className="outline-none w-full flex items-center justify-between  bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                    <span className="block truncate w-full text-left text-[#000000] font-medium  font-euclid">  {selected?.name || "Lagos"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                        <IoIosArrowDown
                                            className="h-5 w-5 text-[#5D626C]"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {location.map((item, index) => (
                                            <Listbox.Option
                                                key={index}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                    active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                    }`
                                                }
                                                value={item}
                                            >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                        } text-[#052011]`}
                                                        // onChange={setSelected}
                                                    >
                                                        {item.name}
                                                    </span>
                                                </>
                                            )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>                       
                </div>
                <button
                    type='button'
                    className='w-[144px] rounded-xl bg-[#3E5EA9]  flex items-center gap-[8px] justify-center p-3'
                >
                    <p className='text-[#fff] font-euclid text-base font-medium'>Proceed</p>
                    <img src={Arrow} alt='Arrow' /> 
                </button>
            </div>
        </div>
        <div className='hidden lg:flex w-full item-center justify-center gap-[64px] p-4'>
            <div className='flex items-center gap-2.5 w-[111px] justify-center p-2 rounded-[16px] border border-[#80808040]'>
                <img src={Filter} alt='Filter' className='w-[18px] h-[18px]'/>
                <p className='text-[#293F71] font-medium text-base font-euclid'>Filters</p>
            </div>
            <div className='w-[750px] flex items-center gap-2'>
                <div className='w-[150px]'>
                    <Listbox value={selectedGender} onChange={setSelectedGender}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">  {selectedGender.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                    <IoIosArrowDown
                                        className="h-5 w-5 text-[#5D626C]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {gender.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    } text-[#052011]`}
                                                    // onChange={setSelected}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>  
                </div>
                <div className='w-[150px]'>
                    <Listbox value={selectedRatings} onChange={setSelectedRatings}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{selectedRatings.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                    <IoIosArrowDown
                                        className="h-5 w-5 text-[#5D626C]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {ratings.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                }`
                                            }
                                            value={item}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    } text-[#052011]`}
                                                    // onChange={setSelected}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>  
                </div>
                <div className='w-[150px]'>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">  {"Date"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                    <IoIosArrowDown
                                        className="h-5 w-5 text-[#5D626C]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {location.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                }`
                                            }
                                            value={item.name}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    } text-[#052011]`}
                                                    onChange={setSelected}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>  
                </div>
                <div className='w-[150px]'>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">  {"Time"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                    <IoIosArrowDown
                                        className="h-5 w-5 text-[#5D626C]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {location.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                }`
                                            }
                                            value={item.name}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    } text-[#052011]`}
                                                    onChange={setSelected}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>  
                </div>
                <div className='w-[150px]'>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">  {"Specialty"}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                    <IoIosArrowDown
                                        className="h-5 w-5 text-[#5D626C]"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {location.map((item, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                }`
                                            }
                                            value={item.name}
                                        >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                    } text-[#052011]`}
                                                    onChange={setSelected}
                                                >
                                                    {item.name}
                                                </span>
                                            </>
                                        )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>  
                </div>
            </div>
 
        </div>
        <div className='w-full px-5 lg:px-[104px] flex flex-col pb-[59px] gap-[28px] mt-5'>
            <div className='flex items-center lg:justify-between justify-center'>
                <p className='text-[#25324B] font-semibold text-[20px] lg:text-[36px] font-euclid'>Our Top Doctors</p>
                <p className='text-[#3E5EA9] text-base hidden lg:flex font-medium font-euclid'>See More</p>
            </div>
            <div className='mt-[28px] grid grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='flex flex-col gap-3 lg:h-[342px]'>
                    <img src={Dammy} alt='Dammy' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Dammy</p>
                            <p className='text-[#5D626C] font-euclid text-[13px] hidden lg:block font-normal'>Family Medicine</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 lg:h-[342px]'>
                    <img src={Odun} alt='Odun' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Odun</p>
                            <p className='text-[#5D626C] font-euclid hidden lg:block text-[13px] font-normal'>Pediatrician</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 lg:h-[342px]'>
                    <img src={Pizzy} alt='Pizzy' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Pizzy</p>
                            <p className='text-[#5D626C] font-euclid hidden lg:block text-[13px] font-normal'>Dermatologist</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3  lg:h-[342px]'>
                    <img src={Bayo} alt='Bayo' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Bayo</p>
                            <p className='text-[#5D626C] font-euclid hidden lg:block text-[13px] font-normal'>Orthopedic Surgeon</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 lg:h-[342px]'>
                    <img src={Dammy} alt='Dammy' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Dammy</p>
                            <p className='text-[#5D626C] font-euclid hidden lg:block text-[13px] font-normal'>Family Medicine</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 lg:h-[342px]'>
                    <img src={Odun} alt='Odun' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Odun</p>
                            <p className='text-[#5D626C] font-euclid hidden lg:block text-[13px] font-normal'>Pediatrician</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 lg:h-[342px]'>
                    <img src={Pizzy} alt='Pizzy' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Pizzy</p>
                            <p className='text-[#5D626C] font-euclid hidden lg:block text-[13px] font-normal'>Dermatologist</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3  lg:h-[342px]'>
                    <img src={Bayo} alt='Bayo' className='lg:w-[300px] lg:h-[282px]' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>Dr. Bayo</p>
                            <p className='text-[#5D626C] font-euclid hidden lg:block text-[13px] font-normal'>Orthopedic Surgeon</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>₦ 5,500</p>
                    </div>
                </div>

            </div>
            <p className='font-euclid font-medium text-[13px] text-center lg:hidden'>Continue to <span className='text-[#3E5EA9] text-[13px] font-medium'>see more</span></p>
        </div>

        <div className='bg-[#FCFCFD] w-full flex flex-col items-center justify-center gap-[49px] lg:gap-[104px] px-5 lg:px-0 pt-[35px] lg:pt-[68px] pb-[35px] lg:pb-[112px]'>
            <div className='flex flex-col gap-6 lg:w-[951px] items-center justify-center'>
                <p className='text-[#293F71] font-semibold text-[20px] lg:text-[40px] font-euclid'>Virtual Consultation</p>
                <p className='text-[#5D626C] font-medium text-xs lg:text-[24px] font-euclid leading-[15px] lg:leading-[36px] text-center'>
                    Virtual consultations, also known as telemedicine or telehealth, 
                    offer a range of benefits for both healthcare providers and patients
                </p>

            </div>
            <div className='flex flex-col lg:flex-row lg:items-start w-full lg:px-[104px] gap-[54px]'>
                <img src={Consultation} alt='Consultation' className='lg:w-[499px] ' />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[38px]'>
                    <div className='flex flex-col w-[300px] gap-4 h-[212px]'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#3E5EA9]'>
                            <p>1</p>
                        </div>
                        <p className='font-medium text-[#25324B] font-euclid text-base lg:text-[20px]'>Preventive healthcare</p>
                        <p className='text-[#5D626C] font-medium font-euclid text-sm'>
                            Implementing preventive healthcare strategies can reduce the incidence of chronic diseases,
                            improve patient outcomes, and decrease the overall burden on healthcare systems. 
                        </p>
                    </div>
                    <div className='flex flex-col w-[300px] gap-4 h-[212px]'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#3E5EA9]'>
                            <p>2</p>
                        </div>
                        <p className='font-medium text-[#25324B] font-euclid text-base lg:text-[20px]'>Continuity of care</p>
                        <p className='text-[#5D626C] font-medium font-euclid text-sm'>
                            Continuity of care means having a consistent and trusted healthcare provider who understands 
                            your medical history and can offer more tailored and effective treatments.
                        </p>
                    </div>
                    <div className='flex flex-col w-[300px] gap-4 h-[212px]'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#3E5EA9]'>
                            <p>3</p>
                        </div>
                        <p className='font-medium text-[#25324B] font-euclid text-base lg:text-[20px]'>Privacy and comfort</p>
                        <p className='text-[#5D626C] font-medium font-euclid text-sm'>
                            Maintaining patient privacy and comfort builds trust and encourages open communication, 
                            which is essential for accurate diagnosis and effective treatment. 
                        </p>
                    </div>
                    <div className='flex flex-col w-[300px] gap-4 h-[212px]'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full border border-[#3E5EA9]'>
                            <p>4</p>
                        </div>
                        <p className='font-medium text-[#25324B] font-euclid text-base lg:text-[20px]'>Payment</p>
                        <p className='text-[#5D626C] font-medium font-euclid text-sm'>
                            Understanding the financial aspects of your healthcare allows you to plan and budget 
                            effectively, ensuring you can access the necessary treatments without unexpected financial 
                            burdens. 
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div className='bg-[#FFFFFF] w-full lg:h-[308px] px-5 pb-6 lg:pb-0 pt-[46px] gap-6 lg:gap-0 lg:pt-0 lg:px-[104px] flex flex-col lg:flex-row items-center justify-between'>
            <div className='flex items-start w-full lg:w-8/12 lg:h-[144px] gap-4'>
                <img src={Hourglass} alt='Hourglass' className='w-6 h-6 lg:w-[32px] h-[40px]' />
                <div className='flex flex-col gap-4'>
                    <p className='font-medium text-[20px] lg:text-[32px] font-euclid leading-[28px] lg:leading-[44px]'>Save Time: Accelerate Your Hiring with Our Doctor Recruitment Platform!</p>
                    <p className='text-[#6D6D6D] font-normal text-sm font-euclid'>
                        Streamline the recruitment process with advanced search filters, detailed doctor profiles, 
                        and integrated scheduling tools, saving time and resources while ensuring a seamless hiring 
                        experience.
                    </p>
                </div>
            </div>
            <button className='flex items-center w-[197px] h-[32px] lg:h-[48px] border border-[#3E5EA9] rounded-lg justify-center'>
                <p className='text-[#3E5EA9] font-euclid text-base font-medium'>Post a Job</p>
            </button>
        </div>

    </div>
  )
}

export default Home