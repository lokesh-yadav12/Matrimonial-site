import React from 'react'

export const Country = () => {
    return (
        <div>
            <h2 className='text-pink-500 text-2xl text-center p-2'><b>Trusted Matrimony world-wide</b></h2>
            <div className='grid lg:grid-cols-3  mx-auto py-3 justify-center items-center text-center'   >


                <div className='py-2'>
                    <h2 className='text-center text-xl p-2 '><b><u>Countries</u></b></h2>
                    <h2 className='text-center'><b>India | Usa | Iran | Iraq | Ireland | Australia</b></h2>


                </div>
                <div className='py-3'>
                    <h2 className='text-center text-xl p-2 '><b><u>Cast</u></b></h2>
                    <h2 className='text-center'><b>Sindhi | Gujrati | Jain | Marwadi |Marathi | Punjabi </b></h2>

                </div>
                
                <div className='py-3 justify-center items-center'>
                    <h2 className='text-center text-xl p-2 '><b><u>Religions</u></b></h2>
                    <h2 className='text-center'><b>Hinduism | Sikhism | Islam | Budhism | christianity</b></h2>

                </div>
            </div>
        </div>
    )
}
