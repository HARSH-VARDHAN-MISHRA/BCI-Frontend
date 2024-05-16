import React from 'react'
import './LineHead.css'

const LineHead = ({title}) => {
  return (
    <>
        <div class="lineHead heading">
            <h2>{title}</h2>
        </div>
    </>
  )
}

export default LineHead