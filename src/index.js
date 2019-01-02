import style from "./_scss/main.scss";
import {http} from "./http";
import {ui} from './ui';

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
ui.postSubmit.addEventListener('click', submitPost);

// Listen for delete
ui.post.addEventListener('click', deletePost);

// Listen for edit state
ui.post.addEventListener('click', enableEdit);

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts() {
  http.get('http://localhost:3000/posts')
      .then(data => ui.showPosts(data))
      .catch(err => console.log(err + " not found"));
}

function submitPost() {
  // Get form data
  const title = ui.titleInput.value;
  const body = ui.bodyInput.value;
  const id = ui.idInput.value;

  const data = { // if key and value name are the same, you can use one (ES6 syntax)
    title,
    body
  }

  // Validate input
  if (!title || !body) {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else if (!id) {
    // Create Post
    http.post('http://localhost:3000/posts', data)
          .then(data => {
            ui.showAlert('Post added', 'alert alert-success');
            ui.clearFields();
            getPosts()
          })
          .catch(err => console.log(err));
        } else {
          // Update Post
          http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                  ui.showAlert('Post updated', 'alert alert-success');
                  ui.changeFormState('add');
                  getPosts()
                })
                .catch(err => console.log(err));

  }
}
      
// Delete Post
function deletePost(e) {
  e.preventDefault();
  
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure')) {
      http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
              ui.showAlert('Post Removed', 'alert alert-success');
              getPosts();
            })
            .catch(err => console.log(err));
    }
  }
}

// Enable edit state 
function enableEdit(e) {
  e.preventDefault();
  
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    
    const data = {
      id,
      title,
      body
    }
    // Fill form with current post
    ui.fillForm(data);
  }
}

// Cancel edit state
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }

  e.preventDefault();
}
