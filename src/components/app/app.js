import React, {Component} from 'react';

import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                this.createTodoItem(1, 'Drink Coffee'),
                this.createTodoItem(2, 'Make React App'),
                this.createTodoItem(3, 'Have a lunch')
            ],
            nextId: 4,
            term: '',
            filter: 'all',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onDone = this.onDone.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.searchKeyword = this.searchKeyword.bind(this);
        this.filterFunction = this.filterFunction.bind(this);
    };

    createTodoItem(nextId, label= "New item" ) {
        return {
            label: label,
            important: false,
            done: false,
            id: nextId
        };
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

    addItem(label) {
        const next_id = this.state.nextId;
        const next_nextId = next_id + 1;
        this.setState(({ todoData }) => {
            const result = [...todoData, this.createTodoItem(next_id, label)];
            console.log(result);
            return {
                todoData: result,
                nextId: next_nextId
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const item = arr[idx];
        const newItem = { ...item, [propName]: !item[propName] }
        return ([
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx+1)
        ]);

    };

    onDone(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onImportant(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    searchKeyword(keyword) {
        this.setState({
            term: keyword
        });
    };

    filterFunction(option) {
        // console.log(option['name']);
        this.setState({
            filter: option
        });
    };

    search(arr, word) {
        if ( word.length === 0) {
            return arr;
        }
        return arr.filter((item) => {
            return item.label.toLowerCase().includes(word.toLowerCase());
        });
    };

    filterItems(arr, text) {
        switch (text) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter((item) => !item.done);
            case 'done':
                return arr.filter((item) => item.done);
            default:
                return arr;
        }
    };

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filterItems(this.search(todoData, term), filter);
        const done_count = todoData.filter(item => item.done).length;
        const have_to_do_count = todoData.length - done_count;
        return (
            <div className="todo-app">
                <AppHeader toDo={have_to_do_count} done={done_count} />
                <div className="top-panel d-flex" >
                    <SearchPanel onSearch={ this.searchKeyword }/>
                    <ItemStatusFilter filter={filter} onFilter={ this.filterFunction } />
                </div>
                <TodoList
                    todos={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onDone }
                    onToggleImportant={ this.onImportant }
                />
                <ItemAddForm onAdded={ this.addItem } />
            </div>
        );
    };
};