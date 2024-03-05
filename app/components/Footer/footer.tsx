import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#F3F3F3]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="lg:flex lg:justify-between md:flex md:justify-between ">
                        <div className="mb-6 md:mb-0">
                            <a href="" className="flex items-center">
                                <Image src="/logo-purwokertoku.svg" alt="Footer" width={203.67} height={30.42} />
                            </a>
                            <p className="mt-4 text-[#333333] font-normal text-[14px] lg:text-[20px]">A place where culture and nature unite</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div className="lg:-ml-32">
                                <h2 className="mb-6 text-[12px] lg:text-[20px] font-semibold text-[#333333] ">Page</h2>
                                <ul className="space-y-2 text-[12px] lg:text-[18px] text-[#555555] font-normal">
                                    <li className="">
                                        <a href="" className="hover:underline">Home</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Place to go</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Traditional Foods</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Article Tips</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Facts</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="lg:-mr-20">
                                <h2 className="mb-6 text-[12px] lg:text-[20px] font-semibold text-[#333333]">Further Information</h2>
                                <ul className="text-[#555555] text-[12px] lg:text-[18px] font-normal space-y-2">
                                    <li>
                                        <a href="" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Health & Safety</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-[#999999] sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p className="font-light text-[#333333] text-[10px] lg:text-[14px]">Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147</p>
                        <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512"
                                    color="#515151">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>
                            <span className="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 576 512"
                                    color="#515151">
                                    <path
                                        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;