import React, { Component } from "react";

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
        this.onSearch = this.onSearch.bind(this);
    };

    onSearch(e) {
        this.props.onSearch(e.target.value);
        // console.log(this.props);
    };

    render () {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={ this.onSearch } />
        );
    };
};