import React from 'react'
import Topbar from './Topbar'
import Content from './Content'
import { useState } from 'react'

function ContentLayout(props) {

    const { teacher } = props
    const [open, setOpen] = useState(false)
    function toggle() {
        setOpen(!open)
    }

    return (
        <div>
            <Topbar eve={open} cls={toggle} teacher={teacher} />
            <Content teacher={teacher} />
        </div>
    )
}

export default ContentLayout