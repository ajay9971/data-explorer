import { motion } from "framer-motion";

const NavItem = ({ icon, label, active }) => (
  <motion.li
    whileHover={{ x: 4 }}
    className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${active
        ? "bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card hover:text-gray-900 dark:hover:text-gray-200"
      }`}
  >
    <span className="text-xl">{icon}</span>
    {label}
  </motion.li>
);

const Sidebar = () => {
  return (
    <div className="w-72 hidden md:flex flex-col bg-white/50 dark:bg-dark-bg border-r border-gray-200 dark:border-dark-border p-6 h-screen sticky top-0">
      <div className="mb-10 mt-2 px-2">
        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Dashboard Navigation</p>
      </div>

      <ul className="space-y-2 flex-1">
        <NavItem icon="🏠" label="Overview" active={true} />
        <NavItem icon="📈" label="Analytics" />
        <NavItem icon="📦" label="Inventory" />
        <NavItem icon="👥" label="Customers" />
      </ul>

      <div className="mt-auto border-t border-gray-200 dark:border-dark-border pt-6">
        <ul className="space-y-2">
          <NavItem icon="⚙️" label="Settings" />
          <NavItem icon="💬" label="Support" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;