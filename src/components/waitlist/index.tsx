'use client'

import {useState} from 'react'
import Image from 'next/image'
import arrow from "@/assets/arrow-right.svg";
import arrowwhite from "@/assets/arrow-rightwhite.svg";

interface Props{
    show:boolean
}

const WaitList = (props:Props) =>{ 
    const {show} = props
    const [email, setEmail] = useState(''); 

    const handleSubmit = (event:any) =>{
        event.preventDefault();
        postData({ email:email});
    } 
  
    const validateEmail = (email: string) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
      }
        return false;
      };
  
    const postData = (data: any) => {
      console.log(data)
      // check if email is empty
      if (!data.email) {
        console.log("Please enter your email");
        return;
      }
  
      // vaidate if the data is email type
      if (validateEmail(data.email) === false) {
        console.log("Please enter a valid email");
        return;
      }
      data.waitlist_id = 15885;
      data.referral_link = document.URL;
      fetch("https://api.getwaitlist.com/api/v1/signup", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return(
        <section className="flex flex-col gap-2 w-full">
            <h2 className={`font-medium text-lg md:text-2xl ${show ? 'text-white': 'text-black' }`}> 
                join the waitlist
            </h2>
            <form className="flex md:w-2/3 w-full" method="post"  onSubmit={handleSubmit}>
                <input 
                    name="email" 
                    placeholder="Email Address"
                    type="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className={`outline-none border-0 border-b bg-transparent flex-1 ${show?'text-white':'text-black'}`}
                    />
                <button type="submit" className="w-14">
                <Image
                    className="h-full"
                    src={show ? arrowwhite : arrow}
                    width={500}
                    height={500}
                    alt="arrow"
                    /> 
                </button>
            </form>    
        </section>
    )
}

export default WaitList