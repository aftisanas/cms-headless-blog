import Link from 'next/link';
import React from 'react'

const Banner = () => {
    return (
        <div id="sticky-banner" tabIndex={-1} className="fixed top-0 start-0 z-50 flex justify-between w-full p-2 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center mx-auto">
                <p className="flex items-center text-sm font-normal text-gray-500">
                    <span>This is a demo blog using WordPress and Next.js. <Link href="https://github.com/aftisanas/cms-headless-blog" className="inline font-medium text-neutral-600 underline dark:text-neutral-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Check my github repository</Link></span>
                </p>
            </div>
            <div className="flex items-center">
                <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg className="w-3 h-3"  aria-hidden='true' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </div>
    );
}

export default Banner