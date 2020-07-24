import React, {Component} from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        };
        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    };

    onLabelChange(e) {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render () {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={ this.onSubmit } >
                <input id="itemName"
                       placeholder="Enter new item"
                       type="text"
                       className="form-control"
                       autoComplete="off"
                       value={this.state.label}
                       onChange={ this.onLabelChange }
                />
                <button className="btn btn-outline-secondary"
                        disabled={ this.state.label === ''}>
                    Add Item
                </button>
            </form>
        );
    };
};