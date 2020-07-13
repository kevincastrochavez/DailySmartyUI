import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
    }

    renderInput(field) {
        return <input type="text" placeholder="&#xf002; Search Daily Smarty" {...field.input} />
    }

    render() {

    const { handleSubmit } = this.props;
        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="search-bar__wrapper">
                        <Field name="query" component={this.renderInput}/>
                        <p>Press return to search</p>
                    </div>
            </form>
        );
   };
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;