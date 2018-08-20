class LinkAdapter{
     static postLink(stateObj) {
        let postConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                article: `${stateObj.article}`,
                linkURL: `${stateObj.linkURL}`,
                look_id: `${stateObj.look_id}`
            })
        }
         return fetch('http://localhost:4000/api/v1/links', postConfig).then(res => res.json()).then(console.log)
    }
}

export default LinkAdapter