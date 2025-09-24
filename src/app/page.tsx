import Welcome from "./components/Welcome";
import StarPath from "./components/StarPath";

export default function Home() {
  return (
    <div className="min-h-screen p-15">
      <section>
        <StarPath />
      </section>
      <section>
        <Welcome />
      </section>
    </div>
  );
}
