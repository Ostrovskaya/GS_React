import React, { useState, useEffect } from 'react'
import {TextField, Button  }from '@material-ui/core';
import MessageList from '@components/MessageList';
import {nanoid} from 'nanoid';
import {user, botMessage} from '@scripts/constants';


const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handlerAddMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, {id: nanoid(), text: message, user }]);
        setMessage('');
    }

    useEffect(() => {
        if ( messages[messages.length - 1]?.user === user) {
            setMessages([...messages, {id: nanoid(), ...botMessage }]);
        }
    }, [messages]);
    return (
        <div css={{ textAlign: 'center' }}>
            <form onSubmit={(e) => handlerAddMessage(e)} >
                <TextField value={message} id="outlined-basic" label="Outlined" variant="outlined" onChange={e => setMessage(e.target.value)}/>
                <div css={{marginTop: '16px'}}>
                    <Button type="submit" variant="outlined" color="primary">
                        Отправить
                    </Button>
                </div>
                <MessageList messages={messages} />
                
            </form>
            
        </div>
    )
}

export default Chat;