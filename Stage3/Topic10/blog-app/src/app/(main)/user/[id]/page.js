import axios from 'axios';

async function UserDetail({ params }) {
  const { id } = params;

  const res = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" border-2 border-gray-300 p-4 rounded-md">
      {res.data.name}
      {res.data.email}
      {res.data.phone}
      {res.data.website}
      {res.data.address.street}
      {res.data.address.city}
      {res.data.address.zipcode}
      {res.data.company.name}
      {res.data.company.catchPhrase}
      {res.data.company.bs}
      {res.data.company.name}
      {res.data.company.catchPhrase}
      {res.data.company.bs}
      {res.data.company.name}
      {res.data.company.catchPhrase}
      {res.data.company.bs}
    </div>
  );
}

export default UserDetail;
