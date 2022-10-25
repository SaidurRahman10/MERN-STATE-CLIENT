import React from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../../img/hero1.png'
import brand1 from '../../img/brand1.png'
import brand2 from '../../img/brand2.png'
import brand3 from '../../img/brand3.png'
import brand4 from '../../img/brand4.png'
import brand5 from '../../img/brand5.png'
import brand6 from '../../img/brand6.png'





const Home = () => {
   
    
    return (
        <div  className="px-8 md:px-12">


        <div className='grid grid-cols-1 md:grid-cols-2'>

           <div className=" flex flex-col items-center  mt-14  md:mt-52">
            <center>

            <h1 className='lg:text-6xl font-bold md:text-4xl text-5xl tracking-wider opacity-82 mb-8 '>Find Your Preferred<span className='lg:text-5xl md:text-3xl text-5xl  text-blue-400 '> COURSES</span> & Improve Your Skills.</h1>
            </center>
            
            
            <Link to='/login'>
            <button type="button" className="items-start    text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-14 py-4 text-center mr-2 mb-2">Log In</button>
            </Link>
         </div>
           
        
          
          <div className=" flex justify-center items-center">
          <img className=' md:w-80 md:h-96 lg:h-max lg:w-max' src={hero1} alt="" />
          </div>
    </div>


         
        <div>
            <h2 className='text-center text-2xl font-bold'>Trusted by the world’s best Brand</h2>
            <div className='flex justify-between mt-8 mx-4'>
                <img className='h-8' src={brand2} alt="" />
                <img className='h-8' src={brand3} alt="" />
                <img className='h-8' src={brand4} alt="" />
                <img className='h-8' src={brand1} alt="" />
                <img className='h-8' src={brand5} alt="" />
                <img className='h-8' src={brand6} alt="" />
            </div>
        </div>


        </div>
    );
};

export default Home;