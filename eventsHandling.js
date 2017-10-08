$(document).ready(function(){
		
		var myPhoneBook = new PhoneBook();
				
		$("#save").click(function(){
			var contact = {
				name: $("#name").val(),
				phone: $("#phone").val(),
				email: $("#email").val()
			};
			
			var saved = myPhoneBook.add(contact);
					
			if(saved){
				$(".showContacts").html(" ");
				$(".showContacts").append("<div class='message'> <h1> SAVED SUCCESS</h1></div>");
			}else {
				$(".showContacts").html(" ");
				$(".showContacts").append("<div class='message' style='color: red;'> <h1> SAVED FAILD DATA NOT VALID</h1></div>");
			}
		});
					
		$("#listButton").click(function(){
			var contacts = myPhoneBook.list(10000,0);
			showContact(contacts);
		});
				
		$("#searchIcon").click(function(){ $("#searchInput").toggle(); });
				
		$("#searchInput").keypress(function(n){
			if(n.which == 13){
				$("#searchInput").toggle();
				var results = myPhoneBook.search($("#searchInput").val())
				showContact(results);
			}
		});
		
		$("body").on("click", "#delete", function(){
			myPhoneBook.remove($(this).parent().index());
			var contacts = myPhoneBook.list(10000,0);
			showContact(contacts);
		});
});

var showContact = function(contacts){
	$(".showContacts").html(" ");
	if(contacts.length < 1){
		$(".showContacts").append("<div class='message'> <h1> No Contacts</h1></div>");
	}else{			
		for (i = 0; i < contacts.length; i++){
			$(".showContacts").append("<div class='contact'> <i id='delete' class='fa fa-window-close'></i><h2> "
			+ contacts[i].name + " </h2>" 
			+ contacts[i].phone +"<br />"+ contacts[i].email + "</div>");
		}
	}
}
