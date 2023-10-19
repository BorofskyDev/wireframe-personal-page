import FixedContainer from "@/components/layout/containers/FixedContainer"
import HeroContent from "../section-components/HeroContent"
import HeroImage from "../section-components/HeroImage"
import HeroTitle from "../section-components/HeroTitle"


const HeroStableContainer = () => {
  return (
    <FixedContainer className='h-screen w-screen mx-auto text-center flex flex-col items-center'>
      <HeroTitle />
      <HeroImage />
      <HeroContent />
    </FixedContainer>
  )
}
export default HeroStableContainer
