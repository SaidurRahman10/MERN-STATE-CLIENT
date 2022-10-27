import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const courses = useLoaderData();
  const { id, name, title, price, img } = courses;

  return (
    <div>
     

  <div className="container mx-auto">

        <div className="mb-10 overflow-hidden rounded-lg ">
          <img
            src={img}
            alt="image"
            className="w-full rounded-xl"
          />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {name}
              </a>
            </h3>
            <p className="text-body-color mb-7 text-base leading-relaxed">
            {title}
            </p>
            <h1 className="text-2xl font-bolder underline mb-3">Price:  ${price}</h1>
            <Link  className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border hover:border-black py-2 px-7 text-base font-medium transition hover:bg-white bg-cyan-500 hover:text-black text-white" to={`/details/${id}`}> View Details</Link>
          </div>
       
     
    </div>
  </div>



    </div>
  );
};

export default Course;
