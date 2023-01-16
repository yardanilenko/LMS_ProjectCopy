import React, { useEffect } from 'react';


export default function MapMsk() {

    useEffect(() => {
        function init() {
          // eslint-disable-next-line no-undef
          const map = new ymaps.Map('map', {
            center: [55.706573, 37.597091],
            zoom: 10,
            controls: ['routeButtonControl']
          }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true,
          });
        //   map.controls.remove('searchControl'); // удаляем поиск
        //   map.controls.remove('trafficControl'); // удаляем контроль трафика
        //   map.controls.remove('typeSelector'); // удаляем тип
        //   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
          // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        //   map.controls.remove('rulerControl'); // удаляем контрол правил
        //   map.controls.remove('zoomControl');
        //   dispatch(getPlacesThunk());
        //   setMyMap(map);
        // eslint-disable-next-line no-undef
        let myPlacemark = new ymaps.Placemark([55.706573, 37.597091], {
            balloonContent: `
                      <div class="balloon">
                        <div class="balloon__title">Elbrus Bootcamp</div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-EhNBfCFQQ3CZ21N7-ianNNb3Z-WDoNTEg&usqp=CAU" alt="..." height="100" width="150"> </br>
                        <a href='https://elbrusboot.camp/'>Подробнее</a>
                      </div>
                      `,
          }, {
            iconLayout: 'default#imageWithContent', // Необходимо указать данный тип макета.
            iconImageHref: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png', // Своё изображение иконки метки.
            iconImageSize: [40, 40], // Размеры метки.
            iconImageOffset: [-24, -24], // Смещение левого верхнего угла иконки относительно, её "ножки" (точки привязки).
            iconContentOffset: [15, 15], // Смещение слоя с содержимым относительно слоя с картинкой.
          });
        map.geoObjects.add(myPlacemark);
        }
        // eslint-disable-next-line no-undef
        ymaps.ready(init);
      }, []);
  return (
        <div
          id="map"
          className="map"
          style={{
            display: "flex", width: '400px', height: '350px',
          }}
        />

  )
}
