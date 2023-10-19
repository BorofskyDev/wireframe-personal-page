import HeroScrollContainer from "./sections/container-sections/HeroScrollContainer"
import HeroStableContainer from "./sections/container-sections/HeroStableContainer"


const HeroPanel = () => {
  return (
    <section id="home" className="mt-6">
        <HeroStableContainer />
        <HeroScrollContainer />
    </section>
  )
}
export default HeroPanel