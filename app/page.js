import Header from "./components/Header";
import Footer from "./components/Footer";
// import "./globals.css";  // Ensure this file exists

export default function Home() {
  return (
    <main className="container-fluid crypt-dark">
      <Header />
      <section>
        <h1>Welcome to Crypt</h1>
        <p>This is your Next.js Bootstrap-based template.</p>
      </section>
      <Footer />
    </main>
  );
}

