import Welcome from "./components/Welcome";
import StarPath from "./components/StarPath";
import CanvasSketch from "./components/CanvasSketch";

export default function Home() {
  return (
    <div className="min-h-screen p-15">
      <section aria-label="Star animation">
        <StarPath />
      </section>
      <section aria-label="Recursive tree">
        <CanvasSketch />
      </section>
      <section aria-label="Welcome message">
        <Welcome />
      </section>
    </div>
  );
}
