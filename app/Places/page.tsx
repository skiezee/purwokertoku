'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Header/navbar';

const Places = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [noResults, setNoResults] = useState(false);

    const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
        setNoResults(false);
    };

    const filteredPlaces = PLACES_DATA.filter((place) => {
        return place.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    useEffect(() => {
        if (filteredPlaces.length === 0 && searchTerm !== '') {
            setNoResults(true); // Jika tidak ada hasil, atur state noResults menjadi true
        } else {
            setNoResults(false); // Jika ada hasil, atur state noResults menjadi false
        }
    }, [filteredPlaces, searchTerm]);

    // Mengatur pesan toast untuk ditampilkan jika tidak ada hasil yang ditemukan
    useEffect(() => {
        if (noResults) {
            toast.error("Apa yang anda cari tidak ada");
        }
    }, [noResults]);

    return (
        <>
         <Navbar />
            <div className="bg-cover bg-center flex flex-col items-center justify-center h-screen" style={{ backgroundImage: "url('/bg-jenggala.svg')" }}>
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[24px] lg:text-5xl font-semibold text-white">
                        Beautiful Place
                    </div>
                    <div className="text-[48px] lg:text-8xl text-center tracking-[0.03em] font-semibold text-gray-100">
                        in Purwokerto.
                    </div>
                    <div className="text-[20px] lg:text-[28px] text-center font-normal text-white lg:mt-12">
                        Explore beautiful place to refresh your soul and mind.
                    </div>
                </div>
            </div>
        <div className="m-12 lg:m-24">
            <div className="pt-2 relative mx-auto text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-[100%] rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid lg:grid-cols-2 lg:gap-12 ">
                
            {filteredPlaces.map((place, index) => (
                    <div key={index} className="relative lg:w-[100%] bg-white rounded-2xl overflow-hidden shadow-lg">
                        <Image src={place.image} alt={place.name} className="w-full" width={626} height={653} />
                        <div className="flex flex-row justify-between items-center px-6 py-8">
                            <div className="font-bold mb-2 flex-col">
                                <p className="text-lg text-[#333333] font-semibold">{place.name}</p>
                                <p className="text-sm text-[#555555] font-normal">{place.location}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Link href={place.link}>
                                    <Image src="/arrow.svg" alt="arrow" width={20} height={20} className="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
        <Footer/>
        </>
    );
};

export default Places;

const PLACES_DATA = [
    {
        name: 'Curug Bayan',
        location: 'Ketenger, Baturraden',
        image: '/curug-bayan.svg',
        link: ''
    },
    {
        name: 'Curug Telu',
        location: 'Karangsalam, Baturraden',
        image: '/curug-telu.svg',
        link: ''
    },
    {
        name: 'Curug Jenggala',
        location: 'Ketenger, Baturraden',
        image: '/curug-jenggala.svg',
        link: ''
    },
    {
        name: 'Menara Pandang',
        location: 'Purwokerto Timur',
        image: '/menara-pandang.svg',
        link: ''
    },
    {
        name: 'Hutan Pinus Limpakuwus',
        location: 'Sumbang, Baturraden',
        image: '/limpa.svg',
        link: ''
    },
    {
        name: 'CAUB ( Camp Area Umbul Bengkok )',
        location: 'Karangsalam, Baturraden',
        image: '/caub.svg',
        link: ''
    },
    {
        name: 'The Village',
        location: 'Rempoah, Baturraden',
        image: '/tv.svg',
        link: ''
    },
    {
        name: 'Taman Mas Kemambang',
        location: 'Purwokerto Utara',
        image: '/mas-kemambang.svg',
        link: ''
    },
];
