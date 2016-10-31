/* eslint no-console: 0, complexity: 0 */
'use strict';
(function(window, calendar) {

    //* Only listed below formats avaliable.
    //*
    //* - YYYYMMDD
    //* - YYYY/MM/DD
    //* - YYYY-MM-DD
    //* - YYYY/MM/DD HH:mm:SS
    //* - YYYY-MM-DD HH:mm:SS
    //TODO: 해당부분 수정 요망.
    var a = new Date();
    var currentDate = a.getFullYear() + '-' + (a.getMonth() + 1) + '-' + a.getDate() + ' ';

    var calendarSet = {
        '1': {
            color: '#e8e8e8',
            bgColor: '#585858',
            render: false
        },
        '2': {
            color: '#282828',
            bgColor: '#dc9656',
            render: false
        },
        '3': {
            color: '#a16946',
            bgColor: '#ab4642',
            render: false
        }
      };

    var cal1, cal2, cal3, cal4, cal5, cal6

    cal1 = calendar.SplitCalendar({
        defaultView: 'day',
        template: {
            time: function(model) {
                console.log(model)
                return model.title + model.origin.starts + '~' + model.origin.ends;
            }
        },
        renderStartDate: currentDate + '11:00:00',
        renderEndDate: currentDate + '12:00:00',
        calendarColor: calendarSet
    }, document.getElementById('calendar1'));

    cal1.createEvents([{
        id: '1',
        calendarID: '1',
        title: '스크럼',
        category: 'time',
        dueDateClass: '',
        starts: currentDate + '09:40:00',
        ends: currentDate + '10:40:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'time',
        dueDateClass: '',
        starts: currentDate + '15:00:00+09:00',
        ends: currentDate + '20:40:59+09:00'
    }, {
        id: '2123',
        calendarID: '3',
        title: '[3홍길동]연차',
        category: 'time',
        dueDateClass: '',
        starts: currentDate + '16:00:00+09:00',
        ends: currentDate + '16:59:59+09:00'
    }], true);

    cal1.render();

    cal2 = calendar.SplitCalendar({
        defaultView: 'day',
        template: {
            time: function(model) {
                return model.title + model.origin.starts + '~' + model.origin.ends;
            }
        },
        renderStartDate: currentDate + '11:00:00',
        renderEndDate: currentDate + '14:00:00',
        calendarColor: calendarSet
    }, document.getElementById('calendar2'));

    cal2.createEvents([{
        id: '1',
        calendarID: '1',
        title: '스크럼',
        category: 'time',
        dueDateClass: '',
        starts: currentDate + '11:40:00+09:00',
        ends: currentDate + '13:40:00+09:00'
    }, {
        id: '2',
        calendarID: '2',
        title: '[홍길동]연차',
        category: 'time',
        dueDateClass: '',
        starts: currentDate + '09:00:00+09:00',
        ends: currentDate + '15:40:59+09:00'
    }, {
        id: '2123',
        calendarID: '3',
        title: '[3홍길동]연차',
        category: 'time',
        dueDateClass: '',
        starts: currentDate + '10:00:00+09:00',
        ends: currentDate + '20:59:59+09:00'
    }], true);

    cal2.render();


    window.cal = cal;
})(window, ne.dooray.calendar);
