import WordPath from "../components/WordPath";

export default function Welcome() {
  return (
    <>
      <div className="flex-[3]">
        <WordPath />
      </div>
      <div className="flex-[1]">
        <h1 className="header">Hallo! I&apos;m Amee.</h1>
        <h3 className="subheader">
          Welcome to my playground of learning and exploration.
        </h3>
      </div>
    </>
  );
}
