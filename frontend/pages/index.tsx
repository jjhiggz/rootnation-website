import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header/header";
import MainContentContainer from "../components/layout/main-content-container";
import TalibMiddleFinger from "../public/carousel_pictures/talib_middle_finger.jpg";

const Home: NextPage = () => (
  <div className="absolute w-full">
    <Header />
    <main className="absolute w-full">
      <MainContentContainer>
        <Image
          src={TalibMiddleFinger}
          layout="responsive"
          objectFit="contain"
          draggable={false}
        />
      </MainContentContainer>

      <MainContentContainer>
        <div className="w-full bg-white h-screen"></div>
      </MainContentContainer>

      <MainContentContainer>
        <div className="w-full bg-black h-screen"></div>
      </MainContentContainer>
    </main>
  </div>
);

export default Home;
