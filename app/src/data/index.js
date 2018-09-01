import {
  format,
  parse,
  getTime,
  startOfWeek,
  addDays,
  isSameDay,
  setDate
} from 'date-fns';

import { calendar } from '../theme';
import events from './events';

const { CELL_NUM } = calendar;
const DATE_FORMAT = 'YYYY-MM-dd HH:mm';
const baseDate = new Date();
const parseDate = str => parse(str, DATE_FORMAT, baseDate);

const normalisedEvents = events
  .map(event => {
    const day = event.day || null;
    const date = setDate(parseDate(event.date), day + 1);

    if (!date) {
      return null;
    }

    const title = event.title || null;
    const speaker = event.speaker || null;
    const company = event.company || null;
    const agenda = event.agenda || null;
    const duration = event.duration || 0.5; // in hours

    return {
      slug: getTime(date),
      title: title || `${event.speaker} ${event.time}`.trim(),
      speaker,
      company,
      agenda,
      date,
      duration
    };
  })
  .filter(Boolean);

const monday = startOfWeek(normalisedEvents[0].date, {
  weekStartsOn: 1
});

const data = Array.from({ length: CELL_NUM }).map((_, i) => {
  const date = addDays(monday, i);
  const label = format(date, 'EEEE').toUpperCase().slice(0, 3);
  const title = `, ${format(date, 'd MMM YYYY')}`;

  const items = normalisedEvents.filter(event => {
    return isSameDay(date, event.date);
  });

  return {
    date,
    label,
    title,
    items
  };
});

export default data;
