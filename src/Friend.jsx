export default function Friend({ friend }) {
    console.log(friend)
    const {name, email, id, phone} = friend
  return (
    <div className="box">
      <h4>Name: {name}</h4>
      <p>Id: {id}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email} </p>
    </div>
  );
}
