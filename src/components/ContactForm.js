
'use client'
import React, { useState } from 'react'
import Loader from './Loader';
const ContactForm = () => {

    const [messgeSent, setMessageSent] = useState(false);
    const [loader, setLoader] = useState(false)
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })

    const preventPasteNegative = (e) => {
        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedData = parseFloat(clipboardData.getData('text'));

        if (pastedData < 0) {
            e.preventDefault();
        }
    }

        const preventMinus = (e) => {
            if (e.code === 'Minus') {
                e.preventDefault();
            }
        }


        const handleSubmit = async (e) => {
            setLoader(true)
            e.preventDefault();
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(e.target.email.value)) {
                setFormData({ ...formData, email: e.target.email.value });
                console.log(formData)

            }
            else {
                setLoader(false)

                document.getElementById("responseText").classList.remove('hidden');
                document.getElementById("responseText").classList.add('text-red-700', '!bottom-4', '!right-4');
                document.getElementById("responseText").innerHTML = "Please enter a valid email address";

                setTimeout(() => {
                    document.getElementById("responseText").innerHTML = " ";
                    document.getElementById("responseText").classList.add('!-right-[50%]', '!-bottom[50%]');
                }, 5000);

                return false;
            }
            const data = {
                name: e.target.name.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }




            // const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://itsmazharnazeer.com/api/contactform' :'http://localhost:3000/api/contactform', {
            const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mazharnazeer.vercel.app/api/contactform' :'http://localhost:3000/api/contactform', {

                method: "POST",
                body: JSON.stringify(data),
                mode: "cors",
                headers: { "Content-type": "application/json;charset=utf-8" },

            })

            if (response.ok) {
                setLoader(false)

                setMessageSent(true)

                document.getElementById("feedbackForm").reset();
                document.getElementById("responseText").innerHTML = "Sending message...!";

                console.log(' Message sent successfully')

                document.getElementById("responseText").classList.add('text-green-700', '!bottom-4', '!right-4');
                document.getElementById("responseText").classList.remove('hidden');
                document.getElementById("responseText").innerHTML = "Message Sent!";

                setTimeout(() => {
                    document.getElementById("responseText").innerHTML = " ";
                    document.getElementById("responseText").classList.add('!-right-[50%]', '!-bottom[50%]', '!hidden');
                }, 5000);




            }
            if (!response.ok) {
                setLoader(false)
                setMessageSent(false)

                console.log(' Error sending message ')

                document.getElementById("responseText").classList.remove('hidden');
                document.getElementById("responseText").classList.add('text-red-700', '!bottom-4', '!right-4');
                document.getElementById("responseText").innerHTML = "Something went wrong!";

                setTimeout(() => {
                    document.getElementById("responseText").innerHTML = " ";
                    document.getElementById("responseText").classList.add('!-right-[50%]', '!-bottom[50%]', 'hidden');
                }, 5000);

            }




        }

        return (
            <div className=' mt-4  mx-auto flex items-center justify-center w-[50%] relative lg:w-[96%]'>
                <Loader loadState={loader ? 'active' : ' '} />

                <form className='w-full gap-6 flex flex-col dark:text-light contact-form text-primary' onSubmit={handleSubmit} id='feedbackForm'>
                    <div className='w-full flex justify-center  flex-col' >
                        <label htmlFor='name' className=" pb-4 font-semibold" >Name:</label>
                        <input type="text" id="name" name="name" className="p-3 border border-solid border-dark rounded-lg h-11 bg-white/60 " required minLength={3}  />
                    </div>
                    <div className='w-full flex justify-center  flex-col' >
                        <label className=" pb-4 font-semibold" htmlFor='phone'>Phone:</label>
                        <input type="number" id='phone' name="phone" className="p-3 border border-solid border-dark rounded-lg h-11 bg-white/60" min="0"
                            onPaste={preventPasteNegative}
                            onKeyPress={preventMinus} required />
                    </div>
                    <div className='w-full flex justify-center  flex-col' >
                        <label className=" pb-4 font-semibold" htmlFor='email' >Email:</label>
                        <input type="email" id="email" name='email' className="p-3 border border-solid border-dark rounded-lg h-11 bg-white/60 " required />
                    </div>
                    <div className='w-full flex justify-center  flex-col' >
                        <label className=" pb-4 font-semibold" htmlFor='message'  >Message:</label>
                        <textarea
                            id='message'
                            className="p-3  border border-solid border-dark rounded-lg h-11 bg-white/60 "
                            required
                            name="message"
                            minLength={10}
                            maxLength={1000}

                        ></textarea>

                    </div>



                    <div className='w-full flex justify-center mb-20 mt-10 lg:mb-14 lg:mt-8' >
                        <button className='border border-transparent border-solid dark:hover:border-light dark:hover:text-primaryDark dark:hover:bg-dark bg-dark text-light dark:bg-light dark:text-dark dark:font-bold rounded-lg flex items-center justify-center p-3 w-1/3 lg:w-[80%]'>Send Message</button>

                    </div>
                    <p id='responseText' className="fixed z-20 transition-all duration-500 hidden bg-[#c3c3c380] dark:bg-light/70   rounded-lg py-3 px-5 -right-[50%] -bottom[50%] font-semibold" >test</p>

                </form>

            </div>
        )
    }

    export default ContactForm