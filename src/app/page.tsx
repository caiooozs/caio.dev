import Topics from "../components/Topics/topics";
import TopBar from "../components/TopBar/topBar";
import Footer from "../components/Footer/footer";
import About from "../components/About/about";
import Technologies from "../components/Technologies/technologies";
export default function Home() {
  return (
    <>
      <TopBar />
      <About />
      <Technologies />
      <Topics />
      <Footer />
    </>
  );
}
