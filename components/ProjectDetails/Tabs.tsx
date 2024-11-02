import classes from "@/components/ProjectDetails/Tabs.module.css";
import { useState } from "react";

import General from "@/components/ProjectDetails/General/General";

type TabName = "general" | "technologies" | "gallery";

const tabContent: Record<TabName, JSX.Element> = {
  general: <General />,
  technologies: <div>Technologies Content</div>,
  gallery: <div>Gallery Content</div>,
};

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<TabName>("general");

  function tabSelectionHandler(tabName: TabName) {
    setSelectedTab(tabName);
  }

  return (
    <div className={classes.tabs}>
      <ul className={classes.menu}>
        <li
          className={classes["menu-item"]}
          onClick={() => {
            tabSelectionHandler("general");
          }}
        >
          General
        </li>
        <li
          className={classes["menu-item"]}
          onClick={() => {
            tabSelectionHandler("technologies");
          }}
        >
          Technologies
        </li>
        <li
          className={classes["menu-item"]}
          onClick={() => {
            tabSelectionHandler("gallery");
          }}
        >
          Gallery
        </li>
      </ul>
      <section className={classes.content}>{tabContent[selectedTab]}</section>
    </div>
  );
}
