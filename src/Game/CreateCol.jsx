// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import './col.css';


const CreateCol = ({ row, col, handleMove, data }) => {
    return (
        <td onClick={ () => handleMove(row, col) }>
            { data }
        </td>
    )
}

CreateCol.defaultProps = {
    data: null
};

CreateCol.propTypes = {
    row: PropTypes.number,
    col: PropTypes.number,
    handleMove: PropTypes.func,
    data: PropTypes.string
};

export default CreateCol;
