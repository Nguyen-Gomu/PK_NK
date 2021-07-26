import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

Search.prototype={
    onSubmit:PropTypes.func
};

Search.defaultProps = {
    onSubmit:null,
}

function Search(props) {
    const {onSubmit} = props;
    const [SearchName, setSearchName] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchNameChange(e){
        const value = e.target.value;
        setSearchName(value);

        if(!onSubmit) return;

        if (typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                q: value,
            }
            onSubmit(formValues);
        }, 600);
    }

    return(
        <form>
            <input
                type="text"
                value={SearchName}
                onChange={handleSearchNameChange}
                placeholder="Search product"
                className="search-product"
            />
        </form>
    )
}

export default Search;