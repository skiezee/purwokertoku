import Image from "next/image"
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/footer"

const Facts = () => {
    return (
        <>
            <Navbar />
            <div className="bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('/bg-factss.svg')", width: "100%", height: "359px" }}>
                <div className="flex flex-col items-center justify-center mt-20">
                    <div className="text-[24px] lg:text-[48px] font-semibold text-white">
                        Facts About
                    </div>
                    <div className="text-[48px] lg:text-[96px] tracking-[0.03em] -mt-4 lg:-mt-8 font-semibold text-gray-100">
                        Purwokerto
                    </div>
                </div>
            </div>
            <div className="m-12 lg:m-32">
                <p className="text-justify font-light text-[16px] lg:text-[20px] text-[#555555]">Purwokerto is not an autonomous city but rather an area where the central government of Banyumas Regency is located, and de jure is still under the regional government of Banyumas Regency as the center of government. Purwokerto is divided into 4 sub-districts with 27 sub-districts. There is talk of forming the city of Purwokerto, which is separate from Banyumas Regency and becomes an autonomous region.</p>
                <p className="mt-16 text-justify font-light text-[16px] lg:text-[20px] text-[#555555]">If you look at its history, Purwokerto previously had the status of an Administrative City (&apos;Kotif&apos;), where several other Kotifs already had the status of a city with its own autonomy. Purwokerto is located south of Mount Slamet, which is the second highest mountain on the island of Java or the highest mountain in Central Java. Mount Slamet is a volcano that is still active and is the highest mountain in Central Java, making it known as a city that is quite cool, has very clean air and fertile soil. Geographically, Purwokerto is at an altitude of 71 to 286 m above sea level (average altitude 183.87 m above sea level) and is located at coordinates 7°26&apos;S 109°14&apos;E. Apart from that, Purwokerto is the center of government because it is the coordinating center for the West Central Java Bakorlin III region. Purwokerto borders Sokaraja where there is the Pelus River.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126604.26123959628!2d109.19733891199306!3d-7.422778560415696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655c3136423d1d%3A0x4027a76e352e4a0!2sPurwokerto%2C%20Banyumas%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1709637645947!5m2!1sen!2sid" width="100%" height="407" style={{ border:0, borderRadius:20, marginTop:94  }}  loading="lazy" ></iframe>
                <p className="mt-16 text-justify font-light text-[16px] lg:text-[20px] text-[#555555]">Historically, Purwokerto was not an industrial or trading city. Until now, industrial activity is rarely found in Purwokerto. It could be said that this city does not have large-scale industry that can absorb thousands of workers or cover an area of ​​tens of hectares. If there are any industries, they are generally traditional industries that only employ tens of workers, such as the home cigarette industry, dry noodle or vermicelli industry, small-scale milk processing factories, metal equipment industries, and the souvenir industry which is only busy during the Eid season. . Purwokerto does not have large-scale trading activities and there is no warehousing area that can store thousands of cubic meters of commodities. In short, previously this city was not an industrial and trading city at all.</p>
                <Image src="/weather-dummy.svg" alt="Weather" width={1271} height={243} className="mt-12 lg:mt-24 lg:w-[100%]"/>
                <div className="text-[32px] lg:text-5xl text-[#333333] font-semibold mt-12 lg:mt-24">Purwokerto City Side</div>
                <Image src="/purwokerto-city-side.svg" alt="Weather" width={1271} height={243} className="mt-6 lg:mt-12 lg:w-[100%]"/>
            </div>
            <Footer/>
        </>
    )
}

export default Facts;