// put your username
const Name = "";
// put your password
const PhoneNumber = "";

const Email = "";

const Message = "";

const credential = {
Name,
PhoneNumber,
Email,
Message
};

const handleSubmit = (values) => {
  console.log(values);
};

<ContactForm handleSubmit={handleSubmit} credential={credential} />;