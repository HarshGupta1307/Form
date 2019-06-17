 function validation()
 { 

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var letters = /^[a-zA-Z]+$/;
  var valid = true;

  if(fname == "")
  {
    document.getElementById("fname_error").innerHTML = " ** Please fill the name field !!";
	valid = false;
  }
  else
  {
    if(!fname.match(letters))
    {
      document.getElementById('fname_error').innerHTML = " ** Only alphabets are allowed !!";
       valid = false;
    }
  }
  if(lname == "")
  {
    document.getElementById("lname_error").innerHTML = " ** Please fill the name field !!";
	valid = false;
  }
  else
  {
    if(!lname.match(letters))
    {
       document.getElementById('lname_error').innerHTML = " ** Only alphabets are allowed !!";
       valid = false;
    }
  }

 var mobile = document.getElementById("mobile").value;

  if(mobile == "")
  {
    document.getElementById("mobile_error").innerHTML = " ** Please fill the mobile number field !!";
	valid = false;
  }
  else
  {
      if(isNaN(mobile))
      {
         document.getElementById("mobile_error").innerHTML = " ** Only digits are allowed !!";
         valid = false;
      }
      else
      {
        if(mobile.length != 10)
        {
            document.getElementById("mobile_error").innerHTML = " ** Mobile number should contain 10 digits only !!";
            valid = false;
        }
      }    
  }

  var email = document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email == "")
  {
    document.getElementById("email_error").innerHTML = " ** Please fill the email field !!";
	valid = false;
  }
  else
  {
      if(!email.match(mailformat))
      {
          document.getElementById("email_error").innerHTML = " ** Invalid Email address!!";
          valid = false;
      }
  }

  var pass = document.getElementById("pass").value;
  var conpass = document.getElementById("conpass").value;

  if(pass == "")
  {
    document.getElementById("pass_error").innerHTML = " ** Please fill the password field !!";
	valid = false;
  }
  else
	{
      if((pass.length <= 6) || (pass.length > 20))
      {
          document.getElementById("pass_error").innerHTML = " ** Password length must be between 6 and 20 !!";
          valid = false;
      }
 	}

   if(conpass == "")
   	{
   		document.getElementById("conpass_error").innerHTML = " ** Please fill the confirm password field !!";
    	valid = false;
    }
	else
	{
		if(pass != conpass)
		{
			document.getElementById("conpass_error").innerHTML = " ** Passwords does not match. Please re-enter password !!";
			valid = false;
		}
	}    
  	return valid;
}

function firstname()
{
  var fname = document.getElementById("fname").value;
  var letters = /^[a-zA-Z]+$/;
  var valid = true;

  if(fname == "")
  {
    document.getElementById("fname_error").innerHTML = " ** Please fill the first name field !!";
	valid = false;
  }
  else
  {
    if(!fname.match(letters))
    {
      document.getElementById('fname_error').innerHTML = " ** Only alphabets are allowed !!";
       valid = false;
    }
  }
  if(valid == true)
  {
  	document.getElementById('fname_error').innerHTML = "";
  }
}

function lastname()
{
  var lname = document.getElementById("lname").value;
  var letters = /^[a-zA-Z]+$/;
  var valid = true;

  if(lname == "")
  {
    document.getElementById("lname_error").innerHTML = " ** Please fill the last name field !!";
	valid = false;
  }
  else
  {
    if(!lname.match(letters))
    {
      document.getElementById('lname_error').innerHTML = " ** Only alphabets are allowed !!";
       valid = false;
    }
  }
  if(valid == true)
  {
  	document.getElementById('lname_error').innerHTML = "";
  }
}

function mobileno()
{
  var mobile = document.getElementById("mobile").value;
  var valid = true;

  if(mobile == "")
  {
    document.getElementById("mobile_error").innerHTML = " ** Please fill the mobile number field !!";
	valid = false;
  }
  else
  {
      if(isNaN(mobile))
      {
         document.getElementById("mobile_error").innerHTML = " ** Only digits are allowed !!";
         valid = false;
      }
      else
      {
        if(mobile.length !=10)
        {
            document.getElementById("mobile_error").innerHTML = " ** Mobile number should contain 10 digits only !!";
            valid = false;
        }
      }    
  }
  if(valid == true)
  {
  	document.getElementById('mobile_error').innerHTML = "";
  }
}

function emailid()
{
  var valid = true;
  var email = document.getElementById("email").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email == "")
  {
    document.getElementById("email_error").innerHTML = " ** Please fill the email field !!";
	valid = false;
  }
  else
  {
      if(!email.match(mailformat))
      {
          document.getElementById("email_error").innerHTML = " ** Invalid Email address!!";
          valid = false;
      }
  }
  if(valid == true)
  {
  	document.getElementById('email_error').innerHTML = "";
  }
}

function passwords()
{
  var valid = true;
  var pass = document.getElementById("pass").value;
  if(pass == "")
  {
    document.getElementById("pass_error").innerHTML = " ** Please fill the password field !!";
	valid = false;
  }
  else
	{
      if((pass.length <= 6) || (pass.length > 20))
      {
          document.getElementById("pass_error").innerHTML = " ** Password length must be between 6 and 20 !!";
          valid = false;
      }
 	}
  if(valid == true)
  {
  	document.getElementById('pass_error').innerHTML = "";
  }
}

function cpasswords()
{
	var valid = true;
	var pass = document.getElementById("pass").value;
	var conpass = document.getElementById("conpass").value;
	if(conpass == "")
   	{
   		document.getElementById("conpass_error").innerHTML = " ** Please fill the confirm password field !!";
    	valid = false;
    }
	else
	{
		if(pass != conpass)
		{
			document.getElementById("conpass_error").innerHTML = " ** Passwords does not match. Please re-enter password !!";
			valid = false;
		}
	}    
	if(valid == true)
	{
		document.getElementById('conpass_error').innerHTML = "";
  	}
}