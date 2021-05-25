import React from 'react';
import styles from "./layout.module.css";

const Layout = ({children}) => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
};

export default Layout 