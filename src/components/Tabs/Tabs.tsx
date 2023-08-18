import { FC, PropsWithChildren, ReactElement, cloneElement, useState } from "react";
import { CSSIcon, Icon } from "../Icon/Icon";

import './Tabs.css';

export type TabProps = PropsWithChildren<{
  id: string;
  label: string;
  icon?: CSSIcon;
}>;
export const Tab: FC<TabProps> = (_props: TabProps) => null;

interface TabBarTabProps extends TabProps {
  isSelected: boolean;
  onSelect: () => void;
}
const TabBarTab = ({ label, icon, isSelected, onSelect }: TabBarTabProps) => {
  const tabClasses = 'Tab__container' + (isSelected ? ' Tab__container__selected' : '')
  return <div className={tabClasses} onClick={onSelect} >
    { icon && <Icon icon={icon} /> }
    <span className="Tab__label">{ label }</span>
  </div>;
};


export interface TabsProps {
  children: ReactElement<TabProps>[];
}

export const Tabs = ({ children }: TabsProps) => {
  const [selectedId, setSelectedId] = useState<string>();
  const selectedTab = children.find(tab => tab.props.id === selectedId) || children[0];

  const tabs = children.map(tab => {
    const onSelect = () => setSelectedId(tab.props.id);
    const isSelected = selectedTab === tab;
    const props = { ...tab.props, onSelect, isSelected };
    return <TabBarTab { ...props } key={props.id} />;
  });


  return <div className="Tabs__container">
    <div className="Tabs__tab-bar">
      { tabs }
    </div>
    <div className="Tabs__tab-content">
      { selectedTab.props.children }
    </div>
  </div>;
};
