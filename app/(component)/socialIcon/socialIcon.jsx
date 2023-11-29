import Image from 'next/image'
import React from 'react'

function SocialIcon() {
  return (
    <div className="bg-primary-thirdBlack w-[50px] h-[50px] rounded-full flex  justify-center items-center">
    <Image
      src="/images/camera.svg"
      width={30}
      height={30}
      alt="sdf"
    />
    </div>
  )
}

export default SocialIcon