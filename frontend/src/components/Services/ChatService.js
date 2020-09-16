export async function addChat(data){
    const response = await fetch('https://asia-east2-unigc-eea69.cloudfunctions.net/api/addChat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            owner: data.owner,
            code: data.code,
            URL: data.URL,
            time: data.time,
        })
    });
    return await response.json();
}