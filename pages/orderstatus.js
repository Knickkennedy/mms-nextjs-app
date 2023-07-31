import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Floatbox from '../components/floatbox';
import { useState, useEffect } from 'react'
import Background from '../public/mms_background.jpg'

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Head>
                <title>M&M'S Configurator | M&M'S</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className="w-full h-screen flex justify-center items-center bg-slate-100"
            >
                <div className='flex flex-col justify-center h-fit p-24 rounded-xl'>
                    <div className='text-6xl text-center font-semibold text-mm-brown'>
                        Order Status
                    </div>
                    <ol className="flex items-start w-full text-sm font-medium text-center py-12 text-gray-500 dark:text-gray-400 sm:text-base">
                        <li className="flex items-center text-green-700 dark:text-green-700 after:self-start after:w-24 after:mx-4 after:h-6 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-12">
                                <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className='text-xs'>Image Upload Review</span>
                            </span>
                        </li>
                        <li className="flex items-center text-green-700 dark:text-green-700 after:self-start after:w-24 after:mx-4 after:h-6 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-12">
                                <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className='text-xs'>Preparing Your Colors</span>
                            </span>
                        </li>
                        <li className="flex items-center text-green-700 dark:text-green-700 after:self-start after:w-24 after:mx-4 after:h-6 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-12">
                                <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className='text-xs'>Printing Custom Designs</span>
                            </span>
                        </li>
                        <li className="flex items-center text-green-700 dark:text-green-700 after:self-start after:w-24 after:mx-4 after:h-6 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-12">
                                <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className='text-xs'>Packaging Candy</span>
                            </span>
                        </li>
                        <li className="flex items-center text-gray-400 dark:text-gray-400 after:self-start after:w-24 after:mx-4 after:h-6 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-12">
                                <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <circle cx='10' cy='10' r='10' />
                                </svg>
                                <span className='text-xs'>In Transit</span>
                            </span>
                        </li>
                        <li className="flex items-center text-gray-400 dark:text-gray-400">
                            <span className="flex flex-col items-center w-12">
                                <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <circle cx='10' cy='10' r='10' />                                    </svg>
                                <span className='text-xs'>Delivered</span>
                            </span>
                        </li>
                    </ol>

                    <div className='flex flex-row justify-center'>
                        <div className='flex flex-col justify-center'>
                            <span className='font-semibold text-mm-brown text-4xl'>Order Details</span>
                            <span>Status: Your order is being prepared for shipping</span>
                            <span>Order Number: 10002394920</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
