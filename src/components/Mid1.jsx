import React from 'react'
import image2 from "../images/shaadi.jpeg"

export const Mid1 = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto -mt-5'>
            <div className='font-bold text-3xl text-red-700 p-4'>
                About Us
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center w-full lg:w-[80%]'>
                <div className='flex justify-center w-full lg:w-1/2'>
                    <img src={image2} className='h-full w-[80%] object-cover' />
                </div>

                <div className='flex  text-lg flex-col  lg:w-1/2 p-6 w-full text-black'>
                    <div>
                        <b>connecting hearts Worldwide :<br /> Your Ultimate Destination for Marriage, Dating and Friendship.</b>
                        <br />
                    </div>
                    <br />
                    <div>
                        Welcome to Sukhvivah Matrimony International, where borders are no barrier to finding love,
                        companionship, and meaningful friendships. Our platform transcends geographical boundaries,
                        bringing together individuals from around the globe who are seeking genuine connections and
                        lasting relationships. Whether you're looking to find your soulmate, explore the dating scene,
                        or expand your social network internationally, Sukhvivah Matrimony International is here to make
                        your journey exciting, safe, and rewarding.

                    </div>

                </div>
            </div>
        </div>
    )
}
