


const UserCard = (props) => {
    return (
        <>
            <h1>Hello, {props.User}</h1>
            <span>Your Email is: {props.Email}</span>
        </>
    );
};


export default UserCard;
