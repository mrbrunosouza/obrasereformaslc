import { AboutUs } from "../Components/AboutUs";
import { FeaturedWork } from "../Components/FeaturedWork";
import { Main } from "../Components/Main";
import { MainServices } from "../Components/MainServices";
import { Quote } from "../Components/Quote";
import { SlideMain } from "../Components/SlideMain";

export default function Home() {
  return (
    <>
      <SlideMain />
      <Main />
      <Quote />
      <MainServices />
      <FeaturedWork />
      <AboutUs />
    </>
  )
}
