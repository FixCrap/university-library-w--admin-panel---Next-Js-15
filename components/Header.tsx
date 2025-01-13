"use client";

import Link from "next/link";
import Image from "next/image";
//import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Library } from "lucide-react";

const Header = () => {
	const pathname = usePathname();

	return (
		<header className='my-10 flex justify-between gap-5'>
			<Link href='/'>
				<Image
					src='/icons/logo.svg'
					alt='logo'
					width={40}
					height={40}
				/>
			</Link>

			<ul className='flex flex-row items-center gap-8'>
				<li>
					{/* <form
						action={async () => {
							"use server";

							await signOut();
						}}
						className='mb-10'>
						<Button>Logout</Button>
					</form> */}
					<Link
						href='/library'
						className={cn(
							"text-base cursor-pointer capitalize",
							pathname === "/library" ? "text-light-200" : "text-light-100"
						)}>
						Library
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
