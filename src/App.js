/* eslint-disable */
import { React } from 'react';
import './App.scss';
import SimpleButton from './components/simpleButton';
import { rndBetween, rndValue } from '@laufire/utils/random.js';
import gameanalytics from './ga/GameAnalytics.node.js';
import { map, range } from '@laufire/utils/collection.js';

const App = ({ state: { count, refreshID }}) => {

	gameanalytics.GameAnalytics.setEnabledInfoLog(true);
	// gameanalytics.GameAnalytics.setEnabledVerboseLog(true)
	gameanalytics.GameAnalytics.configureBuild(rndValue(["0.1.1", "0.1.2", "0.2.0", "1.0.0"]))
	gameanalytics.GameAnalytics.configureUserId(rndValue(["player1", "player2", "player3", "player4"]))

	gameanalytics.GameAnalytics.initialize('d44b1d2fba5674891d45c8fe6e0ade5d', '705df39fa7f91c5a23ea5f926a0fe48b3e924aee');

	gameanalytics.GameAnalytics.addErrorEvent( gameanalytics.EGAErrorSeverity.Debug, "Debug Error. ");
	gameanalytics.GameAnalytics.addErrorEvent( gameanalytics.EGAErrorSeverity.Info, "Info Error. ");
	gameanalytics.GameAnalytics.addErrorEvent( gameanalytics.EGAErrorSeverity.Warning, "Warning Error. ");
	gameanalytics.GameAnalytics.addErrorEvent( gameanalytics.EGAErrorSeverity.Error, "Error Error. ");
	gameanalytics.GameAnalytics.addErrorEvent( gameanalytics.EGAErrorSeverity.Critical, "Critical Error. ");

	map(range(0,10) , () => {
		const theme = rndValue(['theme01', 'theme02', 'default', 'custom'])
		const list = rndValue(['list01', 'list02', 'list03', 'list04', 'list05'])
		const level = rndValue(['level01', 'level02', 'level03', 'level04', 'level05'])
		const board = rndValue(['board01', 'board02', 'board03', 'board04', 'board05'])
		const gender = rndValue(['Male', 'Female'])
		const updateProp = rndValue(['name', 'age'])
		const plan = rndValue(['plan01', 'plan02', 'plan03'])


		gameanalytics.GameAnalytics.addDesignEvent('TimeTaken:Screen:Settings', rndBetween(10, 120));
		gameanalytics.GameAnalytics.addDesignEvent(`TimeTaken:Board:${list}:${level}:${board}`, rndBetween(20, 500));
		gameanalytics.GameAnalytics.addDesignEvent('Settings:Volume', rndBetween(1, 100)); // value from 01 to 100
		gameanalytics.GameAnalytics.addDesignEvent(`Settings:Theme:${theme}`, null);
		gameanalytics.GameAnalytics.addDesignEvent('Game:Start', null);
		gameanalytics.GameAnalytics.addDesignEvent('Session:Start', rndBetween(0, 120)); // start from 0 This will also be fired during first start.
		gameanalytics.GameAnalytics.addDesignEvent('Session:Finish', rndBetween(60, 120));
		gameanalytics.GameAnalytics.addDesignEvent('Game:Duration', rndBetween(60, 500));
		gameanalytics.GameAnalytics.addDesignEvent(`Player:Create:${gender}:${rndBetween(5, 20)}`, null);
		gameanalytics.GameAnalytics.addDesignEvent('Player:Create', rndBetween(1, 15));
		gameanalytics.GameAnalytics.addDesignEvent('Player:Delete', null);
		gameanalytics.GameAnalytics.addDesignEvent(`Player:Update:${updateProp}`, null); // This is to be called for every field change
		gameanalytics.GameAnalytics.addDesignEvent(`Score:Board:${list}:${level}:${board}`, rndBetween(0, 100));
		gameanalytics.GameAnalytics.addDesignEvent(`Game:Subscribed:${plan}`, null);
		gameanalytics.GameAnalytics.addDesignEvent(`Game:SubscriptionExpired:${plan}`, null);
		gameanalytics.GameAnalytics.addDesignEvent('TimeTaken:Session', rndBetween(10, 120));
		gameanalytics.GameAnalytics.addDesignEvent('Score:Session', rndBetween(0, 100));
	})

	return <div className="App">
		<div>Count: { count }</div>
		<div>{ SimpleButton() }</div>
		<div>Refresh ID: { refreshID }</div>
	</div>;
};

export default App;
