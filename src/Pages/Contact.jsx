import HomeLayout from "../Layouts/HomeLayout"

function Contact() {
    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">

                <form className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">
                    <h1 className="text-3xl font-semibold">Contat form</h1>


                    {/* name  */}
                    <div className="flex flex-col w-full gap-1">
                        <lable htmlFor="name" className="text-xl font-semibold">Name</lable>
                        <input type="text" className="bg-transparent py-1 px-2 border " placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="" className="text-xl font-semibold">Email</label>
                        <input type="email" className="bg-transparent border px-2 py-1 font-semibold" placeholder="Enter your email"/>
                    </div>


                    {/* Message-Box*/}

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="" className="text-xl font-semibold">Message</label>

                        <textarea name="message" id="message" className=" bg-transparent border px-2 py-1 rounded-sm resize-none h-40" placeholder="Enter Your Message"></textarea>
                    </div>


                    {/* Submit-btn */}
                    <button className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold test-lg cursor-pointer">Submit</button>

                
                </form>
            </div>
        </HomeLayout>
    )
}
export default Contact