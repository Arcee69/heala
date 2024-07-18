import React, { useState } from 'react'
import { Drawer, Select, Button } from 'antd';

import Close from "../../../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'


const { Option } = Select;

const SearchFilter = ({ visible, onClose }) => {
    const [location, setLocation] = useState('Location');
    const [gender, setGender] = useState('Gender');
    const [speciality, setSpeciality] = useState('Speciality');
    const [date, setDate] = useState('Date');
    const [rating, setRating] = useState('Rating');
    const [time, setTime] = useState('Time');

    const handleClearAll = () => {
        setLocation('');
        setGender('');
        setSpeciality('');
        setDate('');
        setRating('');
        setTime('');
    };

    const handleShowDoctors = () => {
        // Implement logic to show doctors based on selected filters
        console.log('Show 23 doctors based on filters');
    };


  return (
    <Drawer
          
        placement="bottom"
        height={770}
        onClose={onClose}
        visible={visible}
        style={{
            borderTopLeftRadius: 48,
            borderTopRightRadius: 48
        }}
        closable={false} 
        footer={
            <div className='flex justify-between items-center'>
                <Button onClick={handleClearAll} style={{ marginRight: 8 }}>
                    Clear All
                </Button>
                <Button type="primary" onClick={handleShowDoctors}>
                    Show 23 Doctors
                </Button>
            </div>
        }
    >
        <div className="p-4 h-[770px]">
            <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-[8px] '>
                    <p className='text-base text-[#25324B] font-medium font-euclid'>Filters</p>
                    <p className='text-[13px] text-[#5D626C] font-euclid'>Find a doctor with your preferred choice</p>
                </div>
                <img src={Close} alt='Close' onClick={onClose}/>
            </div>
            <div className="mb-4 mt-[26px] flex flex-col">
                <Select
                    value={location}
                    placeholder="Location"
                    onChange={value => setLocation(value)}
                    style={{ 
                        width: '100%', 
                        marginBottom: 16, 
                        height: 64, 
                        backgroundColor: "#FCFCFD", 
                        border:"#80808040" 
                    }}
                    className='font-euclid'
                >
                    <Option value="lagos">Lagos</Option>
                    <Option value="abuja">Abuja</Option>
                    {/* Add more locations */}
                </Select>

                <Select
                    value={gender}
                    placeholder="Gender"
                    onChange={value => setGender(value)}
                    style={{ 
                        width: '100%', 
                        marginBottom: 16, 
                        height: 64, 
                        backgroundColor: "#FCFCFD", 
                        border:"#80808040" 
                    }}
                    className='font-euclid'
                >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                </Select>

                <Select
                    value={speciality}
                    placeholder="Speciality"
                    onChange={value => setSpeciality(value)}
                    style={{ 
                        width: '100%', 
                        marginBottom: 16, 
                        height: 64, 
                        backgroundColor: "#FCFCFD", 
                        border:"#80808040" 
                    }}
                    className='font-euclid'
                >
                    <Option value="cardiology">Cardiology</Option>
                    <Option value="orthopedics">Orthopedics</Option>
                    {/* Add more specialities */}
                </Select>
                
                <Select
                    value={date}
                    placeholder="Date"
                    onChange={value => setDate(value)}
                    style={{ 
                        width: '100%', 
                        marginBottom: 16, 
                        height: 64, 
                        backgroundColor: "#FCFCFD", 
                        border:"#80808040" 
                    }}
                    className='font-euclid'
                >
                    <Option value="cardiology">Aug 7</Option>
                    {/* <Option value="orthopedics">Orthopedics</Option> */}
                    {/* Add more specialities */}
                </Select>

                <Select
                    value={rating}
                    placeholder="Rating"
                    onChange={value => setRating(value)}
                    style={{ 
                        width: '100%', 
                        marginBottom: 16, 
                        height: 64, 
                        backgroundColor: "#FCFCFD", 
                        border:"#80808040" 
                    }}
                    className='font-euclid'
                >
                    <Option value="cardiology">5</Option>
                    <Option value="orthopedics">4</Option>
                    {/* Add more specialities */}
                </Select>

                <Select
                    value={time}
                    placeholder="Time"
                    onChange={value => setTime(value)}
                    style={{ 
                        width: '100%', 
                        marginBottom: 16, 
                        height: 64, 
                        backgroundColor: "#FCFCFD", 
                        border:"#80808040" 
                    }}
                    className='font-euclid'
                >
                    <Option value="cardiology">10:00</Option>
                    {/* <Option value="orthopedics">Orthopedics</Option> */}
                    {/* Add more specialities */}
                </Select>
                
            </div>
        </div>
        
    </Drawer>
  )
}

export default SearchFilter