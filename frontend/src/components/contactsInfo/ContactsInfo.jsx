import { Box } from '@mui/material'
import React from 'react'

export default function ContactsInfo() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
            <h2>Контакты</h2>
            <h3>Телефон: +7 499 938-68-24</h3>
            <h3><a href='https://t.me/elbrusbootcamp1' rel="noreferrer" target="_blank">Telegram</a></h3>
            <h3><a href='https://elbrusboot.camp/contacts/' rel="noreferrer" target="_blank">info@elbrusboot.camp</a></h3>
        </Box>
        <Box gridColumn="span 6">
            <img src="https://elbrusboot.camp/static/a442d80af9930674a0baaf0ee1fecc9b/dfad1/msk.webp" alt="..." height="200" width="200"/>
            <h4>Кампус в Москве</h4>
            <h5>ул.Орджоникидзе, д. 11 стр. 10 (м. Ленинский проспект)</h5>
            <h4><a href='https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.597140%2C55.706465&mode=usermaps&source=mapframe&um=constructor%3A6afbef5ed5bffac961b0a815bd82d46540beea3d267025cfdeec776b808895ab&utm_source=mapframe&z=16' rel="noreferrer" target="_blank">Посмотреть на карте</a></h4>
        </Box>
        <Box gridColumn="span 6">
            <img src="https://elbrusboot.camp/static/75ef81ea306b842701b2f232b3dba1db/dfad1/spb.webp" alt="..." height="200" width="200"/>
            <h4>Кампус в Санкт-Петербурге</h4>
            <h5>ул. Кирочная 19, этаж 4, офис 28, (м. Чернышевская (закрыта), м. Площадь Восстания)</h5>
            <h4><a href='https://yandex.ru/maps/2/saint-petersburg/?from=mapframe&ll=30.359583%2C59.944017&mode=usermaps&source=mapframe&um=constructor%3Aeaf4907102008782c73bf7ae5a9816cfdaa668416c094991b8c8e7faa6b6d853&utm_source=mapframe&z=17.11' rel="noreferrer" target="_blank">Посмотреть на карте</a></h4>
        </Box>
    </Box>
  )
}
