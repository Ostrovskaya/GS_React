import React from 'react';
import styles from "./chatList.module.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const ChatList = ({anchorEl, handleClose}) => {
    return (
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Room 1</MenuItem>
            <MenuItem onClick={handleClose}>Room 2</MenuItem>
            <MenuItem onClick={handleClose}>Room 3</MenuItem>
        </Menu>
    );
};

export default ChatList