import React from 'react';
import styles from "../styles/restStyles/Services.css"

function Services(props) {
    return (
        <div>
            <div className={styles.block}>
                <img src={props.img} alt="time" className={styles.block__img} />
                <h3 className={styles.block__title}>{props.block__title}</h3>
                <p className={styles.block__text}>
                    {props.block__text}
                </p>
            </div>
        </div>
    )
}

export default Services
