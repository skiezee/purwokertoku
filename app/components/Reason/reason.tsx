import Image from "next/image"

const Reason = () => {
    return (
        <>
            <div className="m-8 lg:m-0">
                <div className="flex flex-col">
                    <div className="mx-auto text-[#333333] font-semibold text-[32px] lg:text-5xl text-center">Why You Should Visit Purwokerto?</div>
                    <div className="mx-auto text-[#555555] font-normal text-[18px] lg:text-2xl text-center mt-4">Top reason why you should visit Purwokerto to romanticizing the culture and nature</div>
                </div>
                <div className="flex flex-col items-center justify-center mt-24 mx-auto lg:flex lg:items-center lg:justify-center lg:grid lg:grid-cols-3 lg:gap-32">
                    <div className="mx-auto mb-8">
                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <Image src="/cheap.svg" width={50} height={50} alt="cheap logo" className="mx-auto mb-4"/>
                            <h5 className="mb-2 text-center text-2xl font-bold text-[#55555]">Cheap</h5>
                            <p className="font-normal text-center text-[#777777]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                    <div className="mx-auto mb-8">
                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <Image src="/transport.svg" width={50} height={50} alt="cheap logo" className="mx-auto mb-4"/>
                            <h5 className="mb-2 text-center text-2xl font-bold text-[#55555]">Easy Transportation</h5>
                            <p className="font-normal text-center text-[#777777]">Purwokerto is a city that is easy to reach. We can use land routes such as cars or trains.</p>
                        </div>
                    </div>
                    <div className="mx-auto mb-8">
                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <Image src="/weather.svg" width={50} height={50} alt="cheap logo" className="mx-auto mb-4"/>
                            <h5 className="mb-2 text-center text-2xl font-bold text-[#55555]">Cool Weather</h5>
                            <p className="font-normal text-center text-[#777777]">Purwokerto has cool, clean and fresh weather and air that makes anyone who visits it feel comfortable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reason