import PropTypes from 'prop-types';
import {Event} from "components/Event/Event";
import css from "./EventBoard.module.css";

export const EventBoard = ({events}) => {
  return (
  <div className={css.eventBoard}>
    {events.map(event => (
      <Event 
        key={event.name} 
        name={event.name} 
        location={event.location} 
        speaker={event.speaker}
        type={event.type}
        start={event.time.start}
        end={event.time.end}
      />
    ))}
  </div>
  )
}

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
    }),
    })
  )
}