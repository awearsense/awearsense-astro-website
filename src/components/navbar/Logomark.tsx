import Link from "next/link";  
import Image from "next/image"; 
import { AppRoutes } from '@/constants/routes'; 
import Logo from '@/assets/awearsense.svg' 

// interface Props{
//     size:'sm' | 'md' | 'lg'; 
// }

const Logomark = () =>{
    // const {size} = props
    return(
        <Link
            className='flex gap-4 items-center max-w-fit' 
            href={AppRoutes.HOME_PAGE}>
            <Image 
                className="h-7 max-w-fit" 
                src={Logo.src}
                width={100}
                height={100}
                alt="awearsense logo" />
            <h4 className="font-medium text-white tracking-wider">awearsense</h4>
        </Link>
    )
}

export default Logomark