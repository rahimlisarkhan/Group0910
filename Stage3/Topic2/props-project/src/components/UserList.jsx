import PropTypes from 'prop-types';
import Image1 from '../assets/images/flower.png';
import CalendarIcon from '../assets/icons/calendar.svg?react';
import { FaUserAlt } from 'react-icons/fa';

function UserList({ data }) {
  console.log(data);

  const imgUrl =
    'https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4f492b22-2d29-4360-80a6-79879487c7b7-e07922e.jpg?quality=90&fit=700,466';

  // document.title = 'React Lesson';

  const content = data.map((item, index) => {
    return (
      <li key={'user' + index}>
        {item.name} {item.age}
      </li>
    );
  });

  console.log('content', content);

  return (
    <div>
      UserList
      <img width={100} src={imgUrl} />
      <img width={100} src={Image1} />
      <CalendarIcon width={80} height={80} style={{ color: 'red' }} />
      <FaUserAlt fontSize="46" color="red" />
      {data.length ? <ul>{content}</ul> : <p>User is empty</p>}
    </div>
  );
}

export default UserList;

UserList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
    })
  ).isRequired,
};
