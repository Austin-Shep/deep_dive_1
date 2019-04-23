//define utilities, This is just to save time, and clean up future code, REMEMBER =DRY=
var database = firebase.database();

//write a function to generate a "card" for each user
const profileCard = (user) => {
    //define your dom reference
    let post = $("#profileDisp"),
        newDiv = $("<div>").append(//construct your "card" with jquery
            $("<h2>").text(`name: ${user.val().name}`).attr("data-name", user.val().name),
            $("<h3>").text(`email: ${user.val().email}`).attr("data-email", user.val().email),
            //here we will store the key we generated earlier in the "delete buttons" Id for easy access
            $("<p>", { "class": "delete", "id": user.key }).text("X")
        )
    //finish out this functions execution by appending your newly generated card to the dom
    return post.append(newDiv)
}
//EVENT LISTENERS

//form submission handler
$("#sForm").on("submit", (event) => {
    event.preventDefault()
    //get data from forms to post to firebase, and store them in an object
    let newUser = {
        name: $("input[name = name]").val().trim(),
        email: $("input[name = email]").val().trim()
    }
    //log the user so we can know if it worked
    console.log(`new user:\n${JSON.stringify(newUser)}`)
    //return to finish the code execution, and push the new user to the user file, with an associated key
    return database.ref("user/").push(newUser).key
});
//deleting a user from the database and dom
$(document).on("click", ".delete", (event) => {
    //using the database.ref() and the id we created earlier we can "remove" said "profile" from the database 
    database.ref("user/" + event.target.id).remove()
    //close the function by deleting the "profile from the dom"
    return event.target.parentNode.remove()
})
//watching the database for changes
database.ref("user/").on("child_added", (childSnap) => {
    //if the database notices a "child" has beem added, it will pass that child into our previously definded function
    return profileCard(childSnap)
})
