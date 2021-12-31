import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {

    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x
            return (
                <Link
                    style={{ textDecoration: "none" }}
                    to={`${page}${id}`}
                    key={id} className="col-lg-4 col-md-6 col-12 position-relative text-dark mb-4">
                    <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                        <img src={image} alt="" className={`${styles.img} img-fluid`} />
                        <div style={{ padding: "10px" }} className="content "></div>
                        <div className="fs-4 fw-bold mb-4 mx-2">{name}</div>
                        <div className="mx-2">
                            <div className="fs-6">Last location</div>
                            <div className="fs-5 mb-2">{location.name}</div>
                        </div>
                    </div>
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                            );
                        }
                        else if (status === "Alive") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                            );
                        } else {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                            );
                        }
                    })()}

                </Link>);
        });
    } else {
        display = "NO Characters Found :/"
    }
    return (
        <>{display}</>
    )
}

export default Cards