import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Components/Blog/Blog';
import Courses from '../../Components/Courses/Courses';
import ErrorPage from '../../Components/ErrorPage/ErrorPage';
import FAQ from '../../Components/FAQ/FAQ';
import Home from '../../Components/Home/Home';
import Main from '../../layout/Main';


  export const route = createBrowserRouter([
        {path:'/',element:<Main></Main>,children:[
            {path:'/',element:<Home></Home>},
            {path:'/course',element:<Courses></Courses>},
            {path:'/blog',element:<Blog></Blog>},
            {path:'/faq',element:<FAQ></FAQ>}
        ]},
        {path:'*', element:<ErrorPage></ErrorPage>}
    ])
       

