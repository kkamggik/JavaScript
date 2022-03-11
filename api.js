const API_END_POINT = API_END_POINT;

export const request = async(url, options = {}) => {
    try{
        const fullURL = `${API_END_POINT}${url}`;
        const response = await fetch(fullURL, options);
        if(response.ok) {
            const json = response.json();
            return json;
        }
        throw new Error('API 연동 에러')
    }catch(e){
        alert(e.message)
    }
}