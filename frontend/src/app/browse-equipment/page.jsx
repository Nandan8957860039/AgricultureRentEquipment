'use client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const BrowseEquipment = () => {

    const [equipmentList, setEquipmentList] = useState([]);

    const fetchEquipments = () => {
        axios.get('http://localhost:5000/equipment/getall')
            .then((res) => {
                console.log(res.status)
                console.table(res.data)
                setEquipmentList(res.data)

            }).catch((err) => {
                console.log(err);
                if (err?.response?.status === 403) {
                    toast.error('login is required')
                }
            });
    }

    useEffect(() => {
        fetchEquipments();
    }, [])


    return (<>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    equipmentList.map(equipment => (
                        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div className="h-52 flex flex-col justify-center items-center">
                                <img className='h-52 rounded-lg object-cover' src={equipment.image} alt="" />
                            </div>
                            <div className="p-4 md:p-6">
                                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                    {equipment.brand}
                                </span>


                                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                                    {equipment.title}
                                </h3>
                                <p className="mt-3 text-gray-500 dark:text-neutral-500">
                                    ₹{equipment.price}
                                </p>
                            </div>
                            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                                <Link
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href={'/equipment-details/'+equipment._id}
                                >
                                    View Details
                                </Link>
                                <a
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    href="#"
                                >
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* End Grid */}
        </div>
        {/* End Card Blog */}

    </>

    )
}

export default BrowseEquipment;