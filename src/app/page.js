import Image from "next/image";
import BannerSlider from "./homePageComponents/BannerSlider";
import Facility from "./homePageComponents/Facility";
import BookaSession from "./homePageComponents/BookaSession";
import StudyMaterials from "./homePageComponents/StudyMaterials";

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <BookaSession />
      <Facility />
      <StudyMaterials />
    </div>
  )
}
