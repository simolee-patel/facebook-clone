import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebarrow.css'
function SidebarRow({ src, Icon, title }) {
    return (
        <div className='sidebarrow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
