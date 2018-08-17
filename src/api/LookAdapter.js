class lookFetch {

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
        return fetch(lookEndpoint, postConfig).then(res => res.json()).then(console.log)
    }
    
}

export default lookFetch