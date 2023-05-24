import React from 'react'
import Link from 'next/link'

const MainMenu = ({ items }) => {
    console.log('Main Menu', items)
    return (
        <div className="flex h-16 sticky top-0 z-50 bg-slate-700 text-white px-5">
            <div className="py-4 pl-5 text-white text-2xl font-heading">
                <span>NextJS + Headless Wordpress</span>
            </div>
            <div className="flex flex-1 justify-end">
                {(items || []).map(item => (
                    <div key={item.id} className="hover:bg-slate-600 cursor-pointer relative group">
                        <div>
                            <Link href={item.destination} className="p-5 block">
                                {item.label}
                            </Link>
                        </div>
                        {!!item.subMenuItems?.length && (
                            <div className="group-hover:block hidden text-right bg-slate-700 absolute right-0 top-full">
                                {item.subMenuItems.map(subMenuItem => (
                                    <Link key={subMenuItem.id} href={subMenuItem.destination} className="block whitespace-nowrap p-5 hover:bg-slate-600">
                                        {subMenuItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainMenu