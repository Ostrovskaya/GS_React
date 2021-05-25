import React, { useState} from 'react';
import styles from "./header.module.css";
import Button from '@material-ui/core/Button';
import ChatList from '@components/ChatList';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    return (
        <div className={styles.header}>                
            <h1>Добро пожаловать в чат!</h1>
            <Button 
                onClick={event => setAnchorEl(event.currentTarget)} 
            >
                Список комнат
            </Button>
            <ChatList anchorEl={anchorEl} handleClose={()=>setAnchorEl(null)}/>
        </div>
    );
};

export default Header