
let m=1;
let mainWindow = document.querySelector('.main-window');
//let notes_mainWindow = document.getElementById('main-Window');
mainWindow.classList.add('active');

function myProfilePage()
{
  console.log('pehly ka salam')
  let sideBar = document.querySelector('#side-bar');
  mainWindow.classList.remove('active');
  sideBar.style.visibility = "visible";
  console.log('biadd ka salam');
  //setTimeout(()=>(sideBar.style.visibility="hidden"),3000);
  if(m%2===0)
  {
    console.log('if ka salam');
    sideBar.style.visibility="hidden";
    mainWindow.classList.add('active');
  }
  m++;
}