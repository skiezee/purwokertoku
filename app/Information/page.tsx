import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/footer"
import Things from "../components/Things/thingsToKnow"
import Image from "next/image"

const Information = () => {
    return (
        <>
            <Navbar />
            <div className="bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('/bg-information.svg')", width: "100%", height: "359px" }}>
                <div className="flex flex-col items-center justify-center mt-20">
                    <div className="text-[24px] lg:text-[48px] font-semibold text-white">
                        Things to know to go
                    </div>
                    <div className="text-[48px] lg:text-[96px] tracking-[0.03em] -mt-4 lg:-mt-8 font-semibold text-gray-100">
                        to Purwokerto.
                    </div>
                </div>
            </div>
            <div className=" lg:m-32">
                <Things/>
            </div>

            <Footer/>
        </>
    )
}

export default Information