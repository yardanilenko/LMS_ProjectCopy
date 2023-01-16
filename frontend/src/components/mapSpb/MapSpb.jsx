import React, { useEffect } from 'react';


export default function MapSpb() {

    useEffect(() => {
        function init() {
          // eslint-disable-next-line no-undef
          const map = new ymaps.Map('map', {
            center: [59.943701, 30.360101],
            zoom: 10,
            controls: ['routeButtonControl', 'trafficControl', 'typeSelector', 'fullscreenControl']
          }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true,
          });
                    let control = map.controls.get('routeButtonControl');
          control.routePanel.state.set({
            // Тип маршрутизации.
          type: 'masstransit',
          fromEnabled: true,
          to: 'ул. Кирочная 19, этаж 4, офис 28, (м. Чернышевская (закрыта), м. Площадь Восстания)',
          toEnabled: true
        });
        control.routePanel.options.set({
          // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
          allowSwitch: false,
          // Включим определение адреса по координатам клика.
          // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
          reverseGeocoding: true,
          // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
          types: { masstransit: true, pedestrian: true, taxi: true }
      });

        // eslint-disable-next-line no-undef
        let myPlacemark = new ymaps.Placemark([59.943701, 30.360101], {
            balloonContent: `
                      <div class="balloon">
                        <div class="balloon__title">Elbrus Bootcamp</div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-EhNBfCFQQ3CZ21N7-ianNNb3Z-WDoNTEg&usqp=CAU" alt="..." height="100" width="150"> </br>
                        <a href='https://elbrusboot.camp/' target="_blank">Подробнее</a>
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
            display: "flex", width: '800px', height: '400px',
          }}
        />

  )
}