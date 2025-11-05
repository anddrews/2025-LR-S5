import { Component } from 'react';
// import styles from 'button.module.css';
const styles = {};
export const Button = ({variant = 'primary', size = 'medium', label, icon, ...rest}) => (
    <button
     className={`${styles.button} ${styles[variant]} ${styles[size]}`} {...rest}
    >
     {label}
    </button>
)