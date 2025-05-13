import React from 'react'
import { useState } from 'react'
import axios from "axios"
function Content() {

  //  useEffect(() => {
    

  //   // return () => {
      
  //   // };
  //  }, []);

    const [name,setname]=useState();
    const [mob,setmob]=useState();
    const [clicked,setclicked]=useState(false);
    
    const submitted=(e)=>
    {
      if(!name.trim() ||!mob.trim())
      {
        alert("Feild's are empty");
        return;
      }
      else{
        e.preventDefault();
        axios.post("http://localhost:3005/add",{name:name,mob:mob}).then(result=>console.log(result)).catch(err=>console.log(err))
        setclicked(true);
      }
      
    }

  return (
    <>
  <div class="container-fluid m-2">
  
    <header class="row text-black mb-4">
        <div class="col-12">
          {!name?(<> <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <p class="lead">
          At <strong>[AtoZ Metal Works]</strong>, we pride ourselves on delivering top-notch metal works and fabrication services tailored to meet the unique needs of our clients. With years of experience in the industry, we specialize in creating durable, high-quality metal products that are built to last.
        </p>
      </div>
    </div>
  </div></>):(<h1>Hello {name}</h1>
)}         </div>
    </header>

  
    <div class="row">
       
        <main class="col-md-7 space p-4">
        <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>

  </div>

 
  <div class="carousel-inner" style={{backgroundColor:"White"}}>
    <div class="carousel-item active">
      <img src="img1.jpg" class="" alt="First Slide"/>
    </div>
    <div class="carousel-item">
      <img src="img2.jpg" class="d-block w-100" alt="Second Slide"/>
    </div>
    <div class="carousel-item">
      <img src="img3.jpg" class="d-block w-100" alt="Third Slide"/>
    </div>
    <div class="carousel-item">
      <img src="img4.jpg" class="d-block w-100" alt="Fourth Slide"/>
    </div>
    <div class="carousel-item">
      <img src="img5.jpg" class="d-block w-100" alt="Fifth Slide"/>
    </div>
    <div class="carousel-item">
      <img src="img6.jpg" class="d-block w-100" alt="Sixth Slide"/>
    </div>
  </div>

 
  <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </main>

       
        {clicked ?(<aside class="col-md-4 bg-secondary form-box text-black p-4">
            <h3 class="text-white mt-5">Thanks for Reaching Out !!!</h3>   
        <div class="text-center text-white mt-5">
          <h4>Our person will reach out you in 30min !!!</h4>
        </div>
       
        </aside>):(<aside class="col-md-4 bg-secondary form-box text-black p-4">
            <h2 class="text-center">Get in Touch</h2>
            <form>
            <div class="mb-3">
            <label for="username" class="form-label fw-bold">Name</label>
            <input type="text" class="form-control" id="username" onChange={(e)=>setname(e.target.value)} placeholder="Enter your username" required/>
             </div>

            <div class="mb-3">
            <label for="mobile" class="form-label fw-bold">Mobile Number</label>
            <input type="tel" class="form-control" id="mobile" minlenght="10" maxLength="10" onChange={(e)=>setmob(e.target.value)} placeholder="Enter your mobile number" required/>
        </div>
        <div class="text-center">
        <button type="submit" onClick={submitted} class="btn btn-dark fw-bold">Submit</button>
        </div>
        </form>
        </aside>
        )}
    </div>

    <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="scroll-container">
          <div class="scroll-images">
            <img src="img3.jpg" alt="Image 1"/>
            <img src="img7.jpg" alt="Image 2"/>
            <img src="img8.jpg" alt="Image 3"/>
            <img src="img9.jpg" alt="Image 4"/>
          </div>
        </div>
      </div>
    </div>
  </div>



</div>
    
    </>
  )
}

export default Content