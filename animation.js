// const box = document.getElementById('exampleBox');
// const post = box.getBoundingClientRect();
// console.log(post)
// console.log(box.offsetWidth)



document.querySelectorAll('.box').forEach(box => {

  box.addEventListener('mouseenter', () => {

  const container = document.querySelector('.container')
  const containerPost = container.getBoundingClientRect()
  const contTop = containerPost.top;
  const contLeft = containerPost.left;
  const moving = document.querySelector('.moving')

  const post  = box.getBoundingClientRect();
  console.log(moving.style)
  const top = post.top - contTop - 10;
  const left = post.left - contLeft - 10;
  
  moving.style.setProperty('--top', `${top}px`)
  moving.style.setProperty('--left', `${left}px`)

  })

  
})
  