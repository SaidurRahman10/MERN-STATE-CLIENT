import React from 'react';
import { useContext } from 'react';
import { myContext } from '../../AuthProvider/AuthProvider';

const FAQ = () => {
    const {user} = useContext(myContext)
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};

export default FAQ;