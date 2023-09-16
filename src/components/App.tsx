import React from 'react';
import { Todo, deleteTodo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
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
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo) => {
      return <div onClick={() => this.onTodoClick(todo.id)}  key={todo.id}> {todo.title}</div>;
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

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo  })(_App);
