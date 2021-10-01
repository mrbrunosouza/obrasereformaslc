import { AboutUs } from "../Components/AboutUs";
import { FeaturedWork } from "../Components/FeaturedWork";
import { Main } from "../Components/Main";
import { MainServices } from "../Components/MainServices";
import { Testimonials } from "../Components/Testimonials";
import { Quote } from "../Components/Quote";
import { SlideMain } from "../Components/SlideMain";
import { CompanyFacts } from "../Components/CompanyFacts";
import { Footer } from "../Components/Footer";

export default function Home() {
  return (
    <>
      <SlideMain />
      <Main />
      <Quote />
      <MainServices />
      {/* <FeaturedWork /> */}
      <AboutUs />
      <CompanyFacts />
      <Testimonials />
      <Footer />
    </>
  )
}
