import { useState } from 'react';
import TabButton from './TabButton';

const Tabs = ({ defaultActiveTab, tabs }) => {

	const [ activeTab, setActiveTab ] = useState(defaultActiveTab);
	const [ currentTabContent, setCurrentTabContent ] = useState(tabs[defaultActiveTab].content);

	const handleChangeTab = (tabIndex) => () => {
		setActiveTab(tabIndex);
		setCurrentTabContent(tabs[tabIndex].content);
	};

	return (
		<div className="tabs-container">
			<div className="tabs-buttons-container">
				{
					tabs.map(({ title }, index) => <TabButton key={ index } isActive={ index === activeTab } onClick={ handleChangeTab(index) }>{ title }</TabButton>)
				}
			</div>
			{ currentTabContent }
		</div>
	);
};

export default Tabs;