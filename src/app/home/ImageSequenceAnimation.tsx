'use client'
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const ImageSequenceAnimation = () => {
    const parentRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [ctx,setCtx] = useState(null)
    const frameCount = 147
    const airpods = {
      frame: 0
    };

    // Load Images into an Array
    useEffect(() => { 

      const currentFrame = (index: number) => (
        `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
      ); 
      
      for (let i = 0; i <=frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);  
        setImages((prevImages)=>[...prevImages,img]);
      }
    }, []);  

    useGSAP(()=>{

      console.log(images)

      const canvas = canvasRef.current 
      setCtx(canvas?.getContext('2d'))
      
      let cwidth = 0
      let cheight = 0
      if (canvas) {
        cwidth = canvas.width = parentRef.current?.offsetWidth || 0
        cheight = canvas.height = canvas.offsetHeight || 0
      }

      const renderFrames = () =>{  
        ctx?.clearRect(0, 0, cwidth, cheight);
        ctx?.drawImage(images[airpods.frame].src, 0, 0);
      }

      // gsap code 
      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none", 
        scrollTrigger:{
          trigger:parentRef.current,
          start: "top top",
          end: "+=3500",
          markers: true,
          pin: true,
          scrub: 0.5
        },
        onUpdate:renderFrames
      })

      // imageArray[0].onload = renderFrames;

    },[images])


    return(
        <section ref={parentRef} className="h-screen bg-white overflow-hidden">
            <canvas ref={canvasRef} className="!w-full !h-full"/> 
        </section>
    )
}

export default ImageSequenceAnimation