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