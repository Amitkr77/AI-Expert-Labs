import emailjs from "@emailjs/browser";

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

try {
  const res = await emailjs.send(
    "service_gvce89f",
    "template_sq3zmnr",
    {
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    },
    "dG7Zxv0JLjxY3J5iQ"
  );

  console.log("SUCCESS:", res);

} catch (err) {
  console.error("EMAIL ERROR:", err);
}
};