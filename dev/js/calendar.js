let calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/4ead8b11dd6fecdfb3ae789f2a4ab8af.png',
        awayLogo: '/images/5f9e9d3862d184bc6a36f384c1dd3ee9.png',
        homeShort: 'tor',
        awayShort: 'bos',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/4ead8b11dd6fecdfb3ae789f2a4ab8af.png',
        awayLogo: '/images/5f9e9d3862d184bc6a36f384c1dd3ee9.png',
        homeShort: 'tor',
        awayShort: 'bos',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
     {
      start: '2025-08-10',
      extendedProps: {
        homeLogo: '/images/4ead8b11dd6fecdfb3ae789f2a4ab8af.png',
        awayLogo: '/images/5f9e9d3862d184bc6a36f384c1dd3ee9.png',
        homeShort: 'tor',
        awayShort: 'bos',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-16',
      extendedProps: {
        homeLogo: '/images/4ead8b11dd6fecdfb3ae789f2a4ab8af.png',
        awayLogo: '/images/5f9e9d3862d184bc6a36f384c1dd3ee9.png',
        homeShort: 'tor',
        awayShort: 'bos',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
  ],
  eventContent: function (arg) {
    const { homeLogo, awayLogo, homeShort, awayShort, time, matchUrl } = arg.event.extendedProps;

    return {
      html: `
        <div class="event-wrapper">
          <div class="event-top">
            <a href="${matchUrl}"  class="team">
              <img src="${homeLogo}" alt="${homeShort}" class="team-logo" />
              <div class="team-code">${homeShort}</div>
            </a>
            <div class="time">${time}</div>
            <a href="${matchUrl}" class="team">
              <img src="${awayLogo}" alt="${awayShort}" class="team-logo" />
              <div class="team-code">${awayShort}</div>
            </a>
          </div>
          <div class="event-bottom">
            <a href="${matchUrl}" class="match-center-btn">Match center</a>
          </div>
        </div>
      `
    };
  }
});

calendar.render();
