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
        className="w-full h-screen flex flex-row-reverse bg-slate-100"
        style={{ backgroundImage: `url(${Background.src})`}}
      >
        <Floatbox />
      </main>
    </div>
  )
}
