export default function ProjectList() {
  return (
    <section className="p-10 space-y-6">
      {[1,2,3].map(i => (
        <div key={i} className="grid md:grid-cols-2 gap-4">
          <div className="h-32 bg-gray-300" />
          <div>
            <h3>Project Title</h3>
            <p>Description...</p>
          </div>
        </div>
      ))}
    </section>
  );
}