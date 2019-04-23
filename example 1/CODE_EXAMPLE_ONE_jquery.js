//Define an ajax function
const getGifs = function(query){
    return $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q= "+ query +" &api_key=Iosq0tp0oilzY4tFD0egb9mNJrpCmuhF&limit=15",
        method: "GET"
    })
};

//add an event listener
$("form#sForm").on("submit", function(event){

})
    //prevent the default action of the submit event
    event.preventDefault();
    
    //store and format your search term
    let searchTerm = $("input[name = search]").val().split(" ").join("+")

    //begin our ASYNCHRONOUS our AJAX function
    getGifs(searchterm)
        .then(function(response){//await a responce(then)
            
            //log results so we know how to proceed
           console.log(response.data[1])
            
            //grab our display div from the document
            let display = $("div#gifDisp")

            //run a loop for each gif
            response.data.forEach(gif => {
                
                //create a new <img/> tag
                let newImage = $("<img/>");
                    newImage.attr("src", gif.images.downsized_large.url);
                    newImage.attr("alt", gif.title);
                //append all of your results to the display box
                display.append(newImage)
                
            });
                

        })




