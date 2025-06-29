import Image from "next/image";
import ImageLink from "@/app/_components/ImageLink";

const Home = () => (
  <div className="flex min-h-dvh flex-col justify-center p-16 sm:p-8">
    <div className="relative flex flex-1 items-center justify-center">
      <Image
        alt=""
        src="/cover.png"
        width={1920}
        height={1080}
        className="absolute hidden lg:block"
      />
      <div className="relative z-1 mb-[10%] flex w-5/6 flex-col items-center gap-20 lg:w-3/5 2xl:mb-48">
        <Image
          alt="Title"
          src="/title.png"
          width={2000}
          height={600}
          className="w-1/2 sm:w-1/3 lg:hidden"
        />
        <main className="flex flex-col items-center justify-center gap-8 sm:w-full sm:flex-row sm:gap-[8%] 2xl:gap-24">
          <ImageLink href="https://steamcommunity.com/id/aprildev/">
            <Image alt="Steam" src="/steam.png" width={380} height={380} />
          </ImageLink>
          <ImageLink href="https://april-dev.itch.io/">
            <Image alt="Itch.io" src="/itch-io.png" width={380} height={380} />
          </ImageLink>
          <ImageLink href="https://linktr.ee/aprildev">
            <Image alt="More" src="/more.png" width={380} height={380} />
          </ImageLink>
        </main>
      </div>
    </div>
  </div>
);

export default Home;
