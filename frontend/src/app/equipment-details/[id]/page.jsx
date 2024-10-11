'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const EquipmentDetails = () => {

  const { id } = useParams();
  const [equipmentData, setEquipmentData] = useState(null);

  const fetchEquipmentData = async () => {
    const res = await axios.get(`http://localhost:5000/equipment/getbyid/${id}`);
    console.log(res.data);
    setEquipmentData(res.data);
  }

  useEffect(() => {
    fetchEquipmentData();
  }, [])


  return (
    <div>
      <>
        {/* Approach */}
        <div>
          {/* Approach */}
          {
            equipmentData !== null ? (
              <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mb-10 lg:mb-14">
                  <p className="mt-1">
                    {equipmentData.brand}
                  </p>
                  <h2 className=" font-semibold text-2xl md:text-4xl md:leading-tight">
                    {equipmentData.title}
                  </h2>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                    <img
                      className="w-full object-cover rounded-xl"
                      src={equipmentData.image}
                      alt="Features Image"
                    />
                  </div>
                  {/* End Col */}
                  {/* Timeline */}
                  <div>
                    {/* Heading */}
                    <div className="mb-4">
                      <h3 className="text-xs font-medium uppercase">Product Details</h3>
                    </div>


                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p className="mt-5 text-sm lg:text-base text-neutral-400">
                        
                        <p className='text-lg font-bold text-black'>
                          {equipmentData.title}
                        </p>
                      </p>
                      <p className="mt-5 text-sm lg:text-base text-neutral-400">
                        <span className="">
                          Model
                        </span>
                        <p className='text-lg font-bold text-black'>
                          {equipmentData.brand}
                        </p>
                      </p>
                      <p className="mt-5 text-sm lg:text-base text-neutral-400">
                        <span className="">
                          Rent Price
                        </span>
                        <p className='text-lg font-bold text-black'>
                          ₹{equipmentData.price}
                        </p>
                      </p>
                    </div>
                  </div>
                  {/* End Timeline */}
                </div>
                {/* End Grid */}
              </div>
            ) : (
              <h3>Loading...</h3>
            )
          }
        </div>
        {/* End Approach */}
      </>


    </div>
  )
}

export default EquipmentDetails;