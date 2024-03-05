/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Navbar from "../components/Header/navbar"
import Footer from "../components/Footer/footer"

const TraditionalFood = () => {
    return (
        <>
            <Navbar />
            <div className="bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('/bg-traditional-food.svg')", width: "100%", height: "359px" }}>
                <div className="flex flex-col items-center justify-center mt-20">
                    <div className="text-[18px] lg:text-[48px] font-semibold text-white">
                        Explore Authentic Taste of Foods
                    </div>
                    <div className="text-[36px] lg:text-[96px] tracking-[0.03em] lg:-mt-8 font-semibold text-gray-100">
                        in Purwokerto.
                    </div>
                </div>
            </div>
            <div className="m-12 lg:m-32">
                <p className="mt-16 text-justify font-light text-[16px] lg:text-[20px] text-[#555555]">Typical Purwokerto Banyumas food is a must try when visiting this area. Purwokerto is the capital of Banyumas Regency which has a variety of cultures and interesting destinations. This area, which is famous for its garrulous accent, has unique culinary delights that are worth trying. Typical Purwokerto Banyumas food can be found easily in every corner of the city. This typical Purwokerto Banyumas food has become an identity for Banyumas Regency.</p>


                <div className="space-y-8 hidden lg:block lg:mt-24">
                    <div className="flex lg:w-[100%] items-start  lg:justify-between p-[30px] relative rounded-[20px] border border-solid border-[#c4c4c4]">
                        <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-SemiBold',Helvetica] font-semibold text-[#333333] text-[36px] tracking-[1.08px] leading-[normal] whitespace-nowrap">
                                Mendoan
                            </div>
                            <img className="relative w-[483px] h-[332px] object-cover" alt="Image" src="mendoan.svg" />
                        </div>
                        <img className="relative w-[2px] h-[410px] object-cover" alt="Line" src="Line 2.svg" />
                        <div className="flex flex-col w-[618px] items-start gap-[30px] relative">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[27.2px]">
                                Mendoan (mêndoan) is a type of fried snack made from tempeh coated in flour and green onions and then cooked
                                half-cooked. The word mendoan itself comes from Javanese, namely mendo, which means half-cooked or soft.
                                Mendoan is a traditional Javanese snack typical of the former Banyumas Residency (Banyumas Raya). This snack
                                comes from Banyumas Regency, Central Java, and can be found in stalls in various areas, especially in Banyumas
                                Regency, Cilacap Regency, Banjarnegara Regency, Purbalingga Regency, and Kebumen Regency.
                            </p>
                            <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                    Legendary Places :
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img
                                            className="relative w-[23px] h-[23px]"
                                            alt="Material symbols"
                                            src="location.svg"
                                        />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            ECO 21
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Jalur Gumilir - Purwokerto, Sawangan, Kedungwuluh, Kec. Purwokerto Barat
                                    </p>
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img className="relative w-[23px] h-[23px]" alt="Material symbols" src="location.svg" />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            Sawangan
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Jalur Gumilir - Purwokerto, Sawangan, Kedungwuluh, Kec. Purwokerto Barat
                                    </p>
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img
                                            className="relative w-[23px] h-[23px]"
                                            alt="Material symbols"
                                            src="location.svg"
                                        />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            Mendoan Mirasa
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Jalur Gumilir - Purwokerto, Sawangan, Kedungwuluh, Kec. Purwokerto Barat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[100%] items-start justify-between p-[30px] relative rounded-[20px] border border-solid border-[#c4c4c4]">
                        <div className="flex flex-col w-[618px] items-start gap-[30px] relative">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[27.2px]">
                                Empal kupat is one of Purwokerto&apos;s typical culinary delights that culinary connoisseurs must try. This dish consists of beef cooked with spices and served with ketupat wrapped in young coconut leaves. Empal kupat has a rich, savory and spicy taste, as well as a soft and crunchy texture. Empal kupat Purwokerto is a typical culinary dish that is worth trying for anyone visiting Purwokerto. Empal Kupat Purwokerto offers an unforgettable culinary experience.
                            </p>
                            <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                    Legendary Places :
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img
                                            className="relative w-[23px] h-[23px]"
                                            alt="Material symbols"
                                            src="location.svg"
                                        />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            Kedai Keong Bu Lani
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Gang 2 No.7A, Purwokerto Lor, Purwokerto Timur, Kauman Lama, Purwokerto Lor
                                    </p>
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img className="relative w-[23px] h-[23px]" alt="Material symbols" src="location.svg" />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            Keong Kraca &quot;Bu Makmoer&quot;
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Jl. Bobosan Desa, RT.06/RW.01, Karangjambu, Purwanegara, Kec. Purwokerto Utara
                                    </p>
                                </div>

                            </div>
                        </div>
                        <img className="relative w-[2px] h-[410px] object-cover" alt="Line" src="Line 2.svg" />

                        <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-SemiBold',Helvetica] font-semibold text-[#333333] text-[36px] tracking-[1.08px] leading-[normal] whitespace-nowrap">
                                Empal Kupat
                            </div>
                            <img className="relative w-[483px] h-[332px] object-cover" alt="Image" src="empal.svg" />
                        </div>
                    </div>

                    <div className="flex w-[100%] items-start justify-between p-[30px] relative rounded-[20px] border border-solid border-[#c4c4c4]">
                        <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-SemiBold',Helvetica] font-semibold text-[#333333] text-[36px] tracking-[1.08px] leading-[normal] whitespace-nowrap">
                                Nopia
                            </div>
                            <img className="relative w-[483px] h-[332px] object-cover" alt="Image" src="nopia.svg" />
                        </div>
                        <img className="relative w-[2px] h-[410px] object-cover" alt="Line" src="Line 2.svg" />
                        <div className="flex flex-col w-[618px] items-start gap-[30px] relative">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[27.2px]">
                                Nopia is a food made from wheat flour dough filled with brown sugar and baked in a special oven made of clay and using firewood from coconut tree fronds. It has a hard and crunchy skin texture filled with brown sugar mixture with the taste of fried shallots. Many are produced in the cities of Purbalingga and Banyumas (18 kilometers southeast of Purwokerto City). Apart from Nopia, there is also Mino, aka mini nopia or small sized nopia.
                            </p>
                            <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                    Legendary Places :
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img
                                            className="relative w-[23px] h-[23px]"
                                            alt="Material symbols"
                                            src="location.svg"
                                        />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            Nopia & Mino Pak Narwan
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Jl. Jaya Sirayu No.88, RT.03/RW.04, Lor, Pekunden                                    </p>
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img className="relative w-[23px] h-[23px]" alt="Material symbols" src="location.svg" />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            ECO 21
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Jalur Gumilir - Purwokerto, Sawangan, Kedungwuluh, Kec. Purwokerto Barat                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex w-[100%] items-start justify-between p-[30px] relative rounded-[20px] border border-solid border-[#c4c4c4]">
                        <div className="flex flex-col w-[618px] items-start gap-[30px] relative">
                            <p className="relative self-stretch mt-[-1.00px] [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[27.2px]">
                                Typical dishes during Ramadan are always found in all regions. Residents of Purwokerto, Banyumas Regency, Central Java, like spicy cooked rice snails or called kraca, as a snack during the fasting month. The distinctive chewy taste of snail meat, combined with spicy spices and the aroma of spices, makes kraca legendary. Kraca is rice snails cooked with a mixture of spices such as galangal, lemongrass, onions, and of course red chilies for a spicy taste. Cooked for approximately three hours, the distinctive savory aroma of spices emerges and is guaranteed to make you gulp.                            </p>
                            <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                    Legendary Places :
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img
                                            className="relative w-[23px] h-[23px]"
                                            alt="Material symbols"
                                            src="location.svg"
                                        />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            Kedai Keong Bu Lani
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Gang 2 No.7A, Purwokerto Lor, Purwokerto Timur, Kauman Lama, Purwokerto Lor                                    </p>
                                </div>
                                <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                    <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                        <img className="relative w-[23px] h-[23px]" alt="Material symbols" src="location.svg" />
                                        <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                            Keong Kraca &quot;Bu Makmoer&quot;
                                        </div>
                                    </div>
                                    <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Jl. Bobosan Desa, RT.06/RW.01, Karangjambu, Purwanegara, Kec. Purwokerto Utara
                                    </p>
                                </div>

                            </div>
                        </div>
                        <img className="relative w-[2px] h-[410px] object-cover" alt="Line" src="Line 2.svg" />

                        <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-SemiBold',Helvetica] font-semibold text-[#333333] text-[36px] tracking-[1.08px] leading-[normal] whitespace-nowrap">
                                Kraca
                            </div>
                            <img className="relative w-[483px] h-[332px] object-cover" alt="Image" src="kraca.svg" />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col w-[680px] items-start gap-[54px] p-[30px] relative rounded-[20px] border border-solid border-[#c4c4c4] mt-12 block lg:hidden">
                    <div className="flex flex-col items-start gap-[35px] self-stretch w-full relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-SemiBold',Helvetica] font-semibold text-[#333333] text-[36px] tracking-[1.08px] leading-[normal] whitespace-nowrap">
                            Mendoan
                        </div>
                        <img className="relative w-[100%] rounded-xl lg:w-[620px] h-[332px] object-cover" alt="Image" src="mendoan.svg" />
                    </div>
                    <img className="relative self-stretch w-full h-px object-cover" alt="Line" src="line-2.svg" />
                    <div className="flex flex-col w-[618px] items-start gap-[30px] relative flex-[0_0_auto]">
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[27.2px]">
                            Mendoan (mêndoan) is a type of fried snack made from tempeh coated in flour and green onions and then cooked
                            half-cooked. The word mendoan itself comes from Javanese, namely mendo, which means half-cooked or soft.
                            Mendoan is a traditional Javanese snack typical of the former Banyumas Residency (Banyumas Raya). This snack
                            comes from Banyumas Regency, Central Java, and can be found in stalls in various areas, especially in Banyumas
                            Regency, Cilacap Regency, Banjarnegara Regency, Purbalingga Regency, and Kebumen Regency.
                        </p>
                        <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                Legendary Places :
                            </div>
                            <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                    <img
                                        className="relative w-[23px] h-[23px]"
                                        alt="Material symbols"
                                        src="location.svg"
                                    />
                                    <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        ECO 21
                                    </div>
                                </div>
                                <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                    Jalur Gumilir - Purwokerto, Sawangan, Kedungwuluh, Kec. Purwokerto Barat
                                </p>
                            </div>
                            <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                    <img className="relative w-[23px] h-[23px]" alt="Material symbols" src="location.svg" />
                                    <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Sawangan
                                    </div>
                                </div>
                                <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                    Jalur Gumilir - Purwokerto, Sawangan, Kedungwuluh, Kec. Purwokerto Barat
                                </p>
                            </div>
                            <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
                                <div className="inline-flex items-end justify-center gap-[7px] relative flex-[0_0_auto]">
                                    <img
                                        className="relative w-[23px] h-[23px]"
                                        alt="Material symbols"
                                        src="location.svg"
                                    />
                                    <div className="relative w-fit [font-family:'Cina_GEO_Test-Medium',Helvetica] font-medium text-[#333333] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                        Mendoan Mirasa
                                    </div>
                                </div>
                                <p className="relative w-fit [font-family:'Cina_GEO_Test-Light',Helvetica] font-light text-[#555555] text-[16px] tracking-[0.48px] leading-[normal] whitespace-nowrap">
                                    Jalur Gumilir - Purwokerto, Sawangan, Kedungwuluh, Kec. Purwokerto Barat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TraditionalFood;