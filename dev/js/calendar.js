let calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/19ae092e1c0ff0070a25afa8ea01f910.png',
        awayLogo: '/images/32b68227876100e290a86ee73c2372e7.png',
        homeShort: 'tor',
        awayShort: 'cli',
        time: '20:00',
        matchUrl: '#'
      }
    },
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/31a004456f873765065a43f9614d1fc7.png',
        awayLogo: '/images/ac34caef9fb083ff315c3d59445aea1b.png',
        homeShort: 'bos',
        awayShort: 'hou',
        time: '18:00',
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
