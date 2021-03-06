
class UserAdapter {

    static index() {
        return fetch('http://localhost:4000/api/v1/users').then(res => res.json())
    }

    static showUser(userId) {
        return fetch(`http://localhost:4000/api/v1/users/${userId}`).then(res => res.json())
    }

    static postUser(username) {

        let postConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: `${username}`
            })
        }
        return fetch('http://localhost:4000/api/v1/users', postConfig).then(res => res.json())
    }

    static deleteUser(userId) {
        return fetch(`http://localhost:4000/api/v1/users/${userId}`, { method: 'DELETE' })
    } 
}

export default UserAdapter