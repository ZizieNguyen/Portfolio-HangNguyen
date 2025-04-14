import PropTypes from 'prop-types';

export const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt={item.category} className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <p className="work__company">{item.company}</p>
        <i className="uil uil-calendar-alt work__times"> </i>{item.times}
    </div>
  )
}

WorkItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    times: PropTypes.string.isRequired,
  }).isRequired
};