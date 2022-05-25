$(document).ready(function() {

    const events = [
        {
            title: 'Создание сюжетно-ориентированного арта от начала до',
            type: 'Конференция',
            time: {
                start: [8, 30],
                end: [9, 30]
            },
            day: 1,
            color: 'blue',
            person: {
                avatar: './img/calendar-person.png',
                name: 'Анна Александровна Борисова',
                link: 'https://google.com'
            },
            moreLink: 'https://google.com'
        },
        {
            title: 'Ключевые факторы, увеличивающие доходность digital-проектов',
            type: 'Конференция',
            time: {
                start: [10, 20],
                end: [11, 30]
            },
            day: 1,
            color: 'blue',
            person: {
                avatar: './img/calendar-person.png',
                name: 'Анна Александровна Борисова',
                link: 'https://google.com'
            },
            moreLink: 'https://google.com'
        },
        {
            title: 'Создание сюжетного арта от начала до',
            type: 'Конференция',
            time: {
                start: [11, 0],
                end: [12, 0]
            },
            day: 1,
            color: 'green',
            person: {
                avatar: './img/calendar-person.png',
                name: 'Анна Александровна Борисова',
                link: 'https://google.com'
            },
            moreLink: 'https://google.com'
        },
        {
            title: 'Ключевые факторы, увеличивающие доходность digital-проектов',
            type: 'Конференция',
            time: {
                start: [8, 30],
                end: [10, 0]
            },
            day: 3,
            color: 'green',
            person: {
                avatar: './img/calendar-person.png',
                name: 'Анна Александровна Борисова',
                link: 'https://google.com'
            },
            moreLink: 'https://google.com'
        },
        {
            title: 'Создание сюжетно-ориентированного арта от начала до',
            type: 'Конференция',
            time: {
                start: [8, 30],
                end: [9, 30]
            },
            day: 5,
            color: 'orange',
            person: {
                avatar: './img/calendar-person.png',
                name: 'Анна Александровна Борисова',
                link: 'https://google.com'
            },
            moreLink: 'https://google.com'
        },
        {
            title: 'Создание сюжетно-ориентированного арта от начала до',
            type: 'Конференция',
            time: {
                start: [10, 30],
                end: [11, 30]
            },
            day: 6,
            color: 'purple',
            person: {
                avatar: './img/calendar-person.png',
                name: 'Анна Александровна Борисова',
                link: 'https://google.com'
            },
            moreLink: 'https://google.com'
        },
        {
            title: 'Создание сюжетно-ориентированного арта от начала до',
            type: 'Конференция',
            time: {
                start: [12, 0],
                end: [13, 30]
            },
            day: 1,
            color: 'purple',
            person: {
                avatar: './img/calendar-person.png',
                name: 'Анна Александровна Борисова',
                link: 'https://google.com'
            },
            moreLink: 'https://google.com'
        }
    ];

    initSchedule('#schedule', '#schedule-colors', {
        startTime: [8, 0],
        colors: {
            blue: {
                type: 'Трансляция',
                gradient: 'linear-gradient(180deg, #E2EFFF 0%, #CAE1FF 100%)',
                solid: '#9DC6FF'
            },
            green: {
                type: 'Конференция',
                gradient: 'linear-gradient(180deg, #E6F8DF 0%, #CCF0BD 100%)',
                solid: '#5BBB35'
            },
            orange: {
                type: 'Собрание',
                gradient: 'linear-gradient(180deg, #FFECE2 0%, #FBDDCD 100%)',
                solid: '#E8BEA9'
            },
            purple: {
                type: 'Ответы на вопросы',
                gradient: 'linear-gradient(180deg, #FAEBFF 0%, #EFD9F8 100%)',
                solid: '#D5AFE3'
            }
        }
    }, events);

    schedule();

});

