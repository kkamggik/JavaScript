const API_END_POINT = `https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products`;

export const request = async(url, options = {}) => {
    try {
        const fullURL = `${API_END_POINT}${url}`;
        const response = await fetch(fullURL, options)
        if(response.ok) {
            const json = response.json();
            return json;
        }
        throw new Error('API 연동 실패');
    }catch(e){
        alert(e.message);
    }
}