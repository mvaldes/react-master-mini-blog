import { useState } from 'react';
import TabButton from './TabButton';

const getInitialTabContent = (tabs = [], activeTabId = 0) => {
	if (tabs.length === 0) {
		return 'No content.';
	}
	if (!activeTabId) {
		return tabs[0].content;
	}
	const foundTabContent = tabs.find(tab => tab.id === activeTabId)?.content;
	return foundTabContent || tabs[0].content;
}

const Tabs = ({ defaultActiveTab = 0, tabs = [] }) => {

	const [ activeTab, setActiveTab ] = useState(defaultActiveTab);
	const [ currentTabContent, setCurrentTabContent ] = useState(getInitialTabContent(tabs, defaultActiveTab));

	const handleChangeTab = (tabId) => () => {
		setActiveTab(tabId);
		const foundTabContent = tabs.find(tab => tab.id === tabId)?.content;
		setCurrentTabContent(foundTabContent || 'Not found.');
	};

	return (
		<div className="tabs-container">
			<div className="tabs-buttons-container">
				{
					tabs.map(({ title, id }) => <TabButton key={ id } isActive={ id === activeTab } onClick={ handleChangeTab(id) }>{ title }</TabButton>)
				}
			</div>
			{ currentTabContent }
		</div>
	);
};

export default Tabs;