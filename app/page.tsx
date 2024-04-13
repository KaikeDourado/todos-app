'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Home() {
  return (
    <main className="bg-[#09172C] ">
            <header className="text-[E7C7A1]">
           


                <section className="text-2xl h-auto bg-black text-[#E7C7A1] pt-36 py-44 justify-center text-center">
                    <h4 className="">O QUE É O STUDIO TAILINE?</h4>
                    <p className="text-white text-sm mt-6">O Studio Tailene é um local especializado em design
                        de sobrancelhas e personalização de sobrancelhas.</p>

                    <button className="ml-auto mr-auto w-36 p-3 border-solid border-2 hover:bg-[#E7C7A1] hover:text-[#09172C] transition-all  border-[#E7C7A1] text-sm  mt-6">SAIBA MAIS</button>
                </section>
            </header>

            <section className="bg-[#09172C] py-20 pt-20 ">



                <h2 className="my-10 text-center text-2xl  text-[#E7C7A1]">SERVIÇOS OFERECIDOS</h2>
                <div className="flex flex-wrap gap-16 justify-center">

                    <div className="pl-24 pr-24 pt-12 py-12 bg-[#E7C7A1] text-center">
                        <h5 className="text-2xl font-bold">SOBRANCELHAS</h5>
                        <p className="text-sm mt-3 font-light">FEMININO / MASCULINA</p>
                        <p className="text-sm mt-3 font-light">DESIGN PERSONALIZADO</p>
                        <p className="text-sm mt-3 font-light">SIMPLES</p>
                        <p className="text-sm mt-3 font-light">COM HENNA</p>
                        <p className="text-sm mt-3 font-light">COM COLORAÇÃO</p>
                        <button className="border-solid border-2 font-semibold border-[#09172C] pl-7 pr-7 p-2 mt-8 hover:bg-black transition-colors hover:text-[#E7C7A1]"> SAIBA MAIS </button>
                    </div>


                    <div className="pl-24 pr-24 pt-12 py-16 bg-[#E7C7A1] text-center">
                        <h5 className="text-2xl font-bold">BROW LAMINATION</h5>
                        <p className="text-sm mt-10 font-light uppercase ">Técnica utilizada para </p>
                        <p className="text-sm mt-1 font-light uppercase ">estilizar os fios, deixando </p>
                        <p className="text-sm mt-1 font-light uppercase ">as sobrancelhas mais</p>
                        <p className="text-sm mt-1 font-light uppercase ">volumosas e disfarçando</p>
                        <p className="text-sm mt-1 font-light uppercase ">possíveis falhas</p>
                        <button className="border-solid border-2 font-semibold border-[#09172C] pl-7 pr-7 p-2 mt-8 hover:bg-black transition-colors hover:text-[#E7C7A1]"> SAIBA MAIS </button>    </div>



                    <div className="pl-24 pr-24 pt-12 py-16 bg-[#E7C7A1] text-center">
                        <h5 className="text-2xl font-bold">SOBRANCELHAS</h5>
                        <p className="text-sm mt-3 font-light">FEMININO / MASCULINA</p>
                        <p className="text-sm mt-3 font-light">DESIGN PERSONALIZADO</p>
                        <p className="text-sm mt-3 font-light">SIMPLES</p>
                        <p className="text-sm mt-3 font-light">COM HENNA</p>
                        <p className="text-sm mt-3 font-light">COM COLORAÇÃO</p>
                        <button className="border-solid border-2 font-semibold border-[#09172C] pl-7 pr-7 p-2 mt-8 hover:bg-black transition-colors hover:text-[#E7C7A1]"> SAIBA MAIS </button>
                    </div>


                </div>

            </section>



        </main>
  )
}
