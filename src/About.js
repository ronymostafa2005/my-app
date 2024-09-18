import logo2 from './images/bee_PNG74750.png'

function About() {    return (
      <>
        
        <img className="img2" src={logo2} alt="photo" />
        <h1 className='hello'>Hello,</h1>
        <h6  className='lorem' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione accusamus, iure suscipit voluptatem dolores ducimus eaque. Provident harum vero nostrum eligendi excepturi magnam veritatis laudantium.</h6>
        <h6 className='soft' >Jop Title: softwar engineer</h6>
        <h6 className='loc' >Location:Cairo.Egypt</h6>
        <h6 className='mail' >Email:Rawan@gmail.com</h6>
        <h6 className='name'>Name:Rawan mostafa</h6>
        <h6 className='age' >Age:19years</h6>
        <h6 className='free' >Freelance:Available</h6>




        <button className='don'  >Downloud</button>
        <button className='here' >Here me</button>



      </>
    );
  }
  
  export default About;
  