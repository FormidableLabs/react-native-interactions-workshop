import {
  format,
  parse,
  getTime,
  startOfWeek,
  addDays,
  isSameDay
} from 'date-fns';

import { calendar } from '../theme';
import events from './events';

const { CELL_NUM } = calendar;
const DATE_FORMAT = 'YYYY-MM-dd HH:mm';
const now = new Date();
const parseDate = str => parse(str, DATE_FORMAT, now);

const normalisedEvents = events
  .map(event => {
    const date = parseDate(event.date);
    if (!date) {
      return null;
    }

    const title = event.title || null;
    const speaker = event.speaker || null;
    const company = event.company || null;
    const time = event.time || null;
    const agenda = event.agenda || null;

    return {
      slug: getTime(date),
      title: title || `${event.speaker} ${event.time}`.trim(),
      speaker,
      company,
      agenda,
      date,
      duration: 0.5 // in hours
    };
  })
  .filter(Boolean);

const timestamps = normalisedEvents.map(x => getTime(x.date));
const startDate = new Date(Math.min(...timestamps));

const monday = startOfWeek(startDate, {
  weekStartsOn: 1
});

const data = Array.from({ length: CELL_NUM }).map((_, i) => {
  const date = addDays(monday, i);
  const label = format(date, 'EEE');
  const items = normalisedEvents.filter(event => {
    return isSameDay(date, event.date);
  });

  return {
    date,
    label,
    items
  };
});

export default data;
