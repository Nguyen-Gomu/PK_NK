import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css'

Pagination.prototype={
    pagination: PropTypes.object.isRequired,
    onPageChange:PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange:null,
}

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const {page, limit, totalRows} = pagination;
    const totalPages = Math.ceil(totalRows / limit);

    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage);
        }
    }

    return(
        <div className="pagination_container">
            <button 
            className="pagination_btn "
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}    
            >
                <span className="arrow1"><i class="fas fa-arrow-left"></i></span>
                Prev
            </button>

            <button
                className="pagination_btn"
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
            >
                Next   
               <span className="arrow2"> <i class="fas fa-arrow-right"></i></span>
            </button>
        </div>
    )
}

export default Pagination;