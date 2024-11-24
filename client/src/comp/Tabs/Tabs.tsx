"use client";
import { Tabs, Tab } from "@nextui-org/react";
const variants = ["solid", "underlined", "bordered", "light"];

const App = ({ variant = "underlined" }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs key={variant} variant="underlined" aria-label="Tabs variants">
        <Tab key="photos" title="Photos" />
        <Tab key="music" title="Music" />
        <Tab key="videos" title="Videos" />
      </Tabs>
    </div>
  );
};
export default App;

// components/Tabs.js
// import { useState } from "react";
// import styles from "./Tabs.module.css";

// const Tabs = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(tabs[0].id);

//   const handleTabClick = (id) => {
//     setActiveTab(id);
//   };

//   return (
//     <div className={styles.tabsContainer}>
//       <div className={styles.tabList}>
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`${styles.tab} ${
//               activeTab === tab.id ? styles.active : ""
//             }`}
//             onClick={() => handleTabClick(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div className={styles.tabContent}>
//         {tabs.map(
//           (tab) =>
//             tab.id === activeTab && (
//               <div key={tab.id} className={styles.content}>
//                 {tab.content}
//               </div>
//             )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tabs;
