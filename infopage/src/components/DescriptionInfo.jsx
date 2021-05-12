import React from "react";
import '../App.css';

const Description = () => {
  return (
    <div className="description__info">
      <div className="description__text">
        <p>
          Здійснення повторної покупки напряму залежить від того, з якими
          емоціями клієнт оформлював їх минулі рази. Ми розуміємо важливість
          зручного способу оплати та робимо все необхідне для забезпечення
          комфортних покупок Вашими клієнтами.
        </p>

        <p>
          Ми інтегруємо платіжні системи таким чином, щоб оплата
          проводилась в декілька кліків. З нашої сторони ми також гарантуємо
          безпеку та надійність особистих даних покупців.
        </p>
      </div>
      <div className="description__button">
        <a className="description__contact-button" href="/">
          Зв’яжіться з нами
        </a>
      </div>
    </div>
  );
};
export default Description;
