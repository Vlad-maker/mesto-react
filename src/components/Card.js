import React from 'react';
export default function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <li
            className="card">
            <button
                className="card__deletion"
            />
            <button
                className="card__open-button"
                type="button"
                aria-label="Открыть"
                onClick={handleCardClick}>
                <img
                    className="card__photo"
                    src={props.link}
                    alt={props.name}
                />
            </button>
            <div
                className="card__description">
                <h2
                    className="card__title">{props.name}
                </h2>
                <div
                    className="card__like-number">
                    <button
                        className="card__like"
                        type="button"
                        aria-label="Нравится"/>
                    <p
                        className="card__like-number">{props.likes.length}
                    </p>
                </div>
            </div>
        </li>
    );
}