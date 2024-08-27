console.log('Teste')
const btnLink = document.querySelectorAll('.btn')
  for(i = 0; i < btn.length; i++){
    const element = btnLink[i]
    console.log(element.id)

    element.addEventListener('click', function(){
      window.location.href = `/${element.id}`
    }) 
  }