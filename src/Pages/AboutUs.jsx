import HomeLayout from "../Layouts/HomeLayout"
import aboutMainImage from "../Assets/Images/aboutMainImage.png"

function AboutUs(){

    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide to Affordable and quality education to the world.
                            We are providing the platfrom for the aspiring teachers and students to share 
                             their skills, creativity and knowledge to each other to empower and contribute 
                            in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img 
                        alt="About main imag"
                        src={aboutMainImage}

                        />
                    </div>
                </div>

                <div className="carosel m-auto w-1/2 my-16">
                    
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs;