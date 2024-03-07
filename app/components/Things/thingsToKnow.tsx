import Image from "next/image";

const Things = () => {
    return(
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-48 m-8 lg:m-0">
                <div className="flex flex-col">
                    <p className="font-semibold text-[32px] lg:text-[36px] text-[#333333]">Things To Know</p>
                    <p className="font-normal text-[16px] text-[#555555]">Important things to know when you visit Purwokerto</p>
                    <Image src="/train.svg" alt="Train" width={483} height={332} className="mt-[70px] hidden lg:block"/>
                    <Image src="/bg-full-train.svg" alt="Train" width={483} height={332} className=" mt-8 lg:hidden w-[100%]"/>
                </div>
                <Image src="/line.svg" alt="Line" width={1} height={474} className="hidden lg:block"/>
                <div className="flex flex-col space-y-16 mt-12 lg:mt-0">
                    <div className="">
                        <p className="font-medium text-[16px] text-[#333333]">Transpostation</p>
                        <p className="font-light text-[16px] text-[#555555] max-w-[680px]">Ensure a seamless journey to Purwokerto by planning your transportation in advance. Whether you choose to travel by car, train, or bus, be aware of the available options and their schedules. If flying, consider the nearest airports and the subsequent transportation to Purwokerto.</p>
                    </div>
                    <div className="">
                        <p className="font-medium text-[16px] text-[#333333]">Cost Estimation</p>
                        <p className="font-light text-[16px] text-[#555555] max-w-[680px]">Before embarking on your trip, it&apos;s essential to have a clear understanding of your budget. Calculate estimated expenses for accommodation, meals, transportation, and any planned activities. This financial preparation ensures you can make the most of your time in Purwokerto without worrying about unexpected costs.</p>
                    </div>
                    <div className="">
                        <p className="font-medium text-[16px] text-[#333333]">Weather and Attire</p>
                        <p className="font-light text-[16px] text-[#555555] max-w-[680px]">Familiarize yourself with Purwokerto&apos;s weather conditions during your planned visit. Check the seasonal forecasts to pack appropriate clothing, ensuring comfort throughout your stay. Whether it the rainy season or a period of higher temperatures, being prepared will enhance your overall experience.</p>
                    </div>
                </div>
            </div>

            <Image src="/weather-dummy.svg" alt="Weather" width={1271} height={243} className="mt-24 lg:w-[100%] hidden lg:block"/>
            <Image src="/mobile-weather.svg" alt="Weather" width={680} height={243} className="mt-12 m-8 lg:mt-24 w-[80%] lg:w-[100%] block lg:hidden"/>
        </>
    )
}

export default Things;