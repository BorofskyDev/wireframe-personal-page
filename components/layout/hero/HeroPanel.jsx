import HeroTitle from "./sections/HeroTitle"
import HeroImage from "./sections/HeroImage"
import HeroContent from "./sections/HeroContent"

const HeroPanel = () => {
  return (
    <section className="h-screen w-screen mx-auto text-center  flex flex-col items-center">
        <HeroTitle />
        <HeroImage />
        <HeroContent />
    </section>
  )
}
export default HeroPanel