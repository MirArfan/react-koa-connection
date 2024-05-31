import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const ApiCall = () => {


    const { quote, author, fetchNewQuote, isLoading } = useFetch("https://api.quotable.io/random");

    return (
        <div className="flex justify-center items-center min-h-screen flex-col pb-28">

            <div className="bg-gray-100 max-w-3xl h-96 rounded-xl p-12 flex justify-center i flex-col">
                {isLoading ? <h2 className='text-3xl italic font-semibold pb-10 text-red-800'>Loading...</h2> :
                    <>
                        <h2 className='text-3xl italic font-semibold pb-10 text-blue-800'>{quote}</h2>
                        <small className='text-lg italic font-semibold text-right text-sky-600'>-{author}-</small>
                    </>
                }
            </div>
            <br />
            <button className="border-2 border-blue-600 bg-blue-500 text-gray-50 text-lg py-0.5 px-4 rounded cursor-pointer outline-none" onClick={fetchNewQuote}>Generate New Quote</button>
        </div>
    );
};

export default ApiCall;
