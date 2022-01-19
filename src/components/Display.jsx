import React from 'react'
import Tabs from './Tabs'

const info = [
    {name: "tab1", content: "tab1 text here"},
    {name: "tab2", content: "tab2 text here"},
    {name: "tab3", content: "tab3 text here"}
]
const Display = () => {
    return (
        <Tabs info = {info} />
    )
}

export default Display