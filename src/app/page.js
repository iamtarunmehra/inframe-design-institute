import Image from "next/image";
import BannerSlider from "./homePageComponents/BannerSlider";
import Facility from "./homePageComponents/Facility";
import BookaSession from "./homePageComponents/BookaSession";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <BookaSession/>
      <Facility />
    </div>
  )
}
