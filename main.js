// register modal component
Vue.component('modal', {
  template: '#modal-template',
  data: () => ({
    username: "",
    password: ""
	}),
  methods: {
  	login () {
      console.log("Hello")
  		if (this.username == "badlog" || this.password == "badlog" || this.username == "" || this.password == "") {
  			if (this.username == "badlog"){
  				$('#username').addClass('uk-form-danger')
  				$('#username').val('')
  			} else if (this.password == "badlog") {
  				$('#password').addClass('uk-form-danger')
  				$('#password').val('')
  			}
  			$('#danger').css('visibility', 'visible')
  		}else {
        this.$emit('close')
  			/*$( "#icon" ).animate({
		    top: '7px',
  			left: '0px',
  			width: '2.6rem',
  			height: '2.6rem'
        */
		  }/*, 3000, 'easeOutCubic', function() {
		    $('#icon').switchClass("modal-icon", "nav-icon", 1, "linear");
		  })*/
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
});

/*$('input').focusin(function(){
		$('#icon').transition('set looping')
  		$('#icon').transition({
  			animation: 'pulse', 
  			interval: '500ms',
  			duration: '3s',
  			queue: 'false'
        $('#icon').transition('stop all');
  		})
    });
*/
