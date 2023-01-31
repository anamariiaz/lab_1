//define a variable which contains a list of the 12 musical pitches
let note_list = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

//insert the above list (split by commas and spaces) into the html element with id "note_list"
document.getElementById("note_list").innerHTML=note_list.join(", ");

//define a variable which contains the value of the submit button from the form on the "Home" page
var submit = document.getElementById("submit"); 

//add an event listener which triggers a function when the submit button of the form on the "Home" page is clicked
submit.addEventListener("click", function(e){ 
    //prevent the input from the form to be submitted to a URL, allowing manual processing of the input as specified below
    e.preventDefault();
    //define a variable containing the (uppercase) input value of the form. Uppercase is specified since musical pitches are not case dependent and the pitches in note_list defined above are uppercase
    var note = document.getElementById("note1").value.toUpperCase();
    //check whether the inputed note is one of the 12 musical pitches in note_list
    if (note_list.includes(note)){
        //if the inputed value is one of the 12 musical pitches in note_list at an index of 2 or greater, insert "On Bb Clarinet, this note sounds like: " the note present at 2 indices prior into the html element with id "clarinet"
        if (note_list.indexOf(note)>1) {
            document.getElementById("clarinet").innerHTML="On Bb Clarinet, this note sounds like: " + note_list[note_list.indexOf(note)-2].toString
        } 
        //if the inputed value is the musical pitch in note_list at an index of 0, insert "On Bb Clarinet, this note sounds like: A#"" into the html element with id "clarinet"
        else if (note_list.indexOf(note)===0) {
            document.getElementById("clarinet").innerHTML="On Bb Clarinet, this note sounds like: " + note_list[10].toString()
        } 
        //if the inputed value is the 12 musical pitch in note_list at an index of 1, insert "On Bb Clarinet, this note sounds like: A" into the html element with id "clarinet"
        else if (note_list.indexOf(note)===1) {
            document.getElementById("clarinet").innerHTML="On Bb Clarinet, this note sounds like: " + note_list[11].toString
        }
    } 
    //if the inputed note is not one of the 12 musical pitches in note_list, insert "please input a valid note from the list above" into the html element with id "clarinet"
    else {
        document.getElementById("clarinet").innerHTML="please input a valid note from the list above"
    }   
}); 

//define a variable which contains the value of the like button on the "Home" page
var like_btn = document.getElementById("like"); 
//define a (changeable) variable equal to 0
let like_no=0;
//insert "0" into the html element with id "like_no"
document.getElementById("like_no").innerHTML=like_no;
//add an event listener which triggers a function when the like button on the "Home" page is clicked
like_btn.addEventListener("click", function(){
    //add 1 to the like_no variable and insert the updated value into the html element with id "like_no"
    like_no=like_no+1;
    document.getElementById("like_no").innerHTML=like_no;
});

//define a variable which contains the value of the dislike button on the "Home" page
var dislike_btn = document.getElementById("dislike"); 
//define a (changeable) variable equal to 0
let dislike_no=0;
//insert "0" into the html element with id "dislike_no"
document.getElementById("dislike_no").innerHTML=dislike_no;
//add an event listener which triggers a function when the dislike button on the "Home" page is clicked
dislike_btn.addEventListener("click", function(){
    //add 1 to the dislike_no variable and insert the updated value into the html element with id "dislike_no"
    dislike_no=dislike_no+1;
    document.getElementById("dislike_no").innerHTML=dislike_no;
});


