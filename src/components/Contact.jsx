const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-infos">
          <p className="contact-title">Contact</p>
          <p className="contact-description">
            J'aimerais connaître votre projet et savoir comment je pourrais vous
            aider. Remplissez le formulaire et je vous répondrai dès que
            possible dans les plus brefs délais.
          </p>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <button>envoyer</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
