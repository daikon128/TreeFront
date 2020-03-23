function treeFetch(url, option) {
    let user = JSON.parse(localStorage.getItem('user'));
    const requestBase = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + user.token
        },
    }

    var sendRequest = Object.assign(requestBase, option)

    // return fetch(`${config.apiUrl}/api/authenticate/`, request)
    return fetch(`http://localhost:8888${url}`, sendRequest)
}

export {
    treeFetch
}
