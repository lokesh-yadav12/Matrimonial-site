import React from 'react'
import Navbar from './components/Navbar'
import bgImage from "./images/heroin.jpg"
import SearchForm from './components/SearchForm'
import { Mid1 } from './components/Mid1'
import 'bootstrap/dist/css/bootstrap.min.css';

import { MatchMakingGuide } from './components/MatchMakingGuide'
import { Success } from './components/Success'
import { Country } from './components/Country'
import { Howwork } from './components/Howwork'

const App = () => {
  return (
    <div
      className="absolute h-full w-full inset-0 bg-cover bg-center bg-no-repeat p- m-0 bg-blue-100"

      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className=''>

        <div className='relative h-screen w-full bg-black/30 flex flex-col justify-between items-center overflow-y-hidden'>
          <div className='w-full flex justify-center items-center'>
            <Navbar />
          </div>
          <div className=' text-white text-4xl md:text-7xl font-customFont font-bold'>
            Most Verified Partner <br /> Only At Suknvivah
          </div>
          <div className='w-full flex justify-center items-center py-10 '>
            <SearchForm />
          </div>


        </div>
        <div className='bg-blue-100 border-blue-200 border-3 rounded-3xl'>
          <Howwork/>
        </div>
        <div className='items-center justify-center mx-auto p-3 bg-blue-100 '>
          <Mid1 />
        </div>

        <div className='py-2 bg-blue-100 border-blue-200 border-3 rounded-3xl'>
          <MatchMakingGuide />
        </div>
        <div className='py-3 bg-blue-100 border-blue-200 border-3 rounded-3xl'>
        <Success />
        </div>
        <div className='p-3 bg-blue-100 border-blue-200 border-3 rounded-3xl'>
          <Country/>
        </div>

      </div>


    </div>
  )
}

export default App
