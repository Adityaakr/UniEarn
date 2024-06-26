import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constants";
import { CheckIcon } from 'lucide-react'
import Image from "next/image";


export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <section className="w-full  bg-neutral-950 rounded-md  
        !overflow-visible relative flex flex-col items-center  antialiased">
          <div className="absolute inset-0  h-full 
          w-full items-center px-5 py-24 
          [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
          <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col">
                  <Button
                    size={'lg'}
                    className="p-8 mb-8 md:mb-0 mt-5 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                      Start For Free Today
                    </span>
                  </Button>
                  <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                      Single click crosschain Crypto deposit
                  </h1>
                </div>
              }
            />
          </div>
        </section>
        <div className="text-4xl m-6 text-center font-semibold text-gray-300 border-2 p-3 font-serif">Our Highlights</div>
        <InfiniteMovingCards
          className="mt-5 md:mt-5 lg:mt-5"
          items={clients}
          direction="right"
          speed="slow"
        />
        <section>
        <HeroParallax products={products}></HeroParallax>
        </section>
        <section>
        <LampComponent/>
          <div className="flex flex-wrap items-center justify-center
          flex-col md:flex-row gap-8 -mt-72">
            <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                
                <h2 className="text-5xl ">Subscription 
                <br/>based Teir
                </h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
              >
This could range from a free tier with limited options to a pro tier with access to all supported chains and potentially additional features like priority processing or advanced analytics.    
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 
            relative group/card  
            dark:hover:shadow-2xl
             dark:hover:shadow-neutral-500/[0.1]
              dark:bg-black
               dark:border-[#E2CBFF]
               /[0.2]
                border-black/[0.1] 
                w-full md:!w-[350px] 
                h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
               
                <h2 className="text-5xl ">Transaction fees</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 
                text-lg max-w-sm mt-2
                 dark:text-neutral-300"
              >
                Potentially implement a small transaction fee on each deposit made through UniEarn. This fee could be a flat rate or a percentage of the deposited amount.
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 
            relative group/card  
            dark:hover:shadow-2xl
             dark:hover:shadow-neutral-500/[0.1]
              dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                <h2 className="text-5xl ">Premium Services</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-neutral-300"
              >
                
                Consider offering premium services for a separate fee, such as access to exclusive DeFi vaults with higher potential returns or personalized investment strategies from experts
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
            </CardContainer>
          </div>
        </section>

    </main >
    </>
  );
}
