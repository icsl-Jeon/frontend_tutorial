import React from 'react'
import styles from './style.module.css'
import {Button} from "react-bootstrap";

const Header = () => {
    return (
        <header className="shadow-sm">
            <div className="d-flex p-2 gap-3 bg-white justify-content-center">
                <div className="d-flex pe-xxl-5">
                    <div className={styles.nav_item} href="">FELIPE BOARD</div>
                </div>

                <form className="flex-grow-1 me-3 mt-1" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                </form>

                <div className="d-flex ps-xl-5">
                    <Button className={styles.nav_item}>Create</Button>
                    <div className={styles.nav_item}>Tutorial</div>
                    <div className={styles.nav_item}>API</div>
                    <div className={styles.nav_item}>Contact</div>
                </div>
            </div>
        </header>

    )
}

export default Header