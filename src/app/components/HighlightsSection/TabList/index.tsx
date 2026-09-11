import { tabList, tabBtn, tabItem, tabBtnActive } from "./styles";
import { createClasses } from "@/app/components/ui";
import { TABS } from "@/app/components/HighlightsSection/data";

interface TabListProps {
  activeTab: string;
  switchTab: Function;
}

export function TabList({ activeTab, switchTab }: Readonly<TabListProps>) {

  return (
    <ul role="tablist" className={tabList} aria-label="Highlights categories">
      {TABS.map(({ key, label }) => (
        <li key={key} className={tabItem} role="presentation">
          {key === "view" ?
            label
            :
            <button
              role="tab"
              aria-selected={activeTab === key}
              aria-controls={key}
              data-active={activeTab === key || undefined}
              className={createClasses(tabBtn, activeTab === key && tabBtnActive)}
              onClick={() => switchTab(key)}
            >
              {label}
            </button>}
        </li>
      ))}
    </ul>
  );
}
