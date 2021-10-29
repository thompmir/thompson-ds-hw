
const SomeApp = {
  data() {
    return {
      books:[],
      students: [],
      selectedStudent: null,
      offers: [],
      bookForm: {},
      selectedBook: null
    }
  },
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
    postBook(evt) {
      if (this.selectedBook === null){
        this.postNewBook(evt);
      } else{
        this.postEditBook(evt)
      }
    },  
    postNewBook(evt) {  
      console.log("Creating!", this.bookForm);
        fetch('api/books/create.php', {
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
          this.books = json;
          
          // reset the form
          this.resetBookForm();
        });   
      },
      postDeleteBook(b) {
        if ( !confirm("Are you sure you want to delete " + b.title + "?"))  {
          return;
        }
        console.log("Deleting!", b);
          fetch('api/books/delete.php', {
              method:'POST',
              body: JSON.stringify(b),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
      
              }
      
            })
      
          .then( response => response.json() ) 
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.resetBookForm();
          });   
        },
      selectBookToEdit(b) {
          this.selectedBook = b;
          this.bookForm = this.selectedBook;
      },
      resetBookForm() {
        this.selectedBook = null;
        this.bookForm={};
      },
      postEditBook(evt) {  
        this.bookForm.id = this.selectedBook.id;

        console.log("Updating!", this.bookForm);
          fetch('api/books/update.php', {
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
            this.books = json;
            
            // reset the form
            this.resetBookForm();
          });   
        }
  },
  created() {
      this.fetchBookData();
      //this.postNewOffer();
  }

}

Vue.createApp(SomeApp).mount('#bookApp');