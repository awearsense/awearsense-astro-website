import Image from 'next/image'
import WaitList from '@/components/waitlist'
import bg from '@/assets/bg.png'
import '../home/home.css'

const Hero = () =>{
    return(
        <section id="main" className="h-screen flex justify-center items-center relative">
			<div className="absolute flex items-center align-middle w-screen h-full t-0">
				{/* <img src={bg.src} alt="" className="h-full w-full object-cover"/> */}
                <Image
                    className="h-full w-full object-cover"
                    src={bg.src}
                    width={500}
                    height={500}
                    alt="device picture"
                    />
			</div> 
			<div className="absolute flex w-screen h-full t-0 glass md:bg-[length:2%] bg-[length:10%]">
				 
			</div>
			<div className="grid md:grid-cols-2 gap-16 z-10">
				<div className="flex flex-col gap-10 col-span-1">
					<div className="col-span-1">
						<h1 className="text-4xl md:text-7xl font-extralight  text-white drop-shadow-sm">ear-based<br/> <i className="font-PlayFair">neural interfaces</i> <br/> for seamless interactions.</h1> 
					</div>   
					<span className="text-white font-extralight text-3xl"><span className="linear-gradient font-medium">awearsense</span> is building natural <i className="font-PlayFair">neural interfaces</i> for the new era of computing.</span>
				</div>
				<div className="flex items-end">
					<WaitList show={true}/>
				</div>
			</div>
		</section>  
    )
}

export default Hero