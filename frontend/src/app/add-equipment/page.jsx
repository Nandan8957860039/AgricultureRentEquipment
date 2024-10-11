'use client';
import { IconLoader3, IconSend2 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const AddEquipment = () => {


    const equipmentForm = useFormik({
        initialValues: {
            title: '',
            brand: '',
            price: '',
            image: '',
            category: ''
        },
        onSubmit: (values, { resetForm, setSubmitting }) => {
            console.log(values);//send the values to beckend
            setSubmitting(true)

            axios.post("http://localhost:5000/equipment/add", values)
                .then((result) => {

                    toast.success('user Registered successfully')
                    resetForm();
                }).catch((err) => {
                    console.log(err)
                    console.log(err?.response?.status)
                    toast.error(err?.response?.data?.message || 'something went to wrong')
                    toast.error('Something went to the wrong')
                    setSubmitting(false)
                });
        },
        // validationSchema: singnupschema
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData()
        // formik()
        fd.append('file', file)
        fd.append('upload_preset', 'myCloud8957860039')
        fd.append('cloud_name', 'dldg56g6u')

        axios.post('https://api.cloudinary.com/v1_1/dldg56g6u/image/upload', fd)
            .then((res) => {
                toast.success('file upload suceessfully')
                console.log(res.data)
                equipmentForm.setFieldValue('image', res.data.url);
            }).catch((err) => {
                console.log(err);
                console.log('something went to wrong')

            });

    }

    return (

        <div>
            <h1 className='text-2xl font-bold uppercase my-10 text-center'>Equipment Form</h1>
            <div className='max-w-lg mx-auto rounded-1g shadow-lg mt-10 p-10'>
                <form onSubmit={equipmentForm.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    < input type="text" id='title'
                        onChange={equipmentForm.handleChange}
                        value={equipmentForm.values.title}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (equipmentForm.touched.name && equipmentForm.errors.name) && (
                            <p className='text-red-500 mb-5 text-sm'>
                                {equipmentForm.errors.name}</p>)
                    }

                    <label htmlFor="brand">Brand</label>
                    < input type="text" id='brand'
                        onChange={equipmentForm.handleChange}
                        value={equipmentForm.values.brand}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (equipmentForm.touched.brand && equipmentForm.errors.brand) && (
                            <p className='text-red-500 mb-5 text-sm'>
                                {equipmentForm.errors.brand}</p>)
                    }
                    <label htmlFor="price">Price</label>
                    <input type="price" id='price'
                        onChange={equipmentForm.handleChange}
                        value={equipmentForm.values.price}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (equipmentForm.touched.price && equipmentForm.errors.price) && (
                            <p className='text-red-500 mb-5 text-sm'>
                                {equipmentForm.errors.price}</p>)
                    }
                    <label htmlFor="image">image</label>
                    <input type="file" className='w-full p-2 border-rounded-lg my-2 bg-gray-100'
                        onChange={uploadFile}
                    />

                    <label htmlFor="category">category</label>
                    <input type="category" id='category'
                        onChange={equipmentForm.handleChange}
                        value={equipmentForm.values.category}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (equipmentForm.touched.category && equipmentForm.errors.category) && (
                            < p className='text-red-500 mb-5 text-sm'>
                                {equipmentForm.errors.category}</p>)
                    }

                    <button
                        disabled={equipmentForm.isSubmitting}
                        type='submit'
                        className=' flex justify-center gap-2 bg-black mt-6 px-3 py-2 rounded text-white font-bold w-full disabled:bg-grey-600'>
                        {equipmentForm.isSubmitting ? <IconLoader3 className='animate-spin' size={20} /> : <IconSend2 size={20} />}
                        sumbit
                    </button>
                </form>
            </div>
        </div >

    )
}

export default AddEquipment;
