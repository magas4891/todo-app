import React, { Component } from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         done: false,
    //         important: false,
    //     };
    //     this.onMarkDone = this.onMarkDone.bind(this);
    //     this.onMarkImportant = this.onMarkImportant.bind(this);
    // };
    //
    // onMarkDone() {
    //     this.setState(({ done }) => {
    //         return {
    //             done: !done
    //         };
    //     });
    // };
    //
    // onMarkImportant() {
    //     this.setState(({ important }) => {
    //         return {
    //             important: !important
    //         };
    //     });
    // };

    render() {
        const { label, done, important, onDeleted, onToggleDone, onToggleImportant } = this.props;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        };
        if (important) {
            classNames += ' important';
        };
        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={ onToggleDone }>
                    {label}
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={ onToggleImportant }>
                <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={ onDeleted }>
                <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };
};