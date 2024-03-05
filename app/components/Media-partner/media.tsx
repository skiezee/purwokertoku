import Image from "next/image";

const MediaPartner = () => {
    return(
        <>
            <div className="mt-40 mb-56">
                <p className="font-semibold text-[#333333] text-[36px] text-center">Our Media Partner</p>
                <div className="flex flex-col lg:flex-row lg:justify-between mx-auto mt-12 space-y-12 lg:space-y-0">
                    <Image src="/Frame 66.svg" alt="Pemerintah" width={84.1} height={87} className="h-[55px] lg:h-[87px] mx-auto"/>
                    <Image src="/Frame 67.svg" alt="Better Banyumas" width={173} height={87} className="h-[55px] lg:h-[87px] mx-auto"/>
                    <Image src="/Frame 68.svg" alt="Kominfo" width={87} height={87} className="h-[55px] lg:h-[87px] mx-auto"/>
                    <Image src="/Frame 69.svg" alt="IT Telkom Purwokerto" width={303.2} height={87} className="h-[55px]  lg:h-[87px] mx-auto"/>
                </div>
            </div>
        </>
    )
}

export default MediaPartner;