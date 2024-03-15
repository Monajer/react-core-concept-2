export default function Friend({friend}) {
    console.log(friend);
    const {name, email} = friend
    return (
        <div className="box">
            <h3>Friend Name: {name}</h3>
            <p>email: {email}</p>
        </div>
    )
}