function initSchedule(scheduleIdentifier, scheduleColorsIdentifier, options, events) {
    sortEventsArr(events);
    
    if (events.length < 1) {
        options.endTime = options.startTime.slice();
    } else {
        options.endTime = events[events.length - 1].time.end.slice();
    }

    options.endTime[0] += 2;

    const schedule = document.querySelector(scheduleIdentifier);

    const scheduleHeader = document.createElement('div');
    scheduleHeader.classList.add('schedule__header');

    const scheduleDays = document.createElement('div');
    scheduleDays.classList.add('schedule__days');

    let startDay = new Date();
    startDay.setDate(startDay.getDate() - (startDay.getDay() + 6) % 7);

    const currentDate = new Date();

    const daysIndexes = {
        0: 'пн',
        1: 'вт',
        2: 'ср',
        3: 'чт',
        4: 'пт',
        5: 'сб',
        6: 'вс',
    };

    for (let i = 0; i < 7; i++) {
        const scheduleDay = document.createElement('div');
        scheduleDay.classList.add('schedule__days-item');
        scheduleDay.innerHTML = `${daysIndexes[i]}, ${startDay.getDate()}`;

        if (startDay.getDate() === currentDate.getDate()) {
            scheduleDay.classList.add('schedule__days-item--current');
        }

        scheduleDays.appendChild(scheduleDay);

        startDay.setDate(startDay.getDate() + 1);
    }

    scheduleHeader.appendChild(scheduleDays);
    schedule.appendChild(scheduleHeader);

    const scheduleMain = document.createElement('div');
    scheduleMain.classList.add('schedule__main');

    const scheduleTime = document.createElement('div');
    scheduleTime.classList.add('schedule__time');

    const startTime = options.startTime[0] * 60 + options.startTime[1];
    const endTime = options.endTime[0] * 60 + options.endTime[1];

    for (let time = startTime; time <= endTime; time += 30) {
        const scheduleTimeItem = document.createElement('div');
        scheduleTimeItem.classList.add('schedule__time-item');

        const scheduleTimeItemLabel = document.createElement('div');
        scheduleTimeItemLabel.classList.add('schedule__time-item__label');

        scheduleTimeItemLabel.innerHTML = formatTime(Math.floor(time / 60), time % 60);

        scheduleTimeItem.appendChild(scheduleTimeItemLabel);
        scheduleTime.appendChild(scheduleTimeItem);
    }

    scheduleMain.appendChild(scheduleTime);

    const scheduleCalendar = document.createElement('div');
    scheduleCalendar.classList.add('schedule__calendar');

    const calendarGrid = document.createElement('div');
    calendarGrid.classList.add('schedule__calendar-grid');

    for (let i = 0; i < (endTime - startTime) / 30 * 7; i++) {
        const calendarGridItem = document.createElement('div');
        calendarGridItem.classList.add('schedule__calendar-grid__block');
        calendarGrid.appendChild(calendarGridItem);
    }

    const currentTimeLine = document.createElement('div');
    currentTimeLine.classList.add('schedule__calendar-current-time-line');

    renderCurrentTimeLine(currentTimeLine, options.startTime, options.endTime);
    setInterval(function() {
        renderCurrentTimeLine(currentTimeLine, options.startTime, options.endTime);
    }, 1000 * 60);

    const calendarEvents = document.createElement('div');
    calendarEvents.classList.add('schedule__calendar-events');

    const usedDates = [];

    for (const event of events) {
        if (!(event.time.start[0] * 60 + event.time.start[1] >= options.startTime[0] * 60 + options.startTime[1] &&
            event.time.end[0] * 60 + event.time.end[1] <= options.endTime[0] * 60 + options.endTime[1])) continue;

        const calendarEventsBlock = document.createElement('div');
        calendarEventsBlock.classList.add('schedule__calendar-events__block');
        calendarEventsBlock.classList.add(`schedule__calendar-events__block--col-${event.day}`);

        const eventFromBeginStartTime = event.time.start[0] * 60 + event.time.start[1] - options.startTime[0] * 60 + options.startTime[1];
        const eventFromBeginEndTime = event.time.end[0] * 60 + event.time.end[1] - options.startTime[0] * 60 + options.startTime[1];

        let intersections = 0;

        for (let i = 0; i < usedDates.length; i++) {
            if (event.day === usedDates[i].day && event.time.start[0] * 60 + event.time.start[1] > usedDates[i].start && event.time.start[0] * 60 + event.time.start[1] < usedDates[i].end) {
                intersections += 1 + usedDates[i].intersections;                
            }
        }

        const basicWidth = 14.28;

        if (intersections > 0) {
            let newWidth = basicWidth;
            let additionLeft = 0;

            for (let i = 0; i < intersections; i++) {
                additionLeft += newWidth - 75 * newWidth / 100;
                newWidth = 75 * newWidth / 100;
            }

            calendarEventsBlock.style.width = `${newWidth}%`;
            calendarEventsBlock.style.left = `calc(${event.day - 1} * 14.28% + ${additionLeft}%)`;
        } else {
            calendarEventsBlock.style.left = `calc(${event.day - 1} * 14.28%)`;
        }

        calendarEventsBlock.style.top = eventFromBeginStartTime / 30 * 75 + 'px';
        calendarEventsBlock.style.height = (eventFromBeginEndTime - eventFromBeginStartTime) / 30 * 75 + 'px';

        calendarEventsBlock.style.background = options.colors[event.color].gradient;
        calendarEventsBlock.style.borderColor = options.colors[event.color].solid;

        const blockTitle = document.createElement('div');
        blockTitle.classList.add('schedule__calendar-events__block-title');
        blockTitle.innerHTML = event.title;

        const blockTime = document.createElement('div');
        blockTime.classList.add('schedule__calendar-events__block-time');
        blockTime.innerHTML = `${formatTime(event.time.start[0], event.time.start[1])} - ${formatTime(event.time.end[0], event.time.end[1])}`;

        const blockMore = document.createElement('div');
        blockMore.classList.add('schedule__calendar-events__block-more');

        const blockMoreToolBar = document.createElement('div');
        blockMoreToolBar.classList.add('schedule__calendar-events__block-more__toolbar');

        const blockMoreToolBarEdit = document.createElement('a');
        blockMoreToolBarEdit.classList.add('schedule__calendar-events__block-more__toolbar-edit');

        const blockMoreToolBarEditImg = document.createElement('img');
        blockMoreToolBarEditImg.src = './img/event-toolbar-icons/pen.svg';

        blockMoreToolBarEdit.appendChild(blockMoreToolBarEditImg);
        blockMoreToolBar.appendChild(blockMoreToolBarEdit);

        const blockMoreToolBarDelete = document.createElement('a');
        blockMoreToolBarDelete.classList.add('schedule__calendar-events__block-more__toolbar-delete');

        const blockMoreToolBarDeleteImg = document.createElement('img');
        blockMoreToolBarDeleteImg.src = './img/event-toolbar-icons/trash.svg';

        blockMoreToolBarDelete.appendChild(blockMoreToolBarDeleteImg);
        blockMoreToolBar.appendChild(blockMoreToolBarDelete);

        const blockMoreToolBarClose = document.createElement('a');
        blockMoreToolBarClose.classList.add('schedule__calendar-events__block-more__toolbar-close');

        const blockMoreToolBarCloseImg = document.createElement('img');
        blockMoreToolBarCloseImg.src = './img/event-toolbar-icons/close.svg';

        blockMoreToolBarClose.appendChild(blockMoreToolBarCloseImg);
        blockMoreToolBar.appendChild(blockMoreToolBarClose);

        blockMore.appendChild(blockMoreToolBar);

        const blockMoreTitle = document.createElement('div');
        blockMoreTitle.classList.add('schedule__calendar-events__block-more__title');
        blockMoreTitle.innerHTML = event.type;
        blockMore.appendChild(blockMoreTitle);

        const blockMoreTime = document.createElement('div');
        blockMoreTime.classList.add('schedule__calendar-events__block-more__time');
        blockMoreTime.innerHTML = `${formatTime(event.time.start[0], event.time.start[1])} - ${formatTime(event.time.end[0], event.time.end[1])}`;
        blockMore.appendChild(blockMoreTime);

        const blockMoreDescr = document.createElement('div');
        blockMoreDescr.classList.add('schedule__calendar-events__block-more__descr');
        blockMoreDescr.innerHTML = event.title;
        blockMore.appendChild(blockMoreDescr);

        const blockMorePerson = document.createElement('div');
        blockMorePerson.classList.add('schedule__calendar-events__block-more__person');

        const blockMorePersonImg = document.createElement('img');
        blockMorePersonImg.classList.add('schedule__calendar-events__block-more__person-img');
        blockMorePersonImg.src = event.person.avatar;

        const blockMorePersonLink = document.createElement('a');
        blockMorePersonLink.classList.add('schedule__calendar-events__block-more__person-link');
        blockMorePersonLink.href = event.person.link;
        blockMorePersonLink.innerHTML = event.person.name;

        blockMorePerson.appendChild(blockMorePersonImg);
        blockMorePerson.appendChild(blockMorePersonLink);

        const blockMoreLink = document.createElement('a');
        blockMoreLink.href = event.moreLink;
        blockMoreLink.classList.add('schedule__calendar-events__block-more__link');
        blockMoreLink.innerHTML = 'Подробнее';

        blockMore.appendChild(blockMoreTitle);
        blockMore.appendChild(blockMoreTime);
        blockMore.appendChild(blockMoreDescr);
        blockMore.appendChild(blockMorePerson);
        blockMore.appendChild(blockMoreLink);
        
        calendarEventsBlock.appendChild(blockTitle);
        calendarEventsBlock.appendChild(blockTime);
        calendarEventsBlock.appendChild(blockMore);

        calendarEvents.appendChild(calendarEventsBlock);

        usedDates.push({
            day: event.day,
            start: event.time.start[0] * 60 + event.time.start[1],
            end: event.time.end[0] * 60 + event.time.end[1],
            intersections
        });
    }

    const scheduleCalendarContainer = document.createElement('div');
    scheduleCalendarContainer.classList.add('schedule__calendar-container');
    
    scheduleCalendarContainer.appendChild(calendarGrid);
    scheduleCalendarContainer.appendChild(currentTimeLine);
    scheduleCalendarContainer.appendChild(calendarEvents);

    scheduleCalendar.appendChild(scheduleCalendarContainer);

    scheduleMain.appendChild(scheduleCalendar);

    schedule.appendChild(scheduleMain);

    const colorsBlock = document.querySelector(scheduleColorsIdentifier);

    for (const color in options.colors) {
        const colorsBlockItem = document.createElement('li');
        colorsBlockItem.classList.add('events__calendar-colors__item');

        const colorsBlockItemCircle = document.createElement('div');
        colorsBlockItemCircle.classList.add('events__calendar-colors__item-circle');
        colorsBlockItemCircle.style.background = options.colors[color].gradient;
        colorsBlockItemCircle.style.border = `1px solid ${options.colors[color].solid}`;

        const colorsBlockItemType = document.createElement('div');
        colorsBlockItemType.classList.add('events__calendar-colors__item-type');
        colorsBlockItemType.innerHTML = options.colors[color].type;

        colorsBlockItem.appendChild(colorsBlockItemCircle);
        colorsBlockItem.appendChild(colorsBlockItemType);

        colorsBlock.appendChild(colorsBlockItem);
    }
}

