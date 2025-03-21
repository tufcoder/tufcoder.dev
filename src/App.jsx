import { Header } from './components/Header'
import { Jobs } from './components/Jobs'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <main className="mx-auto max-w-3xl min-w-xs p-2 text-center md:p-4 lg:p-6">
      <Header />
      <Jobs />
      <Footer />
    </main>
  )
}
