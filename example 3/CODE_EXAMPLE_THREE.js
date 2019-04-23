//define utilities, This is just to save time, and clean up future code, REMEMBER =DRY=
var database = firebase.database();

$("#sForm").on("submit", (event) => {
    event.preventDefault()
    //get data from forms to post to firebase
    let newUser = {
        name: $("input[name = name]").val().trim(),
        email: $("input[name = email]").val().trim(),
        birthday: moment($("input[name = birthday]").val().trim(), "MM/DD/YYYY").format("X")
    }
    console.log(`new user:\n${JSON.stringify(newUser)}`)
    return database.ref("user/").push(newUser).key
})

const profileCard = (user) => {
    let post = $("#profileDisp"),
        newDiv = $("<div>").append(
            $("<h2>").text(`name: ${user.val().name}`).attr("data-name", user.val().name),
            $("<h3>").text(`email: ${user.val().email}`).attr("data-email", user.val().email),
            $("<h3>").text(`birthday: ${user.val().birthday}`).attr("data-birthday", user.val().birthday),
            $("<p>", { "class": "delete", "id": user.key }).text("X")
        )
    return post.append(newDiv)
}

$(document).on("click", ".delete", (event) => {
    database.ref("user/" + event.target.id).remove()
    return event.target.parentNode.remove()
})

database.ref("user/").on("child_added", (childSnap) => {
    return profileCard(childSnap)
})