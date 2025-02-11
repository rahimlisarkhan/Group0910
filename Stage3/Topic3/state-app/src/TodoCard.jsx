import PropTypes from 'prop-types';

function TodoCard({ title, onDelete }) {
  return (
    <div className="list-item">
      <span>{title}</span>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default TodoCard;

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
