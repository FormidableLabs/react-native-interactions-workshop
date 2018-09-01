import {
  format,
  parse,
  getTime,
  startOfWeek,
  addDays,
  isSameDay,
  setDate
} from 'date-fns';

import slugify from 'slugify';
import { calendar } from '../theme';
import events from './events';
import speakers from './speakers';

const { CELL_NUM } = calendar;
const DATE_FORMAT = 'YYYY-MM-dd HH:mm';
const baseDate = new Date();
const parseDate = str => parse(str, DATE_FORMAT, baseDate);

const speakerLookup = speakers.reduce(
  (lookup, speaker) => ({
    ...lookup,
    [slugify(speaker.name)]: speaker
  }),
  {}
);

const normalisedEvents = events
  .map(event => {
    const day = event.day || null;
    const date = setDate(parseDate(event.date), day + 1);

    const title = event.title || null;
    const speaker = event.speaker || null;
    const company = event.company || null;
    const agenda = event.agenda || null;
    const duration = event.duration || 0.5; // in hours
    const profile = speaker ? speakerLookup[slugify(speaker)] : undefined;
    const isTalk = !!profile;

    if (!date || (!title && !speaker)) {
      return null;
    }

    return {
      slug: slugify(`${title} ${getTime(date)}`),
      title: title || speaker,
      isTalk,
      speaker: isTalk ? speaker : null,
      profile,
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
  const weekday = format(date, 'EEEE').toUpperCase();
  const label = weekday.slice(0, 3);
  const title = `${weekday.slice(3)}, ${date.getDate() - 1} ${format(
    date,
    'MMM YYYY'
  )}`;

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
