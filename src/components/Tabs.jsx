import { Fragment, useState } from 'react';
import { arrayOf, node, number, shape, string } from 'prop-types';
import Button from './Button';

const getTabContent = (tabs = [], activeTabId = 0) => {
	if (tabs.length === 0) {
		return 'No content.';
	}
	if (!activeTabId) {
		return tabs[0].content;
	}
	const foundTabContent = tabs.find(tab => tab.id === activeTabId)?.content;
	return foundTabContent || 'No content.';
}

const Tabs = ({ defaultActiveTabId, tabs }) => {

	const [ activeTabId, setActiveTabId ] = useState(defaultActiveTabId);
	const [ currentTabContent, setCurrentTabContent ] = useState(getTabContent(tabs, defaultActiveTabId));

	const handleChangeTab = (tabId) => () => {
		setActiveTabId(tabId);
		setCurrentTabContent(getTabContent(tabs, tabId));
	};

	return (
		<div className="tabs-container">
			<div className="tabs-buttons-container">
				{
					tabs.map(({ title, id }) => <Button key={ id } variant={ id === activeTabId ? 'primary' : 'light' } onClick={ handleChangeTab(id) }>{ title }</Button>)
				}
			</div>
			{ tabs.map(({ id }) => id === activeTabId ? <Fragment key={ id }>{ currentTabContent }</Fragment> : null) }
		</div>
	);
};

export default Tabs;

Tabs.propTypes = {
	defaultActiveTabId: number,
	tabs: arrayOf(shape({
		id: number.isRequired,
		title: string.isRequired,
		content: node
	})),
};

Tabs.defaultProps = {
	defaultActiveTabId: 0,
	tabs: [],
};