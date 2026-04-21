import React from "react";

function ContactUs(){
    return(
        <div className="h-screen mt-0 bg-[url('./assets/bg2.jpg')] bg-cover bg-center">
            
            
            <h1 className="text-white text-center pt-15 mb-3 text-3xl font-semibold">How can we help you?</h1>
            <p className="text-white text-xl font-semibold text-center">We’re here to help—reach out anytime with your questions or feedback!</p>
           
            <div className="contactUs flex flex-col ml-110  text-white">
                <form action="" className="text-white">
                    <input type="text" placeholder="Enter your name*" className="border rounded-lg p-2 w-80 mt-10" required/><br />
                    <input type="email" placeholder="Enter your email*" className="border rounded-lg p-2 w-80 mt-5" required/><br />
                    <input type="text" placeholder="Enter Mobile Number*" className="border rounded-lg p-2 w-80 mt-5" required/><br />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message" className="border rounded-lg p-2 w-80 h-40 mt-5" required></textarea><br />
                    <button type="submit" className="border mt-2 p-2 w-20 rounded-lg font-semibold border-gray-500 text-purple-500 hover:bg-purple-500 hover:text-white">Submit</button>
                    </form>
            </div>
           
           

            
        </div>
        
    );
    
}
export default ContactUs;