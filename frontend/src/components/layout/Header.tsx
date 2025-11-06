"use client"

import Link from "next/link";
import { AuthButton } from "../ui/AuthButton";

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 mb-4 flex items-center justify-between z-50">
            <Link href="/" className="text-2xl font-bold text-amber-500">AedesControl</Link>

            <div className="flex items-center gap-6 text-gray-700 font-medium">
                <Link href="/#sobre" className="hover:text-amber-500 transition">Sobre</Link>
                <Link href="/#contato" className="hover:text-amber-500 transition">Contato</Link>
            </div>

            <div className="flex items-center gap-4">
               <AuthButton />
            </div>
        </header>
    );
}