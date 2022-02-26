const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: keyword => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then(res =>
      res.json()
    );
  },
  fetchCatDetails: id => {
    return fetch(`${API_ENDPOINT}/api/cats/${id}`).then(res =>
      res.json()
    );
  }
};

const requestCats = async(keyword) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
    if (response.ok){
      const cats = await response.json();
      return cats
    }
    throw new Error("API 연동 에러")
  } catch (e) {
    console.warn(e);
  }
}
const requestCatDetails = async(id) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
    if (response.ok){
      const detail = await response.json();
      return detail
    }
    throw new Error("API 연동 에러")
  } catch (e) {
    console.warn(e);
  }
}


