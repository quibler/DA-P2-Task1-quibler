import Image from "next/image";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { getProfile } from "./api/profiles";
import ScrollProgressBar from "../components/ScrollProgressBar";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfilePage = ({ profile }) => {
  const { name, nickname, interests, latest, experience } = profile;
  const introLength = 35 + nickname.length + name.length;
  const defaultImg =
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80";
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 1 });
  const router = useRouter();
  const handleImgUrl = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  };
  const deleteProfile = async () => {
    const nickname = router.query.nickname;
    if (nickname === "quibler") {
      console.log("Cant delete Quibler's Profile! Sorry");
      return;
    }
    try {
      const deleted = await fetch(`/api/profiles/${nickname}`, {
        method: "Delete",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-full font-mono">
      <ScrollProgressBar />
      <Link href="/">
        <button className="fixed top-4 left-4 text-white text-xl bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Home
        </button>
      </Link>
      <button
        className={`fixed top-4 right-4 bg-red-700 px-5 py-2 rounded-lg ${
          nickname === "quibler" ? "hidden" : ""
        }`}
        onClick={deleteProfile}
      >
        Delete
      </button>
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
            style={{ "--n": introLength }}
          >
            Hi there, I am {name}.
            <br /> Virtually known as {nickname}
          </span>
          <h5 className="mt-4 text-2xl about">
            I am a{" "}
            <span className="type2">
              <span>
                <span>Web3 Enthusiast</span>
                <span>passionate web developer</span>
                <span>lazy person!</span>
              </span>
            </span>
          </h5>
        </div>
      </section>
      <section className="grid grid-row-2 gap-4 place-content-center mx-auto w-[calc(100vw-2rem)] h-screen snap-start snap-always">
        <h1 ref={ref1} className={`mx-auto text-4xl block`}>
          <span className={inView1 ? "type" : "hidden"} style={{ "--n": 22 }}>
            I am passionate about!
          </span>
        </h1>
        <ul className="grid grid-row-6">
          {interests.map((interest, index) => (
            <li
              key={index}
              className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl w-max px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 ${
                inView1
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              {interest}
            </li>
          ))}
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
            inView2 ? "animate__animated animate__fadeIn animate__delay-2s" : ""
          }`}
        >
          <a href={latest.url}>
            <Image
              className="rounded-t-lg"
              src={handleImgUrl(latest.img) ? latest.img : defaultImg}
              alt="balthazar"
              width="786px"
              height="717px"
            />
          </a>
          <div className="p-5">
            <a href={latest.url}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {latest.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {latest.description}
            </p>
            <a
              href={latest.url}
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
          {experience.map((exp, index) => (
            <li key={index}>
              <h5 className="text-2xl">{exp.title}</h5>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;

export async function getServerSideProps(ctx) {
  const nickname = ctx.params.nickname;
  const data = await getProfile(nickname);
  return {
    props: {
      profile: JSON.parse(JSON.stringify(data)),
    },
  };
}
