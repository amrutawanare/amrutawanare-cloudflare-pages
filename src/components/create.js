import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";

const Create_Post = event => {

    const handleSubmit = event => {
        event.preventDefault();
        var title = event.target.title.value
        var username = event.target.username.value
        var content = event.target.content.value
        if ((!title) || (!username) || (!content)){
            alert('All fields are mandatory.')
            return
        }
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, username: username, content: content })
        };
        fetch('https://worker.amrutawanare.workers.dev/posts', requestOptions)
        .then(async response => {
            // check for error response
            if (response.ok) {
                navigate(`/`)
            }
        })
        .catch(error => {
            alert('Something went wrong.')
            console.error('There was an error!', error);
        });
        
      }

    return (
    <div className="wrapper">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
        <fieldset>
           <label>
             <p>Title</p>
             <input name="title" />
           </label>
           <label>
             <p>Username</p>
             <input name="username" />
           </label>
           <label>
             <p>Content</p>
             <textarea name="content" />
           </label>
         </fieldset>
         <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Create_Post