import React from 'react';
import { Provider } from 'react-redux';
import Store from './store/configureStore';
import Router from './Router'

import Theme from './Theme';

const Framework = (props) => {
	return (
		<>
			<Provider store={ Store }>
				<Theme>
					<Router />
				</Theme>
			</Provider>
		</>
	)
}

export default Framework;