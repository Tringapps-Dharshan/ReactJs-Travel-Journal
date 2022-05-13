import React from 'react'
import data from '../Data/data'
import CardDetails from './CardDetails'
function Content() {
    return (
        <div>
            {data.length>0 && <CardDetails details={data}/>}
            {data.length && <p className='display-error'>No data to display</p>}
        </div>
    )
}

export default Content