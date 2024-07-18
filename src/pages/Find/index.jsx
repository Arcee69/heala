import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'
import { Drawer } from "antd";

import Search from "../../assets/svg/search.svg"
import Arrow from "../../assets/svg/forward_arrow_white.svg"
import Filter from "../../assets/svg/filter.svg"

import Bayo from "../../assets/png/bayo.png"
import Dammy from "../../assets/png/dammy.png"
import Odun from "../../assets/png/odun.png"
import Pizzy from "../../assets/png/pizzy.png"
import Consultation from "../../assets/png/consultation.png"
import SearchFilter from '../Home/component/Filter';
import { useNavigate } from 'react-router-dom';

const location = [
    {name: ""},
    {name: "Lagos"},
    {name: "Ogun"}
]

const gender = [
    {name: ""},
    {name: "Male"},
    {name: "Female"}
]

const ratings = [
    {name: ""},
    {name: 5},
    {name: 4}
]

const dates = [
    { name: '' },
    { name: '2024-07-18' },
    { name: '2024-07-19' },
    { name: '2024-07-20' },
    { name: '2024-07-21' },
    { name: '2024-07-22' },
];

const times = [
    { name: '' },
    { name: '08:00 AM' },
    { name: '09:00 AM' },
    { name: '10:00 AM' },
    { name: '11:00 AM' },
    { name: '12:00 PM' },
];

const speciality = [
    { name: '' },
    { name: 'Orthopedic Surgeon' },
    { name: 'Dermatologist' },
    { name: 'Pediatrician' },
    { name: 'Family Medicine' },
];


