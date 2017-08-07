// register modal component
Vue.component('modal', {
   template: '#modal-template',
   data: () => ({
      username: '',
      password: ''
   }),
   methods: {
      login() {
        if (this.username=="badlog" || this.username == "") {
          if (this.username == "badlog") {
            $('#username').addClass('uk-form-danger')
            $('#username').val('')
          } else if (this.password == "badlog") {
            $('#password').addClass('uk-form-danger')
            $('#password').val('')
          }
          $('#danger').css('visibility', 'visible')
        } else {
          this.$emit('close')
          $('#icon').animate({
            top: '0px',
            left: '0px',
            width: '3.2rem',
            height: '3.2rem'
          }, 1650, 'easeOutCubic', function() {
            $('#icon').switchClass("modal-icon", "nav-icon", 1, "linear")
            $('#icon').transition('stop all')
          })
        }
      }
   }
})

// start app
new Vue({
  el: '#app',
  data: () => ({
    showModal: true,
  }),
  methods: {
    show(){
      this.showModal = true;
      $('#icon').switchClass("nav-icon", "modal-icon", 1, "linear");
      $("#icon").animate({
        zindex: "9999",
        top: '300px',
        left: '15px',
        width: '14rem',
        height: '14rem'
      }, 3000, 'easeOutCubic', function() {
        $('#icon').switchClass("nav-icon", "modal-icon", 1, "linear");
      });
    }
  }
})

/*$('input').focusin(function(){
    $('#icon').transition('set looping')
      $('#icon').transition({
        animation: 'pulse', 
        interval: '500ms',
        duration: '3s',
        queue: 'false'
      })
    });
*/

