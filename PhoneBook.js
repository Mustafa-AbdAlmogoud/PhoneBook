var PhoneBook = function() {
		
		phoneList = [];
};
			
PhoneBook.prototype = {
		add: function(contactInfo){
				if(!contactInfo.name.match(/^[a-zA-Z]{1,100}$/) ){
					console.log('name is not vaild');
					return false;
				}
					 
				if(!contactInfo.phone.match(/^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
					console.log('phone number is not valid');
					return false;
				}
				
				if(!contactInfo.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
					console.log('email is not valid');
					return false;
				}
				
				phoneList.push(contactInfo);
				return true;
		},
				
		list: function(contactsPerPage, page){
				var result = [];
				phoneList.sort(function(a, b) { return (a.name > b.name); });
					
				for(i = contactsPerPage * page; i < contactsPerPage * page + contactsPerPage ; i++){ 
					if(phoneList[i] == undefined){
						return result;
					}
					result.push(phoneList[i]);
				}
					
				return result;
		},
				
		remove: function(index){ 
				phoneList.splice(index, 1);
		},
				
		search: function(query){
				var result = [];
				for(i = 0; i < phoneList.length; i++){ 
					if(phoneList[i].name == query || phoneList[i].phone == query) {
						result.push(phoneList[i])
					}
				}
					return result; 
		},
};
