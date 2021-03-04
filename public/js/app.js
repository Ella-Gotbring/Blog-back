document.querySelector("form").forEach((item) => {
    if(item.id === "formLogin") item.addEventListener("submit");

    if(item.id === "formSignup") item.addEventListener("submit");
});

function userLogin(){
    let email = target.querySelector("#email").value;
    let password = target.querySelector("#password").value;

    const input = {
        email,
        password,
    };
    if(input.email == "" || input.password == ""){
        console.log("fill in input fields");
        return;
    }

    fetch("/api/auth", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input)
    })

}

function userReg(){
    const email = target.querySelector("#email").value;
    const password = target.querySelector("#password").value;
    const repeatPassword = target.querySelector("#repeatPassword").value;

    const input = {
        email,
        password,
        repeatPassword,
    };

    if(
        input.email == "" || 
        input.password == "" || 
        input.repeatPassword == ""
    ){
        console.log("fill in input fields")
        return;
    } 

    fetch("/api/register", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        bosy: JSON.stringify(input),
    })

    function createPost(){
        let title = target.querySelector("#title").value;
        let text = target.querySelector("#text").value;

        const input = {
            title,
            text,
        };
        if(input.title == "" || input.text == ""){
            console.log("fill in input fields");
            return;
        }
    }






}
