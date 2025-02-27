import { Header } from "./components/Header";
import { Jobs } from "./components/Jobs";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="mx-auto p-2 md:p-4 lg:p-6 min-w-xs max-w-3xl text-center">
      <Header />
      <Jobs />
      <Footer />
    </main>
  );
}
