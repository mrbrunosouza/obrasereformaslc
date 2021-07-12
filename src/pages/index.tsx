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
    </>
  )
}
