import React from 'react'

export default function Heading({title}) {
    return (
        <div className = "row">
            <div className = "col mb-4">
                <h1 className = "display-3 text-center text-info">{title}</h1>
            </div>
        </div>
    )
}
