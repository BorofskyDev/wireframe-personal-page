import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className='h-1/3 mx-auto py-8 my-6 flex items-center '>
      <Image
        className='w-36 h-48'
        src='/images/site/joel.jpg'
        alt='Joel'
        width={300}
        height={300}
      />
    </div>
  )
}
export default HeroImage
