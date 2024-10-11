'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Login = () => {

  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:5000/user/authenticate',values)
      .then((response) => {
        console.log(response.data);
        toast.success('login successful')
        localStorage.setItem('token', response.data.token)
        router.push('/');
        
      }).catch((err) => {
        console.log(err)
        console.log(err?.response?.status)
        toast.error('login failed')
        
      });

    }
  })

  return (
    <div className='max-w-lg mx-auto'>

      <div className='shadow-lg rounded-lg border bg-white p-4'>
        <h1 className='text-center text-2xl font-bold p-5'>Login</h1>

        <form className='p-5' onSubmit={loginForm.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' onChange={loginForm.handleChange} value={loginForm.values.email}
            className="w-full py-1 px-3 rounded bg-gray-100 border" />

          <label htmlFor="password">Password</label>
          <input type="password" id='password'
            onChange={loginForm.handleChange} value={loginForm.values.password}
            className="w-full py-1 px-3 rounded bg-gray-100 border mt-4" />

          <button type="submit"
            className='p-2 bg-black mt-6 rounded text-white' >Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login;