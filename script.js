document.getElementById('myButton1').addEventListener(
    "click",
    function(event) {
        if(event.target.value === "Submit") {
            event.target.value = "Make Money!";
        } else {
            event.target.vaue = "Submit";
        }
    },
);

  

