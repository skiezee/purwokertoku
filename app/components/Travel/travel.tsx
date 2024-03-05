import Image from "next/image";
import Link from "next/link";

const Travel = () => {
    return (
        <>
            <div className="lg:mt-40 m-8 lg:m-0">
                <div className="text-[32px] lg:text-5xl text-[#333333] font-semibold">Top Travel Stories about Purwokerto</div>
                <div className="mt-2 lg:mt-4 text-[#555555] text-[18px] lg:text-xl font-normal">Read top travel stories about Purwokerto</div>

                <div className="flex flex-col lg:flex-row lg:justify-between mt-12 space-y-8 lg:space-y-0 lg:space-x-4">
                    <div className="relative lg:w-[626px] lg:h-[653px] bg-white rounded-2xl overflow-hidden shadow-lg">
                        <Image src="/batur.svg" alt="Wisata Baturraden" className="w-full" width={303} height={359} />
                        <div className="flex flex-row justify-between items-center px-6 py-12">
                            <div className="font-bold mb-2 flex-col">
                                <p className="text-lg text-[#333333] font-semibold">Mengeksplore Alam Baturaden</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Link href={""}>
                                    <Image src="/arrow.svg" alt="arrow" width={20} height={20} className="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-[20px]">
                        <div className="relative lg:w-[626px] lg:h-[316.5px] bg-white rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/air-mancur.svg" alt="Air Mancur" className="w-full" width={303} height={359} />
                            <div className="flex flex-row justify-between items-center px-6 py-8">
                                <div className="font-bold mb-2 flex-col">
                                    <p className="text-lg text-[#333333] font-semibold">Wisata Air Mancur Baturaden</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <Link href={""}>
                                        <Image src="/arrow.svg" alt="arrow" width={20} height={20} className="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative lg:w-[626px] lg:h-[316.5px] bg-white rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/empal-kupat.svg" alt="Makanan Legendaris" className="w-full" width={303} height={359} />
                            <div className="flex flex-row justify-between items-center px-6 py-8">
                                <div className="font-bold mb-2 flex-col">
                                    <p className="text-lg text-[#333333] font-semibold">Empal Kupat, Kuliner Legendaris Purwokerto</p>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <Link href={""}>
                                        <Image src="/arrow.svg" alt="arrow" width={20} height={20} className="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Travel;