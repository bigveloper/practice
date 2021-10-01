const data = {
    WhyJ: {
        name: 'YJ',
        description: 'I Like a  React',
    },
    YJ: {
        name: 'WhyJ',
        description: 'I Do Love FrontEnd',
    },
};
const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>where is user?</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;
