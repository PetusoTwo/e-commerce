import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <Categories />
    </div>
  );
}
