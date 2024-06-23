"use client"
 
// import Banner from "../banner";
import Nav from './Nav'; 
import Logo from './Logo'   

const Header = () =>{  
    return(
        <>
            {/* <Banner/>  */}
            <header className="fixed top-0 w-full z-40 md:py-1 py-0"> 
                <nav className='container md:max-w-screen-2xl mx-auto flex justify-between items-center lowercase md:px-16 px-8 py-4'> 
                    <Logo/> 
                    <Nav/>
                </nav>
            </header>
        </>
    )
}

export default Header