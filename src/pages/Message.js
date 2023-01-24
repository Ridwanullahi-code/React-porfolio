import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useForm, ValidationError } from '@formspree/react';
import Redirect from '../components/Redirect';

const Message = () => {
    const [state, handleSubmit] = useForm('mlekdkoe');
    if (state.succeeded) {
        return <Redirect />
    }
    
    return (
        <>
            <Navbar color="bg-gray-800" />
            <section className='bg-white  dark:bg-gray-800 flex flex-col items-center py-10 space-y-6'>
            <h3 className="text-2xl font-bold">Feel free to ask anything</h3>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6 w-full px-5 md:px-80 text-black"
                    method="POST"
                    action='https://formspree.io/f/mlekdkoe'
                    name="message">
                    <input type="text" name="username" placeholder="Name" required="required"
                        className="rounded-md p-2 border focus:outline-green-40"
                    />
                <input type="email" name="email" placeholder="example@gmail.com"
                        required="required" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                        className="rounded-md p-2 border focus:outline-green-400"
                    />
                     <ValidationError field="email" prefix="Email" errors={state.errors} />
                <textarea name="message" rows="7" cols="40" className="border rounded-md p-2 focus:outline-green-400"
                        placeholder="Message here" maxLength="500" /> 
                    <input className="border p-2 rounded-md text-white dark:bg-deepGreen 
                    dark:hover:bg-deepGreen dark:border-deepGreen  bg-gray-800 hover:opacity-90
                     active:bg-gray-900
                  dark:active:bg-deepGreen" type="submit" value="Submit" disabled={state.submitting}
                    />
            </form>
            </section>
            <Footer />
        </>
        
    )
}

export default Message;