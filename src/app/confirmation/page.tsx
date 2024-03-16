'use client'

import { useSearchParams } from 'next/navigation'

export default function Confirmation() {
    const searchParams = useSearchParams()
    const status = searchParams.get('status');
    const mobile = searchParams.get('mobile');

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                {status === 'success' ? (
                    <>
                        <h1 className="text-2xl font-bold">Your order is placed successfully!</h1>
                        <p className="mt-2">Mobile: {mobile}</p>
                    </>
                ) : (
                    <h1 className="text-2xl font-bold">Sorry, the order has failed.</h1>
                )}
            </div>
        </div>
    );
}
