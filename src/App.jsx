import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex min-h-screen transition-colors duration-300">
        <Sidebar />

        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* Ambient Background Blur Effect */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-fade-in pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-fade-in pointer-events-none delay-200" />
          
          <Navbar toggleDark={() => setDark(!dark)} isDark={dark} />
          <main className="flex-1 overflow-y-auto z-10">
             <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;