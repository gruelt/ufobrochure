import * as React from 'react';
import Badge from '@mui/material/Badge';


export default function SimpleBadge(props) {
    return (
         <Badge badgeContent={props.count} max={999} color="primary">

                </Badge>

    );
}