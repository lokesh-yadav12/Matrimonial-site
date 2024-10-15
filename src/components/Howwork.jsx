import React from 'react'
import h11 from "../images/how5.jpg"
import h22 from "../images/how3.jpg"
import h33 from "../images/how2.jpeg"

export const Howwork = () => {
    return (
        <div className='justify-center items-center py-20 px-3   '  >
            <h2 className='text-pink-800 text-2xl flex p-2 justify-center text-center items-center'><b>How Does It Works ?</b></h2>
            <h4 className='text-center'>Get started on Sukhvivah in 3 simple steps</h4>
            <div className='lg:flex gap-2 '>
                
                
                <div className='py-2 my-4 items-center justify-center mx-auto '>
                    <div className='items-center justify-center mx-auto flex flex-col'>

                        <div className='  p-2  mx-auto text-center '>

                            <img className='h-[280px] w-[100%] rounded-full' src={h11} />
                            <label className='text-red-800 text-2xl py-1'><b>1. Sign Up</b></label>

                            <h3>Be Part of our Sukhvivah Family.
                                Meet your <br/>Partner/
                                Dating Partner/Friend's</h3>

                        </div>


                    </div>
                </div>


                <div className='py-2 my-4 items-center justify-center mx-auto '>
                    <div className='items-center justify-center mx-auto flex flex-col'>

                        <div className='  p-2  mx-auto text-center '>

                            <img className='h-[280px] w-[100%] rounded-full' src={h22} />
                            <label className='text-red-800 text-2xl py-1'><b>2. AI Profile Search</b></label>

                            <h3>Search Profile's with Advance Artificial  <br/> Intelligence</h3>

                        </div>


                    </div>
                </div>


                <div className='py-2 my-4 items-center justify-center mx-auto '>
                    <div className='items-center justify-center mx-auto flex flex-col'>

                        <div className='  p-2  mx-auto text-center '>

                            <img className='h-[280px] w-[100%] rounded-full' src={h33} />
                            <label className='text-red-800 text-2xl py-1'><b>3. Connect</b></label>

                            <h3>Connect with 100% Aadhar/Passsport <br/>Variefied Profile's</h3>

                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}
