import Image from 'next/image'
import Link from 'next/link'

import WaitList from '@/components/waitlist'
import Copyright from '@/components/copyright'

import linkedin from '@/assets/social/linkedin.svg'
import github from '@/assets/social/github.svg'
import instagram from '@/assets/social/instagram.svg'
import reddit from '@/assets/social/reddit.svg'
import arrow from '@/assets/arrow-open.svg'
 
import { AppRoutes } from '@/constants/routes';  

const Footer = () =>{
    return(
        <footer id="footer" className="container flex flex-col md:max-w-screen-2xl mx-auto backdrop-blur px-8 md:px-16 relative" > 
            <div className="grid md:grid-cols-2 gap-16 py-32">
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-8xl md:font-thin font-light">awearsense</h2>
                    <WaitList show={false}/>
                    <div className="flex gap-4">
                        <Link
                            className='w-6 h-6 whitespace-nowrap'
                            href="https://github.com/awearsense">
                            <Image className="w-full h-full" src={github} alt={github}/>
                        </Link> 
                        <Link
                            className='w-6 h-6 whitespace-nowrap'
                            href="https://www.linkedin.com/company/awearsense">
                            <Image className="w-full h-full" src={linkedin} alt={linkedin}/>
                        </Link> 
                        <Link
                            className='w-6 h-6 whitespace-nowrap'
                            href="https://www.instagram.com/awearsense">
                            <Image className="w-full h-full" src={instagram} alt={instagram}/>
                        </Link> 
                        <Link
                            className='w-6 h-6 whitespace-nowrap'
                            href="https://reddit.com/r/awearsense/s/HK8iID09Jf">
                            <Image className="w-full h-full" src={reddit} alt={reddit}/>
                        </Link> 
                    </div> 
                </div>
                <div className="hidden">
                        <Link
                            className='w-full h-full whitespace-nowrap flex gap-2 align-middle text-4xl'
                            href={AppRoutes.ABOUT_US}>
                            <span className="font-PlayFair text-sm">01</span> <span>about us</span>
                            <Image className="h-10" src={arrow} alt="arrow"/>
                        </Link> 
                        <Link
                            className='w-full h-full whitespace-nowrap flex gap-2 align-middle text-4xl'
                            href={AppRoutes.ROADMAP}>
                            <span className="font-PlayFair text-sm">02</span> <span>roadmap</span>
                            <Image className="h-10" src={arrow} alt="arrow"/>
                        </Link> 
                        <Link
                            className='w-full h-full whitespace-nowrap flex gap-2 align-middle text-4xl'
                            href={AppRoutes.RESEARCH}>
                            <span className="font-PlayFair text-sm">03</span> <span>research</span>
                            <Image className="h-10" src={arrow} alt="arrow"/>
                        </Link> 
                        <Link
                            className='w-full h-full whitespace-nowrap flex gap-2 align-middle text-4xl'
                            href={AppRoutes.BLOG}>
                            <span className="font-PlayFair text-sm">04</span> <span>blog</span>
                            <Image className="h-10" src={arrow} alt="arrow"/>
                        </Link>  
                </div>
            </div>  
            <div className="justify-end">
                <Copyright/>
            </div>
        </footer>
    )
}

export default Footer