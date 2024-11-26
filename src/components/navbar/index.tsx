import Logomark from "./Logomark"
import Navigation from "./Navigation"

const Main = () =>{

    return (
        <header className="md:sticky fixed top-0 left-0 right-0 w-full z-40 md:py-1 py-0 bg-black drop-shadow-sm "> 
            <nav className='container md:max-w-screen-xl mx-auto flex justify-between flex-wrap items-center flex-row: mdpx-0 py-2'> 
                <Logomark/> 
                <Navigation/>
            </nav>
        </header> 
    )
}

export default Main