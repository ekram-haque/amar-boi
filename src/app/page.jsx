import Image from "next/image";
import Banner from "@/components/home/Banner";
import Feature from "@/components/home/Feature";
import FeatureBooks from "@/components/home/FeatureBooks";
import Categories from "@/components/home/Categories";
import HowWorks from "@/components/home/HowWorks";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="">
      <section className="mb-10"> <Banner /></section>
      <section className="mb-10"><FeatureBooks/></section>
      <section className="mb-10"><Feature/></section>
      <section className="mb-10"><Categories/></section>
      <section className="mb-10"><HowWorks/></section>
      <section className="mb-10"><Testimonials/></section>
      <section className="mb-10"><CTA/></section>
    </div>
  );
}
