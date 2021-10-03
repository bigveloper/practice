const data = {
    WhyJ: {
        name: 'YJ',
        desctiption: 'I Like a React',
    },
    YJ: {
        name: 'WyhJ',
        desctiption: 'I Like a Vue',
    },
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>not User</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.desctiption}</p>
        </div>
    );
};

export default Profile;
