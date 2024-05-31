import React from 'react'
import OtherProjectPicture from './OtherProjectPicture';
import OtherDetails from './OtherDetails';

const OthersProjectCard = () => {
    
    return (
        <div className='flex gap-4 w-[100%] justify-center flex-row flex-wrap'>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <OtherDetails />
            </div>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <OtherDetails />
            </div>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <OtherDetails />
            </div>
            <div className={'flex mt-[50px] max-w-full gap-2.5 ' }>
                <OtherProjectPicture/>
                <OtherDetails />
            </div>
            
        </div>

    )
}

export default OthersProjectCard