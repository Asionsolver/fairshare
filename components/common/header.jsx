"use client";
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import React from 'react'
import { Button } from '../ui/button';
import { BarLoader } from 'react-spinners';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Authenticated, Unauthenticated } from 'convex/react';
import { LayoutDashboard } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { useStoreUserEffect } from '@/hooks/useStoreUserEffect';

const Header = () => {
    const { isLoading, isAuthenticated } = useStoreUserEffect();
    const pathname = usePathname();
    return (
        <header className='fixed top-0 w-full border-b bg-background/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>

                <Link href="/" className='flex items-center'>
                    <Image src={"/logo.svg"} alt="Logo" width={70} height={40} />
                    <span className='text-2xl text-primary font-bold -ml-2'>FairShare</span>
                </Link>

                {pathname === '/' && (
                    <div className='hidden md:flex items-center space-x-4'>
                        <Link href="#features" className='text-lg  font-medium
                            hover:text-primary transition-colors duration-200'>
                            Features
                        </Link>
                        <Link href="#how-it-works" className='text-lg font-medium
                            hover:text-primary transition-colors duration-200'>
                            How it works
                        </Link>
                    </div>
                )}

                <div className='flex items-center space-x-4'>

                    <Authenticated>
                        <div className='flex items-center space-x-4'>
                            <Link href="/dashboard" >
                                <Button variant="ghost" className='hidden text-xl md:flex items-center cursor-pointer hover:border hover:border-primary hover:text-primary transition-colors duration-200'>
                                    <LayoutDashboard className='h-5! w-5!' />
                                    <span className=''>Dashboard</span>
                                </Button>

                                <Button variant="ghost" className='md:hidden text-xl p-2! hover:border hover:border-primary! hover:text-primary transition-colors duration-200 rounded-full'>
                                    <LayoutDashboard className='h-5! w-5!' />
                                </Button>
                            </Link>
                            <ModeToggle />
                            <UserButton />
                        </div>
                    </Authenticated>

                    <Unauthenticated>

                        <SignInButton>
                            <Button variant="ghost" className='m-0'>
                                Sign In
                            </Button>
                        </SignInButton>

                        <SignUpButton>
                            <Button className='m-2'>
                                Get Started
                            </Button>
                        </SignUpButton>

                        <ModeToggle />

                    </Unauthenticated>

                </div>
            </nav >
            {isLoading && <BarLoader width={"100%"} color='#c96442' />}
        </header >
    )
}

export default Header;