import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
 return(
  <main>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
      <div className="wrappper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 p-9">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="h1-bold tracking-tighter ">Connet,Code
             and Celebrate_ </h1>
             <p className="p-regular-20 md:p-regular-24 tracking-tight">
             Elevate your skills and network with like-minded coders at dynamic events around the community. Discover new technologies and opportunities to grow in the ever-evolving world of coding!             </p>
            <Button size="lg" asChild className="button w full sm:w-fit bg-blue-600 hover:bg-blue-500"> 
              <Link href="#events">
              Explore Now
              </Link>
            </Button>
        </div>
        <Image src="/assets/images/hero.png"
        alt="hero"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        >

        </Image>
      </div>
    </section>
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
    <h2 className="h2-bold">Trusted by <br  /> Thousands of Events</h2>
    <div className="flex w-full flex-col gap-5 md:flex-row">
      Search
      Category

    </div>
    </section>
  </main>
 )
}
