class lookAdapter {

    static index() {
        return fetch('http://localhost:4000/api/v1/looks').then(res => res.json())
        }

    static show(id) {
        return fetch(`http://localhost:4000/api/v1/looks/${id}`).then(res => res.json())
    }

    static postLook(stateObj) {
        let postConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: `${stateObj.title}`,
                lookURL: `${stateObj.lookURL}`,
                user_id: `${stateObj.user_id}`
            })
        }
        return fetch('http://localhost:4000/api/v1/looks', postConfig).then(res => res.json())
    }
    
}

export default lookAdapter