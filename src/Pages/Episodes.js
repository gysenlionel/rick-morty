import React, { useState, useEffect } from 'react'

const Episodes = () => {

    let [id, setId] = useState(1)
    let api = `https://rickandmortyapi.com/api/episode/${id}`
    let [info, setInfo] = useState([]);
    console.log(info)
    useEffect(() => {

        (async function () {
            let response = await fetch(api)
            let data = await response.json()
            setInfo(data)

        })()
    }, [api])
    return (
        <div>
            The episodes are here
        </div>
    )
}

export default Episodes
