import Link from "next/link";  
import Image from "next/image"; 
import { AppRoutes } from '@/constants/routes'; 
import BrandLogo from '@/assets/logo.svg'; 

const Logo = () =>{
    return(
        <Link
            className='flex gap-4 items-center max-w-fit' 
            href={AppRoutes.HOME_PAGE}>
            <Image 
                className='h-7 max-w-fit'
                src={BrandLogo}
                alt="yume labs logo" />
            <span className="text-white">awearsense</span>
        </Link>
    )
}

export default Logo