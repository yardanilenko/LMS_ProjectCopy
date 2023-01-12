import React, {useMemo, useEffect} from 'react'
import {
    Calendar,
    Views,
    dateFnsLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import ru from 'date-fns/locale/ru'

const locales = {
    'ru': ru,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const messages = {
        week: 'Неделя',
        work_week: 'Рабочая неделя',
        day: 'День',
        month: 'Месяц',
        previous: 'Предыдущий',
        next: 'Следующий',
        today: 'Сегодня',
        agenda: 'Повестка дня',
        showMore: (total) => `+${total} еще`,
    }

const ColoredDateCellWrapper = ({children}) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
        },
    })


function DatePicker({...props }) {
    const {components, defaultDate, views} = useMemo(
        () => ({
            components: {
                timeSlotWrapper: ColoredDateCellWrapper,
            },
            defaultDate: new Date(),
            views: Object.keys(Views).map((k) => Views[k]),
        }),
        []
    )

    const [events, setEvents] = React.useState([]);

    useEffect(() => {
        fetch('/api/events', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                const events = data.map((member) => ({
                    title: member.Event.name,
                    start: new Date(member.Event.start),
                    end: new Date(member.Event.finish),
                    description: member.Event.description,
                    //TODO: add output of description
                }))
                console.log(events)
               setEvents(events)
            })
    }, []);


    return (
        <div className="height600" {...props}>
            <Calendar
                culture="ru"
                components={components}
                defaultDate={defaultDate}
                events={events}
                localizer={localizer}
                // max={max}
                showMultiDayTimes
                step={60}
                views={views}
                style={{height: 700}}
                messages={messages}
            />
        </div>
    );
}


export default DatePicker;
