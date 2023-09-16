import React from 'react';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

interface AppState {
  // component level states
  fetching: boolean;
}
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo) => {
      return <div key={todo.id}> {todo.title}</div>;
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        {' '}
        <button onClick={this.onButtonClick}> Fetch </button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
