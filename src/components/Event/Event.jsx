import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventDuration, formatEventStart } from 'utils';
import { iconSize } from 'constants';
import css from './Event.module.css';
import { Card, EventName, Info } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);

  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock className={css.icon} size={iconSize.sm} />
        {duration}
      </Info>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
