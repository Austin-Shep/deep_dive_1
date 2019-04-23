//Define an ajax function
const getGifs = (query = "404 not found") => {
    return $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=Iosq0tp0oilzY4tFD0egb9mNJrpCmuhF&limit=15`,
        method: "GET"
    })
};

//add an event listener
document.querySelector("form#sForm").addEventListener("submit", (event) => {

    //prevent the default action of the submit event
    event.preventDefault();

    //store and format your search term
    let searchTerm = document.querySelector("input[name = search]").value.split(" ").join("+");

    //begin our ASYNCHRONIS our AJAX function
    getGifs(searchTerm)
        .then((response) => {//await a responce
            //log results so we know how to proceed
            console.log(response.data[1])

            //grab our display point from the document
            let display = document.querySelector("div#gifDisp")

            //run a loop for each gif
            response.data.forEach(gif => {

                //create a new <img/> tag
                let newImage = document.createElement("img")

                //using the Object Assign method, assign some attributes
                Object.assign(newImage, {
                    src: gif.images.downsized_large.url,
                    alt: gif.title
                })
                //append all of your results to the display box
                display.append(newImage)

            })
        })


})

