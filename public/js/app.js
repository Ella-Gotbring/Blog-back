document.querySelectorAll("form").forEach((item) => {
    if(item.id === "formLogin") item.addEventListener("submit", userLogin);

    if(item.id === "formSignup") item.addEventListener("submit", userReg);

    if(item.id === "postForm") item.addEventListener("submit", createPost);
});

function userLogin(e){
    e.preventDefault();

    let email = e.target.querySelector("#email").value;
    let password = e.target.querySelector("#password").value;

    const input = {
        email,
        password,
    };
    if (input.email == "" || input.password == "") {
        console.log("fill in input fields");
        return;
    }

    fetch("/api/auth", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    }).then(() => (location.href = "/landing"));

}

function userReg(e){
    e.preventDefault();
    const email = e.target.querySelector("#email").value;
    const password = e.target.querySelector("#password").value;
    const repeatPassword = e.target.querySelector("#repeatPassword").value;

    const input = {
        email,
        password,
        repeatPassword,
    };

    if(
        input.email == "" || 
        input.password == "" || 
        input.repeatPassword == ""
    ) {
        console.log("fill in input fields")
        return;
    } 

    fetch("/api/register", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
    })
    .then((res) => res.json())
    .then(() => (location.href = "/index"));
}
    function createPost(e) {
        e.preventDefault();
        let title = e.target.querySelector("#title").value;
        let text = e.target.querySelector("#text").value;

        const input = {
            title,
            text,
        };

        if(input.title == "" || input.text == ""){
            console.log("fill in input fields");
            return;
        }
        fetch("/api/posts", {
            method: "post",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        })
        .then((res) => res.json())
        .then((data) => (location.href = "/api/posts"));
    }
