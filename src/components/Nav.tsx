'use client';

import Link from "next/link";

import { ModeToggle } from "./theme-toggle";
import Image from "next/image";
import { Button } from "./ui/button";
import SuccessToast from "./SuccessToast";
import { log } from "console";
import { toast } from "sonner";

const Nav = () => {

    const menuPages = [
        { name: "Home", href: "/" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Live", href: "https://erevos.gr" },
        { name: "Dev", href: "https://staging.erevos.gr" },
    ];

    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));


    return (
        <header className="flex flex-wrap justify-center md:justify-between items-center p-4 md:pb-10">
            <div>
                <a
                    className="flex place-items-center gap-2 p-8 lg:p-0"
                    href="/"
                >
                    By{' '}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
            <nav>
                <ul className="flex justify-center gap-4">
                    {menuPages.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex gap-2">
                <SuccessToast />
                <Button onClick={() => toast.promise(promise, {
                    loading: 'Loading...',
                    success: (data: any) => {
                        return `First toast has been added`;
                    },
                    error: 'Error',
                })}>
                    Custom Toast!
                </Button>
                <ModeToggle />
            </div>
        </header >
    );
};

export default Nav;
