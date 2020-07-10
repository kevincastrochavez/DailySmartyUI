import { Field, reduxForm } from "redux-form";
import React, { Component } from 'react';

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log("handle query", query);
    }

    renderInput(field) {
        return <input type="text" placeholder="Search Daily Smarty" {...field.input} />
    }

   render() {

    const { handleSubmit } = this.props;
       return (
           <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
               <Field name="query" component={this.renderInput}/>
           </form>
       );
   };
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

export default SearchBar;