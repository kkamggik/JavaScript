console.log("app is running!");

class App {
  $target = null;
  data = [];
  loading = false;

  constructor($target) {
    localStorage.setItem("keywords", JSON.stringify([]));
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: async(keyword) => {
        this.setState({
          data: null,
          loading: true
        })
        const cats = await requestCats(keyword)
        this.setState({
          data: cats.data,
          loading: false
        })
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async(image) => {
        const detail = await requestCatDetails(image.id)
        this.imageInfo.setState({
          visible: true,
          image: detail.data
        });
      }, 
      onSearch: async(keyword) => {
        this.setState({
          data: null,
          loading: true
        })
        const cats = await requestCats(keyword)
        this.setState({
          data: cats.data,
          loading: false
        })
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    this.data = nextData.data;
    this.loading = nextData.loading;
    this.searchResult.setState(nextData);
  }
}
