import Button from "@/components/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-40 px-8">
        <div className="w-[800px]">
          <h1 className="text-7xl font-bold">
            Melhor agência de marketing do bairro
          </h1>
          <p className="my-8 text-3xl opacity-85 ">
            Somos uma agência de performance digital, aceleramos vendas e
            aquisição de leads para grandes marcas.
          </p>
          <div className="w-max rounded-sm bg-white text-primary font-bold">
            <Button title="Aumentar vendas" />
          </div>
        </div>
      </main>
    </div>
  );
}
