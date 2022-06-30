import React from 'react'
import styles from './style.module.css'
import {Button} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.nav_item_list}>
                    <a className={styles.nav_item} href="">Felipe Board</a>
                    <a className={styles.nav_item} href="">Home</a>
                </div>

                <ul className={styles.nav_item_list}>
                    <Button className={styles.nav_item}>Create</Button>
                    <Button className={styles.nav_item}  variant="link">Tutorial</Button>
                    <Button className={styles.nav_item}  variant="link">API</Button>
                    <Button className={styles.nav_item}  variant="link">Contact</Button>

                </ul>
            </header>
        </div>
    )
}

export default Header