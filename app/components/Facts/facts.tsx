import Link from "next/link";

const Facts = () => {
    return (
        <>
            <div className="m-8 lg:m-0">
                <div className="bg-cover bg-center mt-36 flex flex-col items-center justify-center lg:w-[100%] h-[459px] bg-white rounded-2xl overflow-hidden shadow-lg bg-[url('/bg-facts.svg')] relative">
                    <div className="space-y-8">
                        <p className="text-center text-white text-[30px] lg:text-[42px] font-semibold text-[#FAFAFA]">&quot;Kota Satria&quot;</p>
                        <p className="text-center text-white text-[14px] lg:text-[20px] font-normal text-[#FAFAFA] max-w-[809px]">Purwokerto is the capital of Banyumas Regency in Central Java (Central Java). Like other cities in Indonesia, Purwokerto also has a nickname or slogan, namely Satria City.</p>
                        <Link href="/Facts">
                            <button className="flex items-center justify-center mt-8 lg:mt-8 mx-auto bg-white text-dark font-normal py-3 px-12 rounded-2xl">
                                See Facts
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Facts;