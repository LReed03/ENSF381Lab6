function Contact(props) {

    return (
        <div>
            <h1>{props.title}</h1>
            <p>Contact Us</p>
            <p>{props.message}</p>
        </div>
    );
  }

export default Contact;