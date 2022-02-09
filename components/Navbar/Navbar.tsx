/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import Link from 'next/link'
import InputField from 'components/atoms/InputField'
import styles from './Navbar.module.scss'

function Navbar() {

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar_container}>
        <div className={styles.Navbar_section}>
          <Link href="/">
            <a className={styles.Navbar_title}>MSH.Market</a>
          </Link>
          <InputField
            borderRadius="1.6rem"
            height=".2rem"
            width="20rem"
            placeholder="Start typing for searching..."
            type="text"
          />
          <Link href="/landing">
            <a className={styles.Navbar_btn}> Products</a>
          </Link>
          <Link href="/landing">
            <a className={styles.Navbar_btn}>Cart</a>
          </Link>

          <div className={styles.Navbar_buttons}>

            <Link href="/landing">
              <a className={styles.Navbar_btn}>Login</a>
            </Link>
            <Link href="/landing">
              <a className={styles.Navbar_btn}>Register</a>
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}
export default Navbar
