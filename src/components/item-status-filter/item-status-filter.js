import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    render() {
        const { onFilter, filter } = this.props;
        const button = this.buttons.map(({ name, label}) => {
            const isActive = filter === name;
            const clazz = (isActive) ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type="button"
                        className={"btn " + clazz}
                        onClick={ () => onFilter(name) }
                        key={name}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {button}
            </div>
        );
    };
};
