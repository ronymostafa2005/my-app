

function Contact() {
    return (
  
    <div>  
      <h1 className="h1"  >Can We Help You? </h1>
      <h6 className="h6"  >We are happy use our website</h6>
      <h6 className="h6" > send us your lnquiry and we will reply to you as  soon as possile</h6>
      <h6 className="h6">contact us Through E.mail</h6>
      <button className="btn2" >RAWAN MOSTAFA.@gmail.com</button>   
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
   </div>
   <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=" Your Email"/>
   </div> <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="phone number" className="form-control" id="exampleFormControlInput1" placeholder="Your phone"/>
   </div>

     <div className="mb-3">
     <label for="exampleFormControlTextarea1" className="form-label"></label>
     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell Us About Your Needs"></textarea>
     <button className="send" >Send</button>
     
     </div>

     </div>
   
    );
  }
  
  export default Contact;
  