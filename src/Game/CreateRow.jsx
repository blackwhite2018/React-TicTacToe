// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import CreateCol from './CreateCol.jsx'

const CreateRow = ({ cols, row, handleMove }) => {
    return (
        <tr>
            {
                cols.map((col, index) =>
                    <CreateCol
                        row={ row }
                        col={ index }
                        handleMove={ handleMove }
                        key={ index }
                        data={ col }
                    />
                )
            }
        </tr>
    );
}

CreateRow.propTypes = {
    cols: PropTypes.array,
    row: PropTypes.number,
    handleMove: PropTypes.func
};

export default CreateRow;