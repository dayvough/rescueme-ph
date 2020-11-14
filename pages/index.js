import RescueForm from "components/RescueForm";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <RescueForm />
      </main>

      <footer className=""></footer>
    </div>
  );
}
