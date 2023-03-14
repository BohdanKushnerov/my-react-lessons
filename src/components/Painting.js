import PropTypes from 'prop-types';
import defaultImage from "./default.jpg";

export default function Painting({
  imageUrl = defaultImage, 
  title, 
  profileUrl, 
  author = 'Не известно', // по умолчанию, если не прийдет
  price,
  quantity}) {
  // const {url, title, profileUrl, author, price} = props;
  return (
  <div>
    <img src={imageUrl} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{author}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличи'}</p>
    <button type="button">Добавить в корзину</button>
  </div>
  );
  }

  Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }