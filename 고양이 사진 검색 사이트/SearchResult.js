class SearchResult {
    $searchResult = null;
    data = null;
    loading = false;
    onClick = null;
  
    constructor({ $target, initialData, onClick, onSearch }) {
      this.$recentSearch = document.createElement("div");
      this.$recentSearch.className = "recentSearch";
      $target.appendChild(this.$recentSearch);
  
      this.$searchResult = document.createElement("div");
      this.$searchResult.className = "SearchResult";
      $target.appendChild(this.$searchResult);
      
      this.data = initialData.data;
      this.loading = initialData.loading;
      this.onClick = onClick;
      this.onSearch = onSearch;
  
      this.renderKeywords();
      this.render();
    }
  
    setState(nextData) {
      this.data = nextData.data;
      this.loading = nextData.loading;
      this.renderKeywords();
      this.render();
    }
    renderKeywords() {
      let arr = JSON.parse(localStorage.getItem("keywords"))
      this.$recentSearch.innerHTML = arr
          .map(
            keyword => `
              <button class="keyword">
                ${keyword}
              </button>
            `
          )
          .join("")
          this.$recentSearch.querySelectorAll(".keyword").forEach(($item, index) => {
            $item.addEventListener("click", () => {
              this.onSearch($item.innerText);
            });
          });
    }
  
    render() {
      if(this.loading==true){
        this.$searchResult.innerHTML = "<h3>is Loading...</h3>"
      }else if(this.loading==false && this.data!=null){
        if (this.data.length === 0)
          this.$searchResult.innerHTML = "<h3>No result</h3>"
        else{
          this.$searchResult.innerHTML = this.data
          .map(
            cat => `
              <div class="item">
                <img src=${cat.url} alt=${cat.name} title=${cat.name} />
              </div>
            `
          )
          .join("");
          this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
            $item.addEventListener("click", () => {
              this.onClick(this.data[index]);
            });
          });
        }
      }
    }
  }
  