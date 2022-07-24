import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import balthazar from "../public/balthazar.png";
import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Home() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 1 });
  return (
    <div className={styles.container}>
      <Head>
        <title>quibler</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full font-mono">
        <section className="flex flex-col md:flex-row justify-center md:items-center w-[calc(100vw-4rem)] h-screen mx-auto snap-start snap-always">
          <div className="relative mb-4 md:mb-0 w-40 h-40">
            <Image
              src="https://gfcl2wgmhponogmj4us3lpnpzozvatwddwu7guc335wqpsvq.arweave.net/MUS9WMw73N-_cZie_Ultb2vy7NQTsMdqfNQW99tB8qw?ext=png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="md:ml-4 block">
            <span
              className="text-2xl md:text-4xl md:leading-12 type"
              style={{ "--n": 50 }}
            >
              Hi there, I am Ashwini.
              <br /> Virtually known as quibler
            </span>
            <h5 className="mt-4 text-2xl about">
              I am a{" "}
              <span className="type2">
                <span>
                  <span>CSS Hacker</span>
                  <span>passionate web developer</span>
                  <span>lazy person!</span>
                </span>
              </span>
            </h5>
            <span className="mt-4 text-black scrollNoti">(Keep scrolling)</span>
          </div>
        </section>
        <section className="grid grid-row-2 gap-4 place-content-center mx-auto w-[calc(100vw-2rem)] h-screen snap-start snap-always">
          <h1 ref={ref1} className={`mx-auto text-4xl block`}>
            <span className={inView1 ? "type" : "hidden"} style={{ "--n": 18 }}>
              I am interested in
            </span>
          </h1>
          <ul className="grid grid-row-6">
            <li
              className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl w-max px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 ${
                inView1
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              Coding
            </li>
            <li
              className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl w-max px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 ${
                inView1
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              Design
            </li>
            <li
              className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl w-max px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 ${
                inView1
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              Economics
            </li>
            <li
              className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl w-max px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 ${
                inView1
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              Yoga
            </li>
            <li
              className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl w-max px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 ${
                inView1
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              Swimming
            </li>
            <li
              className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl w-max px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 ${
                inView1
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              Travelling
            </li>
          </ul>
        </section>
        <section className="grid grid-row-2 gap-4 place-content-center mx-auto w-[calc(100vw-2rem)] h-screen snap-start snap-always">
          <h1 ref={ref2} className="text-4xl w-max">
            <span className={inView2 ? "type" : "hidden"} style={{ "--n": 15 }}>
              {" "}
              My latest work!
            </span>
          </h1>
          <div
            className={`max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ${
              inView2
                ? "animate__animated animate__fadeIn animate__delay-2s"
                : ""
            }`}
          >
            <a href="#">
              <Image className="rounded-t-lg" src={balthazar} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  BuddiezzNFT Merch Webshop
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The Webshop where you can mint your favourite Merch NFTs and
                trade or redeem them later for the physical product.
              </p>
              <a
                href="https://blackmarket.buddiezznft.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className="grid grid-row-2 gap-4 place-content-center mx-auto w-[calc(100vw-2rem)] h-screen snap-start snap-always">
          <h1 ref={ref3} className="text-4xl block">
            <span className={inView3 ? "type" : "hidden"} style={{ "--n": 56 }}>
              ...and a few other projects I made, for fun and learning
            </span>
          </h1>
          <ul
            className={`grid grid-row-5 gap-4 max-w-md mt-4 ${
              inView3
                ? "animate__animated animate__fadeInUp animate__delay-5s"
                : ""
            }`}
          >
            <li>
              <h5 className="text-2xl">Quiz App using PERN stack</h5>
              <p>
                A fun informative quiz game built on React, Express, Node, and
                Postgres
              </p>
            </li>
            <li>
              <h5 className="text-2xl">Google Calendar Clone</h5>
              <p>
                Google calendar clone with simple features such as adding events
              </p>
            </li>
            <li>
              <h5 className="text-2xl">Youtube Clone</h5>
              <p>Youtube homepage using HTML,CSS, and vanilla JS</p>
            </li>
            <li>
              ...and a few other small projects I made back when I did not know
              the importance of maintaining github properly 🙃
            </li>
            <li>
              <a href="https://github.com/quibler" className="underline">
                My soon to be organized Github -&gt;
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
