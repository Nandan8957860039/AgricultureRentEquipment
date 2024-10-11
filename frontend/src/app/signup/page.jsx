'use client'
import { IconLoader3, IconSend2 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup'

const singnupschema = Yup.object().shape({
    name: Yup.string().required('Nmae is required').min(3, 'Nmae is atleast 3 character'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('password is required')
        .min(5, 'password must be alteast 5 characteres ')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter')
        .matches(/[a-z]/, 'Password must contain an lowercase letter')
        .matches(/[0-9]/, 'password must contain a number')
        .matches(/\W/, 'password must contain a special character'),
    confirmPassword: Yup.string().required('confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Password must match')
});

const singnup = () => {
    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },//object
        onSubmit: (values, { resetForm, setSubmitting }) => {
            console.log(values);//send the values to beckend
            setSubmitting(true)

            axios.post("http://localhost:5000/user/add", values)
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
        validationSchema: singnupschema
    });
    return (

        <div>
            <h1 className='text-2xl font-bold uppercase my-10 text-center'>signup Page</h1>
            <div className='max-w-lg mx-auto rounded-1g shadow-lg mt-10 p-10'>
                <form onSubmit={signupForm.handleSubmit}>
                    <label htmlFor="name">name</label>
                    < input type="text" id='name'
                        onChange={signupForm.handleChange}
                        value={signupForm.values.name}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (signupForm.touched.name && signupForm.errors.name) && (
                            <p className='text-red-500 mb-5 text-sm'>
                                {signupForm.errors.name}</p>)
                    }

                    <label htmlFor="email">email</label>
                    < input type="email" id='email'
                        onChange={signupForm.handleChange}
                        value={signupForm.values.email}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (signupForm.touched.email && signupForm.errors.email) && (
                            <p className='text-red-500 mb-5 text-sm'>
                                {signupForm.errors.email}</p>)
                    }
                    <label htmlFor="password">Password</label>
                    < input type="password" id='password'
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (signupForm.touched.password && signupForm.errors.password) && (
                            <p className='text-red-500 mb-5 text-sm'>
                                {signupForm.errors.password}</p>)
                    }
                    <label htmlFor="confirmpassword">confirmPassword</label>
                    < input type="password" id='confirmPassword'
                        onChange={signupForm.handleChange}
                        value={signupForm.values.confirmPassword}
                        className='w-full p-2 border-rounded-lg my-2 bg-gray-100' />
                    {
                        (signupForm.touched.confirmPassword && signupForm.errors.confirmPassword) && (
                            <p className='text-red-500 mb-5 text-sm'>
                                {signupForm.errors.confirmPassword}</p>)
                    }

                    <button
                        disabled={signupForm.isSubmitting}
                        type='submit'
                        className=' flex justify-center gap-2 bg-black mt-6 px-3 py-2 rounded text-white font-bold w-full disabled:bg-grey-600'>
                          {signupForm.isSubmitting?<IconLoader3 className='animate-spin'size={20}/>:<IconSend2 size={20}/>}  
                            submit
                        </button>
                </form>
                {/* <form onSubmit={</form> */}
            </div>

            {/* //     singnup
        //     <Button>My Button</Button>
        //     <Button>sumbit</Button>
        //     <Button>Know more</Button>
        //     <Button>ghar chale</Button>
        //     <Input id='name' label='Name' type="text" placeholder="enter your name" />
        //     <Input id='email' label='Email' type="email" placeholder="enter your email" />
        //     <Input id='password' label='password' type="password" placeholder="enter a password" /> */}
        </div>

    )
}

export default signup
//send the backend
//1.fetch api
//axios
