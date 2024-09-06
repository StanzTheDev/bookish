function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
   document.querySelector('#bout').addEventListener('click', ()=>{
document.querySelector('menu-button').style.animation = 'slideInFromLeft 1s ease'
   });
    
