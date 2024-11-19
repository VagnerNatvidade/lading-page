import Button from "@/components/button";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="grid grid-cols-2 items-center w-full mt-20 px-40 relative z-10">
          <div className="w-[570px] z-10">
            <h1 className="text-6xl font-bold">
              Melhor agência de marketing do bairro
            </h1>
            <p className="mt-8 mb-16 text-xl opacity-85 ">
              Somos uma agência de performance digital, aceleramos vendas e
              aquisição de leads para grandes marcas.
            </p>
            <Button title="Aumentar vendas" />
          </div>

          <Image
            className="place-self-end"
            src="/leads.svg"
            alt="imagem de leads"
            width={535}
            height={383}
          />
        </div>

        <Image
          className="absolute w-full right-0 top-28 z-0"
          src="/bg-lines.svg"
          alt="desenho do background"
          width={0}
          height={0}
        />
      </main>
    </div>
  );
}
