import React, { useState } from 'react';
import { default as DashboardIcon } from '@mui/icons-material/Dashboard';
import { Book, TrendingUp, BarChart, Chat, Settings, Menu } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import CoursesTable from '../components/CoursesTable';
import DashboardCards from '../components/DashboardCards';
import { getCourses } from '../auth/crud';
import { Link } from 'react-router-dom';

const LearnerDashboard = () => {
    const [active, setActive] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
const [courses, setCourses] = useState([]);

useEffect( ()=>{
    getCourses(setCourses);
}, []);

    const menuItems = [
        { key: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
        { key: 'courses', icon: <Book />, label: 'My Courses' },
        { key: 'progress', icon: <TrendingUp />, label: 'My Progress' },
        { key: 'analytics', icon: <BarChart />, label: 'Analytics' },
        { key: 'chats', icon: <Chat />, label: 'Chats' },
        { key: 'settings', icon: <Settings />, label: 'Settings' },
    ];

    const renderContent = () => {
        switch (active) {
            case 'courses':
                return <div>
                    { (courses.length) == 0 ? <p>You dont haven't bought any course <Link to={"/courses"}> <span className='text-blue-700 text-xl'>Buy a course</span></Link></p> :
                     <CoursesTable courses={courses}/>
        }
                </div>;
            case 'progress':
                return <div>Your progress summary goes here.</div>;
            case 'analytics':
                return <div>Analytics data and charts here.</div>;
            case 'chats':
                return <div>Chat conversations will appear here.</div>;
            case 'settings':
                return <div>Settings and preferences panel.</div>;
            case 'dashboard':
            default:
                return (
                    <>
                    <div className='flex m-6 gap-6'>
                        
                    <DashboardCards length={courses.length}/>
                    <DashboardCards length={courses.length}/>
                    <DashboardCards length={courses.length}/>
                    </div>
                        <div>
                            <div className="bg-white mt-10 rounded-xl shadow-lg p-6 overflow-x-auto">
                                 { (courses.length) == 0 ? <p>You dont haven't bought any course <Link to={"/courses"}> <span className='text-blue-700 text-xl'>Buy a course</span></Link></p> :
                                <>
                                <h3 className="text-2xl font-bold text-blue-700 mb-4">My Courses</h3>
                                <CoursesTable courses={courses}/>
                                </>
                                
                }
                            </div>

                        </div>
                    </>
                );
        }
    };

    return (
        <div className="flex min-h-screen relative">
            {/* Sidebar */}
            <div
                className={`fixed  z-50 top-0 left-0 h-screen bg-white shadow-2xl p-6 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:w-[18em]`}
            >
                <div className="flex justify-between items-center md:block">
                    <h1 className="font-extrabold text-blue-700 text-3xl mb-8">Hello, Name </h1>
                    {/* Close button on mobile */}
                    <button
                        className="md:hidden text-blue-700"
                        onClick={() => setSidebarOpen(false)}
                    >
                        ✕
                    </button>
                </div>
                <ul className="flex flex-col gap-6 text-lg">
                    {menuItems.map(item => (
                        <li
                            key={item.key}
                            className={`flex items-center font-bold gap-3 cursor-pointer p-2 rounded-lg hover:bg-blue-100 ${active === item.key ? 'bg-blue-100 text-blue-700' : ''
                                }`}
                            onClick={() => {
                                setActive(item.key);
                                setSidebarOpen(false); // close sidebar on mobile
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 p-5 md:p-10 bg-blue-100/20 backdrop-blur-sm w-full">
                {/* Mobile header with hamburger on the left */}
                <div className="flex items-center justify-between mb-6 md:hidden">
                    <IconButton onClick={() => setSidebarOpen(true)}>
                        <Menu className="text-blue-700" />
                    </IconButton>
                    <h2 className="text-2xl font-bold text-blue-700">
                        {menuItems.find(m => m.key === active)?.label}
                    </h2>
                    <div className="w-10" /> {/* Spacer to balance right side */}
                </div>

                {/* Desktop heading */}
                <h2 className="hidden md:block text-3xl font-bold text-blue-700 mb-6">
                    {menuItems.find(m => m.key === active)?.label}
                </h2>

                <div className="text-gray-800 text-lg">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default LearnerDashboard;
