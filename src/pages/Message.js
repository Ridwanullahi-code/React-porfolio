import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Message = () => {
    return (
        <>
            <Navbar />
            <section className='bg-gray-100 flex flex-col items-center py-10 space-y-6'>
            <h3 className="text-2xl font-bold">Feel free to ask anything</h3>
            <form  method="POST" className="flex flex-col space-y-6 w-80">
                    <input type="text" name="username" placeholder="Name" required="required"
                        className="rounded-md p-2 border focus:outline-green-400"
                    />
                <input type="email" name="useremail" placeholder="example@gmail.com"
                        required="required" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                        className="rounded-md p-2 border focus:outline-green-400"
                    />
                <textarea name="message" rows="7" cols="40" className="border rounded-md p-2 focus:outline-green-400"
                    placeholder="Message here" maxLength="500" /> 
                    <input className="border p-2 rounded-md text-white bg-green-600 hover:bg-green-400
                 active:bg-green-800" type="submit" value="Submit"/>
            </form>
            </section>
            <Footer />
        </>
        
    )
}

export default Message;