function formatTime(hours, minutes) {
    if (minutes < 10) return `${hours}:0${minutes}`;
    return `${hours}:${minutes}`;
}

function renderCurrentTimeLine(currentTimeLine, startScheduleTime, endScheduleTime) {
    const date = new Date();
    const timeMinutes = date.getHours() * 60 + date.getMinutes();

    const startTimeMinutes = startScheduleTime[0] * 60 + startScheduleTime[1];
    const endTimeMinutes = endScheduleTime[0] * 60 + endScheduleTime[1];

    if (timeMinutes >= startTimeMinutes && timeMinutes <= endTimeMinutes) {
        const currentFromBeginTime = timeMinutes - startTimeMinutes;
        currentTimeLine.style.top = currentFromBeginTime / 30 * 75 + 30 + 'px';
    }
}

function sortEventsArr(events) {
    for (let i = 0; i < events.length; i++) {
        for (let j = i + 1; j < events.length; j++) {
            if (events[i].time.start[0] * 60 + events[i].time.start[1] > events[j].time.start[0] * 60 + events[j].time.start[1]) {
                const tmp = events[i];
                events[i] = events[j];
                events[j] = tmp; 
            }
        }
    }
}

function schedule() {
    $('.schedule__calendar-events__block-title, .schedule__calendar-events__block-time').click(function() {
        const th = $(this);
        const block = th.closest('.schedule__calendar-events__block');

        if (block.hasClass('schedule__calendar-events__block--show-more')) {
            $('.schedule__calendar-events__block').removeClass('schedule__calendar-events__block--show-more');
        } else {
            $('.schedule__calendar-events__block').removeClass('schedule__calendar-events__block--show-more');
            block.addClass('schedule__calendar-events__block--show-more');
        }
    });

    $('.schedule__calendar-events__block-more__toolbar-close').click(function(e) {
        e.preventDefault();
        $('.schedule__calendar-events__block').removeClass('schedule__calendar-events__block--show-more');
    });

    $('.schedule__calendar, .schedule__header').scrollsync({
        x_sync: true
    });

    $('.schedule__calendar, .schedule__time').scrollsync({
        y_sync: true
    });
}