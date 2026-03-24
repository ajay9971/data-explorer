import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";

function App() {
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex min-h-screen transition-colors duration-300">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* Ambient Background Blur Effect */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10 animate-fade-in pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-fade-in pointer-events-none delay-200" />
          
          <Navbar toggleDark={() => setDark(!dark)} isDark={dark} />
          <main className="flex-1 overflow-y-auto z-10 relative">
             {activeTab === "Overview" && <Home />}
             {activeTab === "Inventory" && <Inventory />}
             {activeTab !== "Overview" && activeTab !== "Inventory" && (
                <div className="p-10 flex flex-col items-center justify-center min-h-[50vh] text-center opacity-60">
                  <div className="text-6xl mb-4 grayscale opacity-80">🚧</div>
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white capitalize">{activeTab} Module</h2>
                  <p className="text-gray-500 dark:text-gray-400">This dashboard module is currently under construction.</p>
                </div>
             )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;