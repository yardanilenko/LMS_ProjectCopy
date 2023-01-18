import { Box, Grid, List, ListItem, TableBody, TableCell, tableCellClasses, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { initWikiAC } from '../../store/wiki/actionsCreators';
import ReactMarkdown from 'react-markdown'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const MARCDOWN = `# Парное программирование

Парное программирование - метод разработки программного обеспечения, при котором два программиста работают совместно на одной рабочей станции. Один - "разработчик" пишет код, другой - "наблюдатель", проверяет каждую строку по мере ввода. Время от времени программисты меняются ролями.

## Рекомендации по эффективному парному программированию

Создание технического партнерства
1. Знакомство, выстраивание контакта:
Пообщайтесь с партнёром на общие темы: "Как дела? Как настроение?"
Выясните есть ли что-то, что может помешать совместной работе?

2. Алгоритм парного партнерства и совместного обучения:
Распределите роли "разработчика" и "наблюдателя". Определите временные интервалы для смены зон ответственности.
Какие факторы повысят эффективность совместной работы?
Что может повлиять на партнерство негативно?
Как обучаетесь и справляетесь с поставленными задачами обычно?

3. Совместное планирование:
Определите главные технические цели текущего дня. Или конкретную область знаний, которую необходимо исследовать.
Работая вместе вы достигните результата быстрее и эффективнее, чем действую в одиночку?

4. Поиск сильных и слабых сторон:
Как ваша пара оценивает собственные силы в решении поставленной задачи?
Если обозначить разные уровни знаний в начале работы и распределить зоны ответственности, каждый будет востребован и вовлечен.

5. Планирование исхода событий:
Подумайте как, отпразднуете успех и разработайте план на случай неудач и затруднений (и, конечно, идите до конца!)


Важные правила парного программирования

1. Закройте социальные сети, мессенджеры, электронную почту и отключите все уведомления.

2. Используйте блокноты, доски и флипчарты для записи заметок, это отличный инструмент. 

3. Дискутируйте, решайте промежуточные задачи, фиксируйте вопросы в процесс совместной работы, чтобы позже задать их преподавателю.

4. Не забывайте меняться ролями и практикуйте технику "Pomodoro" (25 минут - активность, 5 минут - отдых). 

5. Старайтесь избегать ненужных разговоров с одногруппниками во время работы. Однако, вы можете присоединиться к другим командам, поделиться знаниями и обсудить стратегии решения задач.

6. Периодически проверяйте выполнение вышеперечисленных пунктов, инспектируя личную эффективность. 

7. Если застряли на месте или потеряли много времени на определенном этапе, обсудите с инструктором способы выхода из тупика. 

Совместная работа - огромная часть опыта, который можно получить в Elbrus. Парное программирование - важный образовательный навык, такой же как любой технический. Работать в партнерстве не просто, поэтому переходите к практике как можно быстрее и прикладывайте ежедневные усилия. 
Однако, возможны трудности из-за особенностей характера и личных качеств участников. Поэтому, если чувствуете, что работа с партнером чрезвычайно сложна и мешает процессу обучения, пожалуйста, сообщите об этом преподавателю.

Общие рекомендации. Обратная связь 
Доносите идеи, указывайте на ошибки, давайте рекомендации конструктивно, конкретно и экологично.
Уважайте вклад партнера в процесс решения поставленных задач.
Будьте искренни и предметны, давая положительную обратную связь.`


export default function Viki() {

    const dispatch = useDispatch();

    const wiki = useSelector((store) => store.wiki);
    console.log("🚀 ~ file: Wiki.jsx:34 ~ Viki ~ wiki", wiki)

    const[idxPage, setIdxPage] = useState(0);

    function getWikiPage(item){
      setIdxPage(item)
    }

    useEffect(() => {
        dispatch(initWikiAC());
      }, []);

      let test = wiki[idxPage]?.page
      console.log("🚀 ~ file: Wiki.jsx:46 ~ Viki ~ test", test)

      const MARCDOWN1 = test;

      const MARCDOWN2 = `${test}`; 
      

  return (
    <Box>
      <Grid container spacing={2} columns={35}>
        <Grid item xs={4}>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
        <TableBody>
            {wiki.map((item, idx) =>
              {return (
              <StyledTableRow key={crypto.randomUUID()}>
                  <StyledTableCell align="center" component="th" scope="row" onClick={() => {getWikiPage(idx)}}>
                      {item.name}
                  </StyledTableCell>
              </StyledTableRow>
              )}
            )}
        </TableBody>
          </List>
      </Grid>
        <Grid item xs={6}>

            {/* {test} */}
            <ReactMarkdown>{MARCDOWN}</ReactMarkdown>
        </Grid>
      </Grid>
    </Box>
  )
}
