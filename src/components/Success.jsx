import React from 'react'
// import pic1 from "../images/first.jpeg"
import pic2 from "../images/second.jpeg"
import pic3 from "../images/third.jpeg"
import pic4 from "../images/fourth.jpeg"
// import pic5 from "../images/fifth.jpeg"
// import pic6 from "../images/sixth.jpeg"
export const Success = () => {
    return (
        <div className='justify-center items-center p-2 '  >
            <h2 className='text-pink-800 text-xl flex p-2 justify-center text-center items-center'><b>Sukhvivah Success Story</b></h2>
            <div className='lg:flex gap-2 '>
                <div className='py-2 my-4 items-center justify-center mx-auto border-pink border-2 rounded-3xl'>
                    <h2 className='h-16  text-center justify-center pt-3 w-[300px] overflow-hidden mx-auto text-white border-pink border-2 rounded-3xl flex bg-pink-900 text-l'>Sukhvivah Coupling  11/06/2019</h2>
                    <div className='items-center justify-center mx-auto flex flex-col'>

                        <div className='flex text-pink-800 p-2  mx-auto '>
                            <div>
                                <img className='h-[135px] w-[100%]' src={pic3} />
                                <label><b>Lokesh Kumar</b></label>
                            </div>
                            <div>
                                <img className='h-[135px] w-[100%] ' src={pic2} />
                                <label><b>----- yadav</b></label>
                            </div>
                        </div>
                        <div className=''>
                            <button className='text-white mx-auto bg-pink-800 p-2 text-center rounded-2xl'>View success story</button>
                        </div>

                    </div>
                </div>


                <div className='py-2 my-4 items-center justify-center mx-auto border-pink border-2 rounded-3xl '>
                    <h2 className='h-16  text-center justify-center pt-3 w-[300px] overflow-hidden mx-auto text-white border-pink border-2 rounded-3xl flex bg-pink-900 text-l'>Sukhvivah Coupling 02/07/2021</h2>
                    <div className='items-center justify-center mx-auto flex flex-col'>

                        <div className='flex text-pink-800 p-2  mx-auto '>
                            <div>
                                <img className='h-[135px] w-[100%]' src={pic3} />
                                <label><b>Siddhant Nema</b></label>
                            </div>
                            <div>
                                <img className='h-[135px] w-[100%] ' src={pic4} />
                                <label><b>Riya Bajaj</b></label>
                            </div>
                        </div>
                        <div className=''>
                            <button className='text-white mx-auto bg-pink-800 p-2 text-center rounded-2xl'>View success story</button>
                        </div>

                    </div>
                </div>

                <div className='py-2 my-4 items-center justify-center mx-auto  border-pink border-2 rounded-3xl'>
                    <h2 className='h-16  text-center justify-center pt-3 w-[300px] overflow-hidden mx-auto border-pink border-2 rounded-3xl text-white flex bg-pink-900 text-l'>Sukhvivah Coupling 02/03/2023</h2>
                    <div className='items-center justify-center mx-auto flex flex-col'>

                        <div className='flex text-pink-800 p-2  mx-auto '>
                            <div>
                                <img className='h-[135px] w-[100%]' src={pic3} />
                                <label><b>Ayush Raj</b></label>
                            </div>
                            <div>
                                <img className='h-[135px] w-[100%] ' src={pic4} />
                                <label><b>Aditi ---</b></label>
                            </div>
                        </div>
                        <div className=''>
                            <button className='text-white mx-auto bg-pink-800 p-2 text-center rounded-2xl'>View success story</button>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
