function SendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}
  <br> Email: ${email.value}<br>Phone Number: ${phone.value}<br>Message: ${mess.value}`;

  Email.send({
    SecureToken: "24ceeb3f-c53b-4d4f-942f-e4067cb2cd8f",
    Host: "smtp.elasticemail.com",
    Username: "	ehikwejahswill11@gmail.com",
    Password: "35A76219E6F18F8EA37D8586D429866EF2B2",
    To: "ehikwejahswill11@gmail.com",
    From: "ehikwejahswill11@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Sucess!",
        text: "Message sent Sucessfully!",
        icon: "sucess",
      });
    }
  });
}
