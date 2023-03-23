import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    let i = 1
    setInterval(() => {
      i = i + 1
      let cctv:any = document.getElementById('cctv')
      cctv.src = "https://0892-103-119-62-46.ap.ngrok.io//capture?r" + i
    },800)
  },[])

  return (
    <div className='bg-black/80'>
      <div className='flex items-center justify-center h-screen'>
        <img src="https://0892-103-119-62-46.ap.ngrok.io//capture" id='cctv' className='w-full' />
      </div>
    </div>
  )
}
