

const Kuliner = () => {
    return (
        <>
            <div className="m-8 lg:m-0">
                <div className=" bg-cover bg-center mt-36 lg:justify-center w-[100%] lg:w-[100%] h-[300px] lg:h-[459px] bg-white rounded-2xl overflow-hidden shadow-lg bg-[url('/mobile-kuliner.svg')] lg:bg-[url('/kuliner.svg')] relative">
                    <div className="flex flex-col m-4 lg:m-20">
                        <h5 className="text-[32px] lg:text-[42px] text-[#FAFAFA] font-semibold">Explore authentic taste of foods.</h5>
                        <p className="max-w-[672px] mt-4 text-[#FAFAFA] font-normal text-[16px] lg:text-[20px]">Embark on a culinary adventure in Purwokerto, where every bite is a symphony of authentic flavors. From the bold and spicy to the aromatic allure of local street food, the town&apos;s cuisine reflects its rich cultural heritage.</p>
                        <button className="bg-transparent mt-2 lg:mt-12 font-semibold py-2 w-[155px] border border-[#FAFAFA] rounded-3xl text-white">
                            Explore
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Kuliner;