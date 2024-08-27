const eye = document.querySelectorAll('.eye')
  for(i = 0; i < eye.length; i++){
    
    let element = eye[i]
    element.addEventListener('click', function(){
      element.classList.toggle('eye_op')
      
    const input = document.querySelector(`#${element.classList[2]}`)
        if(input.type == 'password') input.type = 'text'; else input.type = 'password';
      
    })
  }