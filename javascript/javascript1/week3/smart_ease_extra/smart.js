//Unique feature DOM
//by deafult the submit button is disabled
document.querySelector("#addNoteButton").disabled = true;

//enable button when there is text in input field
document.querySelector("#note").onkeyup = () => {
if (document.querySelector("#note").value.length > 0)
    document.querySelector("#addNoteButton").disabled = false;
    else
    document.querySelector("#addNoteButton").disabled = true;
};

document.querySelector("#addNoteButton").onclick = () => {
    //create new item
    const li = document.createElement("li");
    li.innerHTML = document.querySelector("#note").value;

    //add new item
    document.querySelector("#notes").append(li);

    //clear input field
    document.querySelector("#note").value = "";
    document.querySelector("#addNoteButton").disabled = true;

    //add checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);

    //cross the note
    checkbox.onclick = () => {
        li.setAttribute("style", "text-decoration: line-through;");
   
    //stop from submitting
    return false;
    };

}
