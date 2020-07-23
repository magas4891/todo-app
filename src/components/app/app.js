import React, {Component} from 'react';

import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {label: 'Drink Coffee', id: 1},
                {label: 'Make React App', id: 2},
                {label: 'Have a lunch', id: 3}
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
    };

    deleteItem(id) {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1)
            const result = [...before, ...after]
            return {
                todoData: result
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex" >
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={ this.deleteItem }/>
            </div>
        );
    };
};