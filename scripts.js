/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector(".newsletter form");
    const eInput = document.querySelector("#email");
    const messageBox= document.querySelector(".message");
    
    form.addEventListener("submit", (event) =>
                         {
        event.preventDefault();
        
        const email =eInput.value.trim();
        
        if(email==="") {
            messageBox.textContent = "Please enter a valid email address.";
            return;
        }
        messageBox.textContent=
            `Thank you! Your email address ${email} has been added to our mailing list!`;        
        eInput.value = "";
    });
});