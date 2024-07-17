import React, { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TiArrowUnsorted } from 'react-icons/ti'

import Search from "../../assets/svg/search.svg"
import Arrow from "../../assets/svg/forward_arrow_white.svg"
import Filter from "../../assets/svg/filter.svg"
import Longmenu from "../../assets/svg/longmenu.svg"
import CloseIcon from "../../assets/svg/closeIcon.svg"
import Bookmark from "../../assets/svg/bookmark.svg"
import Flag from "../../assets/svg/flag.svg"
import Bag from "../../assets/svg/bag.svg"
import Money from "../../assets/svg/money.svg"
import LocationAlt from "../../assets/svg/location-alt.svg"



const location = [
    {name: "Location"},
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



const Jobs = () => {
    const [search, setSearch] = useState("")
    const [selected, setSelected] = useState(location[0])
    const [selectedGender, setSelectedGender] = useState(gender[0])
    const [selectedRatings, setSelectedRatings] = useState(ratings[0])


  return (
    <div className='flex flex-col'>
        <div className='flex flex-col px-[104px] mb-4'>
            <div className='w-[1000px] border border-[#ccc] rounded-[24px] bg-[#fff] flex items-center p-2 mx-auto mt-[64px] shadow-lg'>
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
                                    <TiArrowUnsorted
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

            <div className='flex w-full item-center  gap-[64px] mt-[28px] p-4'>
                <div className='flex items-center gap-2.5 w-[111px] justify-center p-2 rounded-[16px] border border-[#80808040]'>
                    <img src={Filter} alt='Filter' className='w-[18px] h-[18px]'/>
                    <p className='text-[#293F71] font-medium text-base font-euclid'>Filters</p>
                </div>
                <div className='w-[850px] flex items-center gap-2'>
                    <div className='w-[150px]'>
                        <Listbox value={selectedGender} onChange={setSelectedGender}>
                            <div className="relative">
                                <Listbox.Button className="outline-none w-full flex items-center  gap-2.5 bg-[#fff] p-3 h-[48px]"> {/* lg:w-[420px] */}
                                    <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">  {"Anytime"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                        <TiArrowUnsorted
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
                                    <span className="block truncate w-full text-left text-[#000000] font-medium  font-euclid">  {"Company"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                        <TiArrowUnsorted
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
                                    <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{"Job Type"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                        <TiArrowUnsorted
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
                                    <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{"Experience Level"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                        <TiArrowUnsorted
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
                                    <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">{"Location"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                        <TiArrowUnsorted
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
                                    <span className="block truncate w-full text-left text-[#000] font-medium  font-euclid">  {"Salary"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 pr-2  flex items-center">
                                        <TiArrowUnsorted
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
                
                <div className='w-[172px] invisible h-[48px] flex items-center justify-center p-2'>
                    <p className='font-medium text-[#3E5EA9] text-base font-euclid'>Show 15 Doctors</p>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex flex-col mt-[30px] px-[104px] gap-6'>
            <p className='font-medium text-[#5D626C] text-sm'>100 + Jobs in Lagos, Nigeria</p>

            <div className='flex gap-[62px] items-start'>
                <div className='flex flex-col gap-4'>
                    <div className='rounded-[24px] flex flex-col gap-[35px] p-6 border border-[#3E5EA9] w-[491px] h-[355px]'>
                        <div className='flex items-start justify-between'>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='text-[#25324B] text-base font-medium font-euclid'>Medical Doctor</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>ARM Recruitment</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>Lagos</p>
                            </div>
                            <img src={Longmenu} alt='Long Menu' className='w-6 h-6' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='w-[193px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>N350,000 per month</p>
                                </div>
                                <div className='w-[99px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>Full-time</p>
                                </div>
                            </div>
                            <ul className='list-disc w-[362px] px-6 h-[96px] gap-2'>
                                <li className='text-[#5D626C] font-euclid text-sm'>Must have Bachelor of Medicine and Bachelor of Surgery (MBBS) or MBCHB degree.</li>
                                <li className='text-[#5D626C] font-euclid text-sm'>Working Schedule : 2 morning shifts 2 evening shifts 2 days off in a week.</li>
                            </ul>
                            <p className='text-[#5D626C] text-xs font-euclid font-normal'>Posted 23 days ago</p>
                        </div>

                    </div>
                    <div className='rounded-[24px] flex flex-col gap-[35px] p-6 border border-[#3E5EA9] w-[491px] h-[355px]'>
                        <div className='flex items-start justify-between'>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='text-[#25324B] text-base font-medium font-euclid'>Medical Doctor</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>ARM Recruitment</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>Lagos</p>
                            </div>
                            <img src={Longmenu} alt='Long Menu' className='w-6 h-6' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='w-[193px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>N350,000 per month</p>
                                </div>
                                <div className='w-[99px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>Full-time</p>
                                </div>
                            </div>
                            <ul className='list-disc w-[362px] px-6 h-[96px] gap-2'>
                                <li className='text-[#5D626C] font-euclid text-sm'>Must have Bachelor of Medicine and Bachelor of Surgery (MBBS) or MBCHB degree.</li>
                                <li className='text-[#5D626C] font-euclid text-sm'>Working Schedule : 2 morning shifts 2 evening shifts 2 days off in a week.</li>
                            </ul>
                            <p className='text-[#5D626C] text-xs font-euclid font-normal'>Posted 23 days ago</p>
                        </div>

                    </div>
                    <div className='rounded-[24px] flex flex-col gap-[35px] p-6 border border-[#3E5EA9] w-[491px] h-[355px]'>
                        <div className='flex items-start justify-between'>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='text-[#25324B] text-base font-medium font-euclid'>Medical Doctor</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>ARM Recruitment</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>Lagos</p>
                            </div>
                            <img src={Longmenu} alt='Long Menu' className='w-6 h-6' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='w-[193px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>N350,000 per month</p>
                                </div>
                                <div className='w-[99px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>Full-time</p>
                                </div>
                            </div>
                            <ul className='list-disc w-[362px] px-6 h-[96px] gap-2'>
                                <li className='text-[#5D626C] font-euclid text-sm'>Must have Bachelor of Medicine and Bachelor of Surgery (MBBS) or MBCHB degree.</li>
                                <li className='text-[#5D626C] font-euclid text-sm'>Working Schedule : 2 morning shifts 2 evening shifts 2 days off in a week.</li>
                            </ul>
                            <p className='text-[#5D626C] text-xs font-euclid font-normal'>Posted 23 days ago</p>
                        </div>

                    </div>
                    <div className='rounded-[24px] flex flex-col gap-[35px] p-6 border border-[#3E5EA9] w-[491px] h-[355px]'>
                        <div className='flex items-start justify-between'>
                            <div className='flex flex-col gap-[8px]'>
                                <p className='text-[#25324B] text-base font-medium font-euclid'>Medical Doctor</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>ARM Recruitment</p>
                                <p className='text-[#5D626C] font-normal font-euclid text-sm'>Lagos</p>
                            </div>
                            <img src={Longmenu} alt='Long Menu' className='w-6 h-6' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='w-[193px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>N350,000 per month</p>
                                </div>
                                <div className='w-[99px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                    <p className='text-[#0C1322] font-medium font-euclid text-sm'>Full-time</p>
                                </div>
                            </div>
                            <ul className='list-disc w-[362px] px-6 h-[96px] gap-2'>
                                <li className='text-[#5D626C] font-euclid text-sm'>Must have Bachelor of Medicine and Bachelor of Surgery (MBBS) or MBCHB degree.</li>
                                <li className='text-[#5D626C] font-euclid text-sm'>Working Schedule : 2 morning shifts 2 evening shifts 2 days off in a week.</li>
                            </ul>
                            <p className='text-[#5D626C] text-xs font-euclid font-normal'>Posted 23 days ago</p>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col w-full border border-[#80808040] h-auto rounded-[24px] p-6'>
                    <div className='flex justify-between items-start'>
                        <p className='text-[#25324B] font-euclid text-xl font-medium'>Medical Doctor</p>
                        <img src={CloseIcon} alt='CloseIcon'/>
                    </div>
                    <div className='flex flex-col mt-[8px]'>
                        <p className='text-base text-[#5D626C] font-euclid'>ARM Recruitment</p>
                        <p className='text-base text-[#5D626C] font-euclid'>Lagos</p>
                        <p className='text-base text-[#5D626C] font-euclid'>N350,000 a month</p>
                    </div>
                    <div className='flex items-center mt-6 mb-7'>
                        <button
                            type='button'
                            className='w-[132px] rounded-[8px] bg-[#3E5EA9] flex items-center justify-center h-[48px]'
                        >
                            <p className='text-[#fff] font-medium font-euclid text-base'>Apply Now</p>
                        </button>
                        <button
                            type='button'
                            className='w-[118px] rounded-[8px] bg-transparent flex gap-1 items-center justify-center h-[48px]'
                        >
                            <img src={Bookmark} alt='Bookmark' />
                            <p className='text-[#3E5EA9] font-medium font-euclid text-base'>Save</p>
                        </button>
                        <button
                            type='button'
                            className='w-[132px] rounded-[8px] bg-transparent gap-1 flex items-center justify-center h-[48px]'
                        >
                            <img src={Flag} alt='flag'/>
                            <p className='text-[#3E5EA9] font-medium font-euclid text-base'>Report</p>
                        </button>
                    </div>
                    <hr />
                    <div className='flex flex-col my-7 gap-[36px]'>
                        <p className='font-medium font-euclid text-lg text-[#000]'>Job Details</p>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-start gap-4'>
                                <img src={Money} alt='Money'/>
                                <div className='flex flex-col gap-[8px]'>
                                    <p className='font-euclid font-medium text-[#000] text-base'>Pay</p>
                                    <div className='w-[193px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                        <p className='text-[#0C1322] font-medium font-euclid text-sm'>N350,000 per month</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <img src={Bag} alt='Bag'/>
                                <div className='flex flex-col gap-[8px]'>
                                    <p className='font-euclid font-medium text-[#000] text-base'>Job Type</p>
                                    <div className='w-[86px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                        <p className='text-[#0C1322] font-medium font-euclid text-sm'>Full-time</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <img src={LocationAlt} alt='LocationAlt'/>
                                <div className='flex flex-col gap-[8px]'>
                                    <p className='font-euclid font-medium text-[#000] text-base'>Location</p>
                                    <div className='w-[109px] h-[40px] bg-[#CED0D3] rounded-[12px] flex justify-center items-center p-2'>
                                        <p className='text-[#0C1322] font-medium font-euclid text-sm'>Lagos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='my-7 flex flex-col gap-4'>
                        <p className='font-euclid font-medium text-lg text-[#0C1322] '>Full Job Description</p>
                        <div className='flex flex-col '>
                            <p className='font-euclid text-[#5D626C] font-medium text-base'>Qualification:</p>
                            <ul className='list-disc flex flex-col gap-4 px-5 mt-4'>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>Must have a Bachelor of Medicine and Bachelor of Surgery (MBBS) or MBChB degree.</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>Must have completed NYSC</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>Working schedule: 2 morning shifs 2 evening shifts 2 days off in a week</li>
                            </ul>
                        </div>
                        <div className='flex flex-col '>
                            <p className='font-euclid text-[#5D626C] font-medium text-base'>Job Description:</p>
                            <ul className='list-disc flex flex-col gap-4 px-5 mt-4'>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>The Doctor shall be available for 10hrs per day.</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>To examine all patients on admission in ICU/ER/other such clinical area as designated by Clinical Administration from time to time</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>To order investigations under guidiance of the departmental Head/Coordinator.</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>To write and fill up all documents and patients history sheet and MLC and other such forms as ordered by Clinical Administration from time to time.</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>To train nurses, paramedical and support staffs while on duty and as ordered by the clinical admin from time to time.</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>To seek consultation and do referrals to specialist and consultants from time to time as per Clinical protocol and company policies. </li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'>To stay in the ward (ICU/General Ward/ER or other such areas) at all time during the duty hour except 30 minutes lunch/ tea break. the time of break should be subject to patient condition in the ward and ICU and approval from Clinical admin.</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'> To take and give written handover at the bedside at the beginning and end of the duty shift.</li>
                                <li  className='font-euclid text-[#5D626C] font-medium text-base'> To document all administrative related policies and other such documents of similar nature as guided by the clinical coordinator and general administration from time to time.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Jobs


