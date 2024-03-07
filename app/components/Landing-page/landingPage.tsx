import Link from "next/link"

const LandingPage = () => {
    return (
        <div className="bg-cover bg-center flex flex-col items-center justify-center h-screen" style={{ backgroundImage: "url('/landing-image.svg')" }}>
            <div className="flex flex-col items-center justify-center">
                <div className="text-[24px] lg:text-5xl font-semibold text-white">
                    Explore the sights
                </div>
                <div className="text-[48px] lg:text-8xl tracking-[0.03em] font-semibold text-gray-100">
                    of Purwokerto.
                </div>
                <div className="text-[20px] lg:text-[28px] font-normal text-white mt-4 lg:mt-12">
                    A place where culture and nature unite
                </div>
                <Link href='/#Reason'>
                    <button className="flex items-center justify-center mx-auto mt-8 lg:mt-16 bg-white text-dark font-semibold py-3 px-12 rounded-2xl">
                        Start Explore
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
