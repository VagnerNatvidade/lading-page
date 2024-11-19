import Button from "@/components/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-40 px-40">
        <div className="w-[550px]">
          <h1 className="text-5xl font-bold">
            Melhor agência de marketing do bairro
          </h1>
          <p className="my-8 text-xl opacity-85 ">
            Somos uma agência de performance digital, aceleramos vendas e
            aquisição de leads para grandes marcas.
          </p>
          <Button title="Aumentar vendas" />
        </div>
      </main>
    </div>
  );
}
