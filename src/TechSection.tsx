import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function TechSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Failed to load technologies!");
      });
  }, []);

  // Add to Stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.find((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setStack([...stack, technology]);
    toast.success(`${technology.name} added to stack!`);
  };

  // Remove single item
  const handleRemove = (id: string) => {
    const removedItem = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (removedItem) {
      toast.info(`${removedItem.name} removed from stack!`);
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed!");
  };

  // Loading
  if (loading) {
    return (
      <section className="max-w-full mx-auto px-6 py-20 text-center">
        <p className="mt-4 text-slate-500"> Loading technologies... </p>
      </section>
    );
  }

  return (
    <section className="max-w-full mx-auto px-6 py-16">
      {/* Toast */}
      <ToastContainer position="top-right" autoClose={2000} />

      {/* section heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-slate-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Technology Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {technologies.map((technology) => {
            const isAdded = stack.some((item) => item.id === technology.id);

            return (
              <div
                key={technology.id}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Icon + Badge */}
                  <div className="flex justify-between items-center">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-9 h-9 object-contain"
                    />

                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-pink-50 text-pink-500">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-slate-900 mt-4">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 mt-2 leading-5 min-h-[60px]">
                    {technology.description}
                  </p>
                </div>

                <div>
                  {/* Category / Difficulty / Rating */}
                  <div className="flex justify-between items-center mt-4 text-xs">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {technology.category}
                    </span>

                    <span className="text-slate-500">
                      {technology.difficulty}
                    </span>

                    <span className="text-slate-700">
                       {technology.rating}
                    </span>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToStack(technology)}
                    disabled={isAdded}
                    className={`w-full mt-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isAdded
                        ? "bg-green-100 text-green-600 cursor-not-allowed"
                        : "bg-slate-950 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-1">
          <div className="border border-slate-200 rounded-xl p-4 bg-white sticky top-24">
            {/* Stack Heading */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>

              <p className="text-xs text-slate-400 mt-1">
                {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
              </p>
            </div>

            {/* Empty State */}
            {stack.length === 0 ? (
              <div className="border border-dashed border-slate-200 rounded-lg py-8 px-4 text-center">
                <p className="text-sm text-slate-400">
                  No technologies selected yet.
                </p>

                <p className="text-xs text-slate-300 mt-1">
                  Add technologies from the list.
                </p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border border-slate-200 rounded-lg p-2.5"
                  >
                    {/* Stack Item */}
                    <div className="flex items-center gap-2">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-7 h-7 object-contain"
                      />

                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">
                          {item.name}
                        </h4>

                        <p className="text-[10px] text-slate-400">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-slate-400 hover:text-red-500 text-lg px-1"
                      title={`Remove ${item.name}`}
                    >
                      × 
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Remove All */}
            <button
              onClick={handleRemoveAll}
              disabled={stack.length === 0}
              className={`w-full border text-sm font-medium py-2.5 rounded-lg mt-5 transition-colors ${
                stack.length === 0
                  ? "border-slate-200 text-slate-300 cursor-not-allowed"
                  : "border-red-200 text-red-500 hover:bg-red-50"
              }`}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSection;







