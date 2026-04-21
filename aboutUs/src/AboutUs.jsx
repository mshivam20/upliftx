import React from "react";

function AboutUs() {
  return (
    <div>
        
        <div className="head h-100 bg-[url('./assets/team.jpg')]  bg-cover flex items-center justify-center">
        <div className=" absolute h-100 inset-0 bg-black opacity-60"></div>
        <h1 className=" relative text-white font-bold text-3xl">Driven by purpose, powered by passion.</h1>
        </div>

        <div className="info mt-10 mx-10">
            <h1 className="text-3xl font-bold">About Us</h1>
            <div className="mt-10 flex w-250 ml-20  "><p className="w-160 text-justify">
                At <span className="font-bold">UpliftX</span>, we’re redefining how events come to life by connecting them with the right people at the right time. Founded by a group of passionate college students, what began as a small initiative has quickly grown into a dynamic event management startup trusted by many. We specialize in providing reliable and skilled manpower for a wide range of event roles, ensuring every detail runs smoothly. With a strong focus on professionalism, satisfaction, and quality service, UpliftX is committed to supporting events of all sizes while creating meaningful opportunities for individuals. As we continue to grow, our mission remains simple—uplift every event experience through dedicated people and seamless execution.
            </p>
            <img src="./src//assets/image.png" alt="" className=" w-90 ml-25 rounded-md" />
            </div>

            <div className="mt-20 flex w-250 ml-20 mb-30">
                <img src="./src//assets/image2.jpg" alt="" className="w-90 mr-25 rounded-md" />
                <p className="w-160 text-justify ml-10">
                    At UpliftX, our journey is just getting started. As we continue to scale, our focus is on expanding our network of trained volunteers and extending our services to new cities and larger events. We aim to become a go-to platform for event manpower, setting benchmarks in reliability, efficiency, and professionalism. With clear goals to partner with major event organizers, improve training standards, and leverage technology for seamless coordination, we are building a future where managing event staffing is effortless. Our vision is to grow UpliftX into a trusted name nationwide, empowering both event organizers and young individuals looking for meaningful opportunities.

                </p>
            </div>
            
        </div>
       
      
    </div>
  );
}
export default AboutUs;