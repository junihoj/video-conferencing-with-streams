import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const NavBar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
    <Link href="/" className="flex items-center gap-1">
      <Image
        src="/icons/vidcon.jpg"
        width={32}
        height={32}
        alt="vidcon logo"
        className="max-sm:size-10"
      />
      <p className="text-[26px] font-extrabold text-white max-sm:hidden">
        Savvy VidCon
      </p>
    </Link>
    <div className="flex-between gap-5">
      <SignedIn>
        <UserButton  />
      </SignedIn>

      <MobileNav />
    </div>
  </nav>
  )
}

export default NavBar