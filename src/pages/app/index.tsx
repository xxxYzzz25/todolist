import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import TodosContainer from 'pages/todos';

interface IAppProps {
  store: Store;
}

export const App: React.FC<IAppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <TodosContainer className="true" />
    </Provider>
  );
};
