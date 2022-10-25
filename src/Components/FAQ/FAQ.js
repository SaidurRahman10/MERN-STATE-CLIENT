import React from 'react';
import { useContext } from 'react';
import { myContext } from '../../AuthProvider/AuthProvider';

const FAQ = () => {
    const {user} = useContext(myContext)
    return (
        <div className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            <h1>{user.name}</h1>
            <h1>{user.roll}</h1>
        </div>
    );
};

export default FAQ;