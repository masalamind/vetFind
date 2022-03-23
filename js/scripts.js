

// Fetching Records on Homepage

$(document).ready(function(){

    
    // Fetch user inputs and return vet records 
    $("#searchTopVets").submit(
        function(e){

            e.preventDefault();
            
            var animalCategory = $("#animalCategory").val();
            var countyLocation = $("#countyLocation").val();

            alert("hey ya");
            console.log(animalCategory + " "+ countyLocation);

        }

    )








    }
)
