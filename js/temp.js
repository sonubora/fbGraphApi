$(document).ready(function(){


$( "#tabs" ).tabs(); // Enabling Tab  
  
 $("div#divLoading").hide();// hiding loader initially
   


 
            // ***************** Function for Profile Page************************

    function profileClick()
    {
	    var token='EAACEdEose0cBAJUZCLhPjAYIpP2Pxq6z7ZAivKC5tVZAbZCspnAnxK7GslSthG4BVSEZAtx1kas8OkgHGpKt7HTH5pTkS9WSyUTrDZApZARonyDAZAOkLQ5AZC9S7ydzYd3XEqtEGvdxCQQliHc2SPPYG7eCbvFxJSuzvAZByr8rrnrYyahf78PThwX3gJMyIXxV0ZD';

        $.ajax('https://graph.facebook.com/me?fields=name,about,birthday,education,gender,age_range,hometown,movies,music,email&access_token='+token,{

                       success:function(response){
                  
                         $("#checkBoxList input:checked").each(function() {

                          console.log($(this).val());
                          console.log(response);
                            var value =$(this).val();
                            switch(value)
                            {
                               case "fbName":
                               $("#name").text(response.name);
                               break;

                               case "fbAge":
                               $("#age").text(response.age_range.min);
                               break;

                               case "fbDob":
                               $("#birthday").text(response.birthday);
                               break;
                               case "fbGender":
                               $("#gender").text(response.gender);
                               break;
                               case "fbAbout":
                               $("#about").text(response.about);
                               break;
                               case "fbEmail":
                               $("#email").text(response.email);
                               break;
                               case "fbHometown":
                               $("#hometown").text(response.hometown.name);
                               break;
                               case "fbEducation":
                               $("#highSchool").text(response.education[0].school.name);
                               $("#inter").text(response.education[1].school.name);
                               $("#college").text(response.education[3].school.name);
                               break;
                               case "fbBooks":
                               $("#books").text(response.hometown);
                               break;
                               case "fbMovies":
                                $.each(response.movies.data, function( index, value ) {
                                $("#movies").append("<br>"+value.name);
                                });
                               break;
                               case "fbMusic":
                                $.each(response.music.data, function( index, value ) {
                                $("#music").append("<br>"+value.name);
                                });
                               break;
                               


                            } // end of switch
                        
                        });  //end of each function

                   
                       },     //end of success


                      error : function(request,errorType,errorMessage){

                  			  console.log(request);
                    		  console.log();
                    		 
                    		  alert("may be your token is expired..please copy your new token inside profile function");
                   			 
                			},


                		timeout:4000,
                		beforeSend : function(){

                                     
                                     $("span").text("");

                                     $("div#divLoading").addClass('show');
                                     $("div#divLoading").show();

                                 },
                        complete : function(){

                                   
                                   $("#head").hide();
                                 $("div#divLoading").hide();

                                }
        });


   }             //end of profile page function





               // *********Function for facebook feeds************ 



 function feedClick()
    {
      var token='EAACEdEose0cBAJUZCLhPjAYIpP2Pxq6z7ZAivKC5tVZAbZCspnAnxK7GslSthG4BVSEZAtx1kas8OkgHGpKt7HTH5pTkS9WSyUTrDZApZARonyDAZAOkLQ5AZC9S7ydzYd3XEqtEGvdxCQQliHc2SPPYG7eCbvFxJSuzvAZByr8rrnrYyahf78PThwX3gJMyIXxV0ZD';

        $.ajax('https://graph.facebook.com/me?fields=feed&access_token='+token,{

                       success:function(response){
                             $.each(response.feed.data,function(index,value){
                                  if ((value.story)!== undefined) 
                                  {
                                      console.log(value.story);
                                      $("#feed").append("<li>"+value.story+"</li> <br>");
                                  }
                                  

                             }); //end of each
                         
                          
                       },     //end of success


                      error : function(request,errorType,errorMessage){

                          console.log(request);
                          console.log(errorType);

                    		  alert("may be your token is expired..please copy your new token inside Feed function");
                         
                      },

                    timeout:4000,
                    beforeSend : function(){

                                     
                                     $("#feed").text("");

                                     $("div#divLoading").addClass('show');
                                     $("div#divLoading").show();

                                 },
                                complete : function(){

                                   
                                   $("#head").hide();
                                 $("div#divLoading").hide();

                                }
        });


   } // end of feed function 

   

$("#buttonParent").on('click',profileClick);   //calling profileClick when clicking parent button button
$("#feedButton").on('click',feedClick);   //calling feedClick when clicking feed button


});//end of document.ready function