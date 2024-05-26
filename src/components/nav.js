'use client'
import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function nav() {
    
        return (
            <main className='top-0 fixed w-full mt-5'>
            <div className='sm:flex justify-between w-3/4 sm:items-center sm:m-auto mx-3'>

                <div className='my-5'>
                    <Image
                        src='/logo-black.png'
                        width='50'
                        height='50'
                        alt="pure logo"
                    >
                    </Image>

                </div>

            
                <div className='flex sm:flex-row flex-col gap-5'>
                    
                    <Link href='/user/home'>Home</Link>
                    <Link href='/user/settings'>Settings</Link>
                    <Link href='/'>Log out</Link>
                    

                </div>

                <div className='my-5 sm:hidden'>
                    <Image
                        src='/logo-black.png'
                        width='50'
                        height='50'
                        alt="pure logo"
                    >
                    </Image>
                </div>

                
            </div>
            </main>
        );
    
}

export default nav;
