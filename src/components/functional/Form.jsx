import toast, { Toaster } from "react-hot-toast";

function Form() {
  const key = "5105f54d-cb84-4e62-9b9d-9e71711398c6";

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="col-lg-6">
      <div className="zubuz-form-wrap">
        <h3>Fill the from below</h3>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="zubuz-main-form">
                <input type="text" name="name" placeholder="Your Name*" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="zubuz-main-form">
                <input type="email" name="email" placeholder="Email Address*" />
              </div>
            </div>
          </div>
          <div className="zubuz-main-form">
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="zubuz-main-form">
            <textarea
              name="message"
              placeholder="Write us your comment"
            ></textarea>
          </div>
          <button id="zubuz-submit-btn" type="submit">
            <span>Send Message</span>
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Form;
