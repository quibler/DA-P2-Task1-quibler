import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useReducer } from "react";
import ScrollProgressBar from "../components/ScrollProgressBar";

const NewDogeProfile = () => {
  const router = useRouter();

  const interestRef = useRef(null);
  const expTitleRef = useRef(null);

  const [name, setName] = useState();
  const [nickname, setNickname] = useState("");
  const [interests, setInterests] = useState([]);
  const [interestInput, setInterestInput] = useState("");
  const [latestWork, setLatestWork] = useReducer((state, newState) => ({
    ...state,
    ...newState,
  }));
  const [exp, setExp] = useState([]);
  const [expInput, setExpInput] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    { title: "", desc: "" }
  );

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleNicknameInput(e) {
    setNickname(e.target.value);
  }

  function handleInterestChange(e) {
    setInterestInput(e.target.value);
  }

  function addInterest() {
    setInterests([...interests, interestInput]);
    setInterestInput("");
    interestRef.current.focus();
  }

  const handleLatestWorkInput = (e) => {
    setLatestWork({ [e.target.name]: e.target.value });
  };
  const handleExpChange = (e) => {
    setExpInput({ [e.target.name]: e.target.value });
  };

  function addExp() {
    setExp((exp) => [...exp, expInput]);

    setExpInput({
      title: "",
      desc: "",
    });
    expTitleRef.current.focus();
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      if (e.target.id === "nickname" && nickname === "") {
        alert("You must hava nickname!");
      } else if (e.target.id === "interestInput" && interests.length === 0) {
        alert("Please add something here");
      } else {
        window.scrollBy(0, 100);
      }
    }
  }

  const recruitDoge = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      nickname: nickname,
      interests: interests,
      latest: latestWork,
      experience: exp,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/profiles";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    router.push("/");
  };

  return (
    <>
      <ScrollProgressBar />

      <Link href="/">
        <button className="fixed top-4 left-4 text-white text-xl bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-5 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          Home
        </button>
      </Link>

      <form className="h-full text-2xl font-mono">
        <section className="h-full grid place-content-center snap-start snap-always">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="text-black font-semibold mt-4"
            onKeyUp={handleEnter}
            onChange={handleNameInput}
            value={name}
          />
        </section>
        <section className="h-full grid place-content-center snap-start snap-always">
          <label>Nickname</label>
          <input
            required
            type="text"
            id="nickname"
            name="nickname"
            className="text-black font-semibold mt-4"
            onKeyUp={handleEnter}
            onChange={handleNicknameInput}
            value={nickname}
          />
        </section>
        <section className="h-full grid place-content-center snap-start snap-always">
          {" "}
          <label>Your interests</label>
          <ul className="flex flex-wrap gap-2" id="interests">
            {interests.map((item, index) => (
              <li
                key={index}
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg px-5 py-1 dark:focus:ring-yellow-900"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              id="interestInput"
              ref={interestRef}
              onChange={handleInterestChange}
              value={interestInput}
              className="text-black font-semibold align-middle"
              onKeyUp={handleEnter}
            />
            <span
              className="align-middle text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={addInterest}
            >
              Add
            </span>
          </div>
        </section>
        <section className="h-full grid place-content-center snap-start snap-always">
          <h1 className="mb-4">Last thing you worked on</h1>
          <label>Title</label>
          <input
            type="text"
            id="latestWorkTitle"
            name="title"
            className="text-black font-semibold"
            onChange={handleLatestWorkInput}
          ></input>
          <label>Description</label>
          <textarea
            id="latestWorkDescription"
            className="text-black font-semibold"
            name="description"
            onChange={handleLatestWorkInput}
          ></textarea>
          <label>Link to a screenshot of your work</label>
          <input
            type="text"
            id="img"
            name="img"
            className="text-black font-semibold"
            onChange={handleLatestWorkInput}
          ></input>
          <label>Link to your work</label>
          <input
            type="text"
            id="url"
            name="url"
            className="text-black font-semibold"
            onChange={handleLatestWorkInput}
            onKeyUp={handleEnter}
          ></input>
        </section>
        <section className="h-full grid place-content-center snap-start snap-always">
          <h1>Other things you have worked on</h1>
          <div className="grid place-content-center">
            <ul
              className="grid gap-2 px-2 max-h-80 text-xl overflow-y-scroll mb-4"
              id="experience"
            >
              {exp.map((item, index) => (
                <li
                  key={index}
                  className="max-w-sm rounded-lg border px-1 border-gray-200"
                >
                  <h1 className="underline">{item.title}</h1>
                  <p className="break-all">{item.desc}</p>
                </li>
              ))}
            </ul>
            <label>Title</label>
            <input
              className="text-black font-semibold"
              type="text"
              name="title"
              ref={expTitleRef}
              onChange={handleExpChange}
              value={expInput.title}
            ></input>
            <label>Description</label>
            <textarea
              className="text-black font-semibold"
              name="desc"
              onChange={handleExpChange}
              value={expInput.desc}
            ></textarea>
            <span
              className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={addExp}
            >
              ADD WORK
            </span>
          </div>
        </section>
        <section className="h-full grid place-content-center snap-start snap-always">
          <button className="pixel" type="submit" onClick={recruitDoge}>
            <p>Create Profile</p>
          </button>
        </section>
      </form>
    </>
  );
};

export default NewDogeProfile;
