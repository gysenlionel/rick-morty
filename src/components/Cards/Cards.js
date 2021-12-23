import React from 'react'
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {

    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x
            return (<div key={id} className="col-4 position-relative mb-4">
                <div className={styles.cards}>
                    <img src={image} alt="" className={`${styles.img} img-fluid`} />
                    <div style={{ padding: "10px" }} class="content"></div>
                    <div class="fs-4 fw-bold mb-4">{name}</div>
                    <div class="">
                        <div class="fs-6">Last location</div>
                        <div class="fs-5">{location.name}</div>
                    </div>
                </div>
                {(() => {
                    if (status === "Dead") {
                        return (
                            <div class={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                        );
                    }
                    else if (status === "Alive") {
                        return (
                            <div class={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                        );
                    } else {
                        return (
                            <div class={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                        );
                    }
                })()}

            </div>);
        });
    } else {
        display = "NO Characters Found :/"
    }
    return (
        <>{display}</>
    )
}

export default Cards