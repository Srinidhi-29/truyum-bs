function validation() {
  var title = document.forms["editForm"]["title"].value;
  if (title == "") {
    alert("Title is required");
    return false;
  }
  if(title.length<2||title.length>65)
  {
	  alert("Title should have 2 to 65 characters");
	  return false;
  }
  var price=document.getElementById("price").value;
    if (price == "") {
    alert("Price is required");
    return false;
  }
  if(isNaN(price))
  {
	  alert("Price has to be a number");
	  return false;
  }
   var dol=document.getElementById("dateOfLaunch").value;
    if ( dol== "") {
    alert("Date Of Launch is required");
    return false;
  } 
   var cat=document.forms["editForm"]["category"].value;
    if ( cat== "Choose") {
    alert("Category is required");
    return false;
  }
   else{
	setTimeout(function() {window.location = "edit-menu-item-status.html" });
  }  
}