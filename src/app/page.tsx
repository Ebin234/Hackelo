import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Featured />
      </main>
      <Footer />
    </>
  );
}
