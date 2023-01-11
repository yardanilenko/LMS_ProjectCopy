import React, {useMemo} from 'react'
import moment from 'moment'
import {
    Calendar,
    Views,
    momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';


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

    return (
        <div className="height600" {...props}>
            <Calendar
                components={components}
                defaultDate={defaultDate}
                events={[{
                    id: 1,
                    title: 'All Day Event very long title',
                    start: new Date(2023, 0, 11, 10, 30, 0),
                    end: new Date(2023, 0, 11, 12, 30, 0),
                }]}
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
