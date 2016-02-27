import React from 'react'
import Filter from '../containers/Filter'
import * as filterTypes from '../constants/FilterTypes'

const FilterList = () => {
    return (
        <div>
        Show:
            <Filter text="All" type={filterTypes.SHOW_ALL} />
            {' '}
            <Filter text="Completed" type={filterTypes.SHOW_COMPLETED} />
            {' '}
            <Filter text="Active" type={filterTypes.SHOW_ACTIVE} />
        </div>
    )
}

export default FilterList