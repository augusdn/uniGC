export async function addChat(data){
    const response = await fetch('https://asia-east2-unigc-eea69.cloudfunctions.net/api/addChat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            uid: data.uid,
            code: data.code,
            URL: data.URL,
            fullName: data.fullName,
        })
    });
    return await response.json();
}

export async function getChats({code}){
    const response = await fetch('https://asia-east2-unigc-eea69.cloudfunctions.net/api/getChats/'+code);
    console.log(code);
    console.log(response);
    return await response.json();
}

export async function joinChat(data){
    const response = await fetch('https://asia-east2-unigc-eea69.cloudfunctions.net/api/joinChat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            uid: data.uid,
            fullName: data.fullName,
            chatID: data.chatID,
        })
    });
    return await response.json();
}

export async function leaveChat(data){
    const response = await fetch('https://asia-east2-unigc-eea69.cloudfunctions.net/api/leaveChat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            uid: data.uid,
            fullName: data.fullName,
            chatID: data.chatID,
        })
    });
    return await response.json();
}