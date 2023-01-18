import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 h-full flex flex-col px-10 md:px-40  py-40 space-y-6">
            <h1 className="font-bold text-2xl text-center">About us</h1>
            <p>Number49s.co.uk was founded as a way to find 49 bettors the best possible
                value. We specialize in hot picks, hot and cold numbers, bookmaker odds and offers.
                We cover both UK and South Africa
            </p>
            <p>Number49s.co.uk only provides information about online lotto operators that are fully
                licensed and regulated. Keep Gambling Fun!
            </p>
            </div>
            <Footer />
        </>
        
    )
}

export default About;