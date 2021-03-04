document.querySelector("form").forEach((item) => {
    if(item.id === "formLogin") item.addEventListener("submit");

    if(item.id === "formSignup") item.addEventListener("submit");
});

