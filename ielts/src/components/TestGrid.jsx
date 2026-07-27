import TestCard from "./TestCard";
import tests from "../data/tests";

function TestGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {tests.map((test) => (
          <TestCard
            key={test.id}
            title={test.title}
            type={test.type}
            difficulty={test.difficulty}
            image={test.image}
          />
        ))}

      </div>

    </section>
  );
}

export default TestGrid;