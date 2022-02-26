const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.autofocus = "true";

    $searchInput.addEventListener("keyup", e => {
      if (e.key === "Enter") {
        onSearch(e.target.value);
        let arr = JSON.parse(localStorage.getItem("keywords"))
        if(arr.length >= 5){
          arr.pop()
        }
        arr.unshift(e.target.value)
        localStorage.setItem("keywords", JSON.stringify(arr));
      }
    });

    $searchInput.addEventListener("click", e => {
      if(e.target.value != ''){
        e.target.value = ''
      }
    })

    console.log("SearchInput created.", this);
  }
  render() {}
  
}
