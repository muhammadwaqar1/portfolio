import Link from "next/link";
import Experience from "./(component)/experience/experience";
import InfoBox from "./(component)/infoBox/infoBox";
import Profile from "./(component)/profile/profile";
import Specialization from "./(component)/specialization/specialization";
import TextAnimation from "./(component)/textAnimation/textAnimation";
import UserLink from "./(component)/userLink/userLink";
import WorkTogether from "./(component)/workTogether/workTogether";
export default function Home() {
  return (
    <div className="md:container md:mx-auto px-8 w-full mt-5 space-y-5">
      <div className="lg:flex flex-col lg:flex-row relative justify-center items-center">
        <div className="lg:w-1/2 lg:px-5  mb-5  ">
          <Profile />
        </div>
        <div className=" lg:w-1/2 lg:px-5">
          <div className="lg:mb-4 mb-4">
            <TextAnimation />
          </div>
          <div className="md:flex md:space-x-6 space-y-4 md:space-y-0    h-full">
            <InfoBox
              title="More about me"
              description="Credentials"
              url="/images/sign.png"
              page="/aboutMe"
            />
            <InfoBox
              title="More about me"
              description="Credentials"
              url="/images/my-works.png"
              page="/work"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex w-full lg:space-x-5 lg:items-center lg:px-5  ">
        <div className="lg:w-[30%]">
          <InfoBox
            title="More about me"
            description="Credentials"
            url="/images/gfonts.png"
          />
        </div>
        <div className="lg:w-[40%]">
          <Link href="/offering">
            <Specialization />
          </Link>
        </div>
        <div className="lg:w-[30%]">
          <Link href="/contact">
            <UserLink />
          </Link>
        </div>
      </div>

      <div className="lg:flex lg:space-x-5">
        <Experience />
        <WorkTogether />
      </div>
    </div>
  );
}
