
const BookApp = {
    data() {
      return {
        books: [],
        bookForm: {},
        "SampleBooks":[]
      }
    },
    computed: {},
    methods: {
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postNewBook(evt) {
          console.log(JSON.stringify(this.bookForm))       
          fetch('/api/books/addbook.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.SampleBooks = json;
              
              console.log(SampleBooks)
              // reset the form
              this.handleResetEdit();
            });
        }
    },
    created() {
        this.fetchBookData();
    }
  
  }
  
  Vue.createApp(BookApp).mount('#bookApp');