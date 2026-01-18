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
      <section className="mb-24"> <Banner /></section>
      <section className="mb-24"><FeatureBooks/></section>
      <section className="mb-24"><Feature/></section>
      <section className="mb-24"><Categories/></section>
      <section className="mb-24"><HowWorks/></section>
      <section className="mb-24"><Testimonials/></section>
      <section className="mb-24"><CTA/></section>
    </div>
  );
}