const Find = () => {
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState(location[0])
    const [selectedGender, setSelectedGender] = useState(gender[0])
    const [selectedRatings, setSelectedRatings] = useState(ratings[0])
    const [selectedDate, setSelectedDate] = useState(dates[0])
    const [selectedTime, setSelectedTime] = useState(times[0])
    const [selectedSpeciality, setSelectedSpeciality] = useState(speciality[0])
    const [open, setOpen] = useState(false);
    const [displayCount, setDisplayCount] = useState(4); 


    const showDrawer = () => {
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };

      const navigate = useNavigate()

      const showMoreDoctors = () => {
        // Increment the display count by a certain number (e.g., 4 more doctors)
        setDisplayCount(displayCount + 4);
    };

      const doctorData = [
        {
            id: 1,
            img: Dammy,
            name: "Dr. Dammy",
            speciality: "Family Medicine",
            amount: "₦ 5,500"
        },
        {
            id: 2,
            img: Odun,
            name: "Dr. Odun",
            speciality: "Pediatrician",
            amount: "₦ 5,500"
        },
        {
            id: 3,
            img: Pizzy,
            name: "Dr Pizzy",
            speciality: "Dermatologist",
            amount: "₦ 5,500"
        },
        {
            id: 4,
            img: Bayo,
            name: "Dr. Bayo",
            speciality: "Orthopedic Surgeon",
            amount: "₦ 5,500"
        },
        {
            id: 5,
            img: Dammy,
            name: "Dr. Dammy",
            speciality: "Family Medicine",
            amount: "₦ 5,500"
        },
        {
            id: 6,
            img: Odun,
            name: "Dr. Odun",
            speciality: "Pediatrician",
            amount: "₦ 5,500"
        },
        {
            id: 7,
            img: Pizzy,
            name: "Dr Pizzy",
            speciality: "Dermatologist",
            amount: "₦ 5,500"
        },
        {
            id: 8,
            img: Bayo,
            name: "Dr. Bayo",
            speciality: "Orthopedic Surgeon",
            amount: "₦ 5,500"
        },
    ]
    

  return (
    <div className='lg:px-[104px] flex flex-col mb-[40px] lg:mb-[83px]  mt-20 lg:mt-24'>
        <div className='flex items-center p-6 gap-4 lg:hidden'>
            <div className='rounded-[24px] w-[297px] p-4 border border-[#f6f6f6] h-[64px] shadow-lg flex items-center'>
                <img src={Search} alt='Search' className='w-[17px] h-[17px] mt-1' />
                <input 
                    type='text'
                    value={search}
                    placeholder='Search name, Speciality'
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full text-[#5D626C] font-euclid font-medium outline-none text-sm'
                />
            </div>
            <div onClick={showDrawer} className='flex items-center gap-2.5 w-[32px] justify-center p-2 rounded-[100px] border border-[#80808040]'>
                <img src={Filter} alt='Filter' className='w-4 h-4'/>
            </div>
        </div>
        <div className='w-[1000px] border border-[#ccc] hidden rounded-[24px] bg-[#fff] lg:flex items-center p-2 mx-auto mt-[64px] shadow-lg'>
            <div className='flex items-center mx-6 gap-1 w-[573px]'>
                <img src={Search} alt='Search' className='w-[17px] h-[17px] mt-1' />
                <input 
                    type='text'
                    value={search}
                    placeholder='Search Name, Specialization, Hospital'
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full text-[#5D626C] font-euclid font-medium outline-none text-base'
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
        
        <div className='hidden lg:flex w-full item-center justify-center gap-[64px] mt-[28px] p-4'>
            <div className='flex items-center gap-2.5 w-[111px] justify-center p-2 rounded-[16px] border border-[#80808040]'>
                <img src={Filter} alt='Filter' className='w-[18px] h-[18px]'/>
                <p className='text-[#293F71] font-medium text-base font-euclid'>Filters</p>
            </div>
            <div className='w-[750px] flex items-center gap-2'>
                <div className='w-[150px]'>
                    <Listbox value={selectedGender} onChange={setSelectedGender}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">  {selectedGender.name || "Gender"}</span>
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
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center justify-between  bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000000] font-medium  font-euclid">  {selected?.name || "Location"}</span>
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
                <div className='w-[150px]'>
                    <Listbox value={selectedRatings} onChange={setSelectedRatings}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{selectedRatings.name || "Ratings"}</span>
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
                    <Listbox value={selectedDate} onChange={setSelectedDate}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{selectedDate.name || "Date"}</span>
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
                                    {dates.map((item, index) => (
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
                    <Listbox value={selectedTime} onChange={setSelectedTime}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{selectedTime.name || "Time"}</span>
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
                                    {times.map((item, index) => (
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
                    <Listbox value={selectedSpeciality} onChange={setSelectedSpeciality}>
                        <div className="relative">
                            <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{selectedSpeciality.name || "Specialty"}</span>
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
                                    {speciality.map((item, index) => (
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
            
            <div className='w-[172px] h-[48px] flex items-center justify-center p-2'>
                <p className='font-medium text-[#3E5EA9] text-base font-euclid'>Show 15 Doctors</p>
            </div>
        </div>

        <div className='mt-[28px] grid grid-cols-2 px-5 lg:grid-cols-4 gap-6'>
            {doctorData.slice(0, displayCount).map((item, index) => (
                <div className='flex flex-col gap-3 lg:h-[342px] cursor-pointer' key={index} onClick={() => navigate("/doctor/info", { state:item})}>
                    <img src={item?.img} alt={item?.name} className='lg:w-[300px] lg:h-[282px]  transition-transform duration-300 transform hover:scale-110' />
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-[#000000] font-medium font-euclid text-base'>{item?.name}</p>
                            <p className='text-[#5D626C] font-euclid text-[13px] hidden lg:block font-normal'>{item?.speciality}</p>
                        </div>
                        <p className='text-[#3E5EA9] font-medium text-base font-euclid'>{item?.amount}</p>
                    </div>
                </div>
            ))}
        </div>

        {displayCount < doctorData.length && (
            <div className='mt-[37px] lg:mt-[116px] mb-[83px] lg:w-[383px]  mx-auto flex flex-col gap-6 items-center'>
                <p className='font-medium text-[#25324B] text-base lg:text-[24px] font-euclid '>Continue to explore Doctors</p>
                <button onClick={showMoreDoctors} className='bg-[#3E5EA9] w-[194px] h-[32px] lg:h-[48px] p-2 flex items-center justify-center rounded-lg'>
                    <p className='text-[#fff] font-euclid text-[13px] lg:text-base font-medium'>Show more</p>
                </button>
            </div>
        )}

       
        <SearchFilter 
            visible={open}
            onClose={onClose}
        />
   

    </div>
  )
}

export default Find