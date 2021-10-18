
const BookApp = {
    data() {
      return {
        books: [],
        selectedStudent: null,
        offers: [],
        offerForm: {}
      }
    },
    computed: {},
    methods: {
        fetchBookData() {
            fetch('/api/books/index.php')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postNewOffer(evt) {
          this.offerForm.studentId = this.selectedStudent.id;        
          console.log("Posting:", this.offerForm);
          // alert("Posting!");
  
          fetch('api/offer/create.php', {
              method:'POST',
              body: JSON.stringify(this.offerForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.offers = json;
              
              // reset the form
              this.offerForm = {};
            });
        }
    },
    created() {
        this.fetchBookData();
    }
  
  }
  
  Vue.createApp(BookApp).mount('#bookApp');