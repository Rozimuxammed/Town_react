import React, { useState } from 'react'

function Cards({ setLink, link, item }) {
    const [slice, setrSlice] = useState(false)
    return (
        <div className='cards'>
            <div className="card_img">
                <img src={item.image} alt="" />
            </div>
            <div className="card_about">
                <div className="title">
                    <h2>{item.name}</h2> <p>{item.price} $</p>
                </div>
                <div className="text">
                    <p>{!slice ? `${item.info.slice(0, 100)}...` : item.info} <span onClick={() => {
                        setrSlice(!slice)
                    }}>{slice ? "Show Less":"Read More"}</span></p>
                    <button onClick={() => {
                        const filterTrash = link.filter((el) => {
                            return el.id != item.id
                        })
                        setLink(filterTrash)
                    }}>No Interested</button>
                </div>
            </div>
        </div>
    )
}

export default Cards