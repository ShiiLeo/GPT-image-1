import Faq from "@/components/faq";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Howitwork from "@/components/howitwork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPT Image 1 AI Generator with ChatGPT API",
  description:
    "With GPT Image 1, you can generate new images, edit photos, or remix your artwork by simply entering a prompt. Supports Studio Ghibli Style image generation",

  alternates: {
    canonical: "https://gptimage1.net/",
  },
};

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Feature></Feature>
      <Howitwork></Howitwork>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}
