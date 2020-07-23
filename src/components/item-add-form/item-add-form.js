import React, {Component} from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();
        this.state = {
            label: ''
        };
        this.onLabelChange = this.onLabelChange.bind(this);
    };

    onLabelChange(e) {
        this.setState({
            label: e.target.value
        });
    };

    render () {
        return (
            <form
                className="item-add-form d-flex"
                onSubmit={ this.props.onAdded } >
                <input
                    id="itemName"
                    placeholder="Enter new item"
                    type="text"
                    className="form-control"
                    onChange={ this.onLabelChange }
                />
                <button
                    className="btn btn-outline-secondary"
                    onClick={ this.props.onAdded }>
                    Add Item
                </button>
            </form>
        );
    };
};