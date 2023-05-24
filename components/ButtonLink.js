import React from 'react'
import Link from 'next/link'

const ButtonLink = ({ destination, label }) => {
    return (
        <Link href={destination} className="bg-blue-700 hover:bg-blue-600 inline-block my-2 px-4 py-2 rounded-md cursor-pointer text-white">
            {label}
        </Link>
    )
}

export default ButtonLink