import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname : '',
        phone : '',
        email : '',
        msg : '',
    })
    
    const InputEvent = (event) => {
    
        const {name , value} = event.target;
    
        setData((perVal) => {
            return {
                ...perVal,
                [name] : value,
            }
        })
    }
    
    const formSubmit = (e) => {
            e.preventDefault();
            alert(`Welcome ${data.fullname}.`);
    }

           return(
               <>

                    <div className = 'my-5'>
                        <h1 className = 'text-center'> Contact Us </h1>
                    </div>
                    <div className = 'container contact_div'>
                        <div className = 'row'>
                            <div className = 'col-md-6 col-10 mx-auto'>
                                <form onSubmit = {formSubmit}>
                                <div className = 'mb-3'>

                                    <div class="form-group">
                                        <label for="exampleFormControlInput1"> Full Name </label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" name = "fullname" autoComplete = "off" value = {data.fullname} onChange = {InputEvent} placeholder="Enter Your Name" />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1"> Mobile No. </label>
                                        <input type="number" class="form-control" id="exampleFormControlInput1" name = "phone" autoComplete = "off"  value = {data.phone} onChange = {InputEvent} placeholder="Enter Your Contact no." />
                                    </div>
                                     <br />   
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" name = "email" autoComplete = "off" value = {data.email} onChange = {InputEvent} placeholder="Enter Your E-mail" />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1" name = "msg" autoComplete = "off" value = {data.msg} onChange = {InputEvent}>Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <br />
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                                    </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
               </>
           )
}

export default Contact;