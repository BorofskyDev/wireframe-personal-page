import HeroContent from "../section-components/HeroContent"
import HeroImage from "../section-components/HeroImage"
import HeroTitle from "../section-components/HeroTitle"


const HeroStableContainer = () => {
  return (
    <container className='h-screen w-screen mx-auto text-center flex flex-col items-center'>
      <HeroTitle />
      <HeroImage />
      <HeroContent />
    </container>
  )
}
export default HeroStableContainer
