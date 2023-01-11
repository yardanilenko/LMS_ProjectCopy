import React, {useMemo} from 'react'
import moment from 'moment'
import {
    Calendar,
    Views,
    momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useEffect} from "react";


const mLocalizer = momentLocalizer(moment)

const ColoredDateCellWrapper = ({children}) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
        },
    })


function DatePicker({ localizer = mLocalizer, ...props }) {
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
        fetch('/events', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                const events = data.map((member) => ({
                    id: member.Event.id,
                    title: member.Event.name,
                    start: new Date(member.Event.start),
                    end: new Date(member.Event.finish),
                    description: member.Event.description,
                }))
               setEvents(events)
            })
    }, []);


    return (
        <div className="height600" {...props}>
            <Calendar
                components={components}
                defaultDate={defaultDate}
                events={events}
                localizer={localizer}
                // max={max}
                showMultiDayTimes
                step={60}
                views={views}
                style={{height: 500}}
            />
        </div>
    );
}


export default DatePicker;
