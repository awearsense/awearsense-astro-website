 
import Link from "next/link"; 
import { AppRoutes } from '@/constants/routes';  
import Button from '@/components/button';

const NavLinks = () =>{   
    return(
        <>
            <Link
                className='w-full h-full whitespace-nowrap text-white'
                href={AppRoutes.DEV}>
                Dev
            </Link> 
            <Link 
                className='w-full h-full whitespace-nowrap linear-gradient'
                href={AppRoutes.CONTACT_US}>
                join waitlist 
            </Link>    
        </>
    )
}

export default NavLinks