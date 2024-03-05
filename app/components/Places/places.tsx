import Image from "next/image";
import Link from "next/link";

const Places = () => {
    return (
        <>
            <div className="flex flex-col mt-8 lg:mt-48 m-8 lg:m-0">
                <div className="flex flex-row justify-between">
                    <div className="text-[32px] lg:text-5xl text-[#333333] font-semibold">Places to go</div>
                    <button className="bg-transparent text-[14px] font-semibold lg:py-2 px-4 lg:px-8 border border-[#000000] rounded-xl lg:rounded-3xl">
                        See all
                    </button>
                </div>
                <div className="mt-4 text-[#555555] text-[18px] lg:text-xl font-normal">Explore beautiful place to refresh your soul and mind.</div>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className="relative lg:w-[100%] bg-white rounded-2xl overflow-hidden shadow-lg">
                        <Image src="/curug-bayan.svg" alt="Curug Bayan" className="w-full" width={303} height={359} />
                        <div className="flex flex-row justify-between items-center px-6 py-8">
                            <div className="font-bold mb-2 flex-col">
                                <p className="text-lg text-[#333333] font-semibold">Curug Bayan</p>
                                <p className="text-sm text-[#555555] font-normal">Ketenger, Baturraden</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Link href={""}>
                                    <Image src="/arrow.svg" alt="arrow" width={20} height={20} className="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:w-[100%] bg-white rounded-2xl overflow-hidden shadow-lg">
                        <Image src="/curug-telu.svg" alt="Curug Telu" className="w-full" width={303} height={359} />
                        <div className="flex flex-row justify-between items-center px-6 py-8">
                            <div className="font-bold mb-2 flex-col">
                                <p className="text-lg text-[#333333] font-semibold">Curug Telu</p>
                                <p className="text-sm text-[#555555] font-normal">Karangsalam, Baturraden</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Link href={""}>
                                    <Image src="/arrow.svg" alt="arrow" width={20} height={20} className="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:w-[100%] bg-white rounded-2xl overflow-hidden shadow-lg">
                        <Image src="/curug-jenggala.svg" alt="Curug Jenggala" className="w-full" width={303} height={359} />
                        <div className="flex flex-row justify-between items-center px-6 py-8">
                            <div className="font-bold mb-2 flex-col">
                                <p className="text-lg text-[#333333] font-semibold">Curug Jenggala</p>
                                <p className="text-sm text-[#555555] font-normal">Ketenger, Baturraden</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Link href={""}>
                                    <Image src="/arrow.svg" alt="arrow" width={20} height={20} className="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:w-[100%] bg-white rounded-2xl overflow-hidden shadow-lg">
                        <Image src="/menara-pandang.svg" alt="Menara Pandang" className="w-full" width={303} height={359} />
                        <div className="flex flex-row justify-between items-center px-6 py-8">
                            <div className="font-bold mb-2 flex-col">
                                <p className="text-lg text-[#333333] font-semibold">Menara Pandang</p>
                                <p className="text-sm text-[#555555] font-normal">Purwokerto Timur</p>
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
        </>
    )
}

export default Places;