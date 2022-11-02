import "./Item.css"
import { useState } from "react";

const Item = ({ card }) => {
    const [showLogo, setshowLogo] = useState(true);

    const { name, img, options } = card;

    const handleClick = () => {
        setshowLogo(!showLogo)
    };

    return (
        <div className="card" onClick={handleClick}>
            {showLogo ? (
                <div>
                    <img className="card-logo" src={img} alt="" />
                    <h3 className="card-title">{name}</h3>
                </div>) : (
                <ul className="list">
                    {
                        options.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })}
                </ul>
            )}
        </div>
    )
}

export default Item