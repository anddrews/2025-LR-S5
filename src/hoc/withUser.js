export const withUser = (Component, config) => (...args) => {
    const user = {
        name: 'Alex',
        lastName: 'Jhons'
    }

    return <Component {...args} user={user}/>
}


const Boo = ({street, user, Component}) => {
    const boo = {};
    return (
        <div>
            {import.meta.env.VITE_FIREBASE_KEY}
            <div>{street}</div>
            <div>{user.name}</div>
            <Component boo={boo} />
        </div>
    )
}

const BooWithUser = withUser(Boo, {message: 'Hello world'});

