import { Header } from "./components/header/header"
import { Services } from "./components/services/services"
import { Portfolio } from "./components/portfolio/portfolio"
import { Contact } from "./components/contact/contact"
import { Footer } from "./components/footer/footer"
import { FloatingButtons } from "./components/ui/floating-buttons"

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <Portfolio />
      <Contact />
      <FloatingButtons />
      <Footer />
    </main>
  )
}
