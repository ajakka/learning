import axios from 'axios';

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import { Text } from 'react-native';

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = (state, action) => {
	return action.data;
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
 
let store = createStore(persistedReducer);

let persistor = persistStore(store);

const App: () => Node = () => {

	const [data, setData] = useState(() => JSON.stringify(store.getState()));

	useEffect(()=> {
		const unsub = store.subscribe(() => {
			setData(JSON.stringify(store.getState()));
		});

		axios("https://openlibrary.org/works/OL45883W.json")
			.then(res => {
				const resultString = JSON.stringify(res.data);

				store.dispatch({
					type: "addstate",
					data: resultString
				});

				// setData(resultString);
			})
			.catch(e=> {
				setData(JSON.stringify(store.getState()));
			});

			
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Text>{data}</Text>
			</PersistGate>
		</Provider>
	);
};


export default App;
