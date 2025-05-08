let forM = document.querySelector('#form');
// const uName = document.querySelector('h5-user');
// const eMail = document.querySelector('h5-email');
let newhtml = ``;
function mainForm() {
  newhtml = `
  <form id="form">
    <h3>
      Login to your Account
    </h3>
    <div id="log-in">
      <h5 class="h5-user" onclick="mainForm();">Username</h5>
      <h5 class="h5-email" onclick="eMail();">Email</h5>
      
      <div>
      <input type="text" type="email" id="user-name"
      placeholder="Username">
    </div>
    <div>
      <input type="password" id="user-pasward"
      placeholder="user's password">
      <span class="forget-paswad">forget password ?</span>
    </div>
  </div>
  <button type="submit" class="submit-btn">Login</button>
    <div class="dont-haveAcct">
      <h4>Dont have account?<a onclick="con();">Sign-up</a></h4>
    </div>
      `;
  forM.innerHTML = newhtml;
  buttton(1);
}
mainForm();

// function uName(){
//   newhtml=`
//   <h3>
//       Login to your Account
//     </h3>

//   <div id="log-in">

//          <h5 class="h5-user" onclick="uName();">Username</h5>
//       <h5 class="h5-email" onclick="eMail();">Email</h5>
//     <div>
//       <input type="text" type="email" id="user-name"
//       placeholder="Username">
//     </div>
//     <div>
//       <input type="password" id="user-pasward"
//       placeholder="user's password">
//     </div>
//   </div>
//   <button type="submit">Login</button>
//     <div class="dont-haveAcct">
//       <h4>Dont have account?<a onclick="con();">Sign-up</a></h4>
//     </div>
//   `;
//   forM.innerHTML=newhtml;
// };

function eMail() {
  newhtml = `
  <h3>
      Login to your Account
    </h3>
  <div id="log-in">
  
         <h5 class="h5-user" onclick="mainForm();">Username</h5>
      <h5 class="h5-email" onclick="eMail();">Email</h5>
    <div>
      <input type="email" id="user-email"
      placeholder="Email">
    </div>
    <div>
      <input type="password" id="user-pasward"
      placeholder="user's password">
      <span class="forget-paswad">forget password ?</span>
    </div>
  </div>
  <button type="submit" class="submit-btn">Login</button>
    <div class="dont-haveAcct">
      <h4>Dont have account?<a onclick="con();">Sign-up</a></h4>
    </div>
  `;
  forM.innerHTML = newhtml;
  buttton(1);
}

//display();
function con() {
  console.log('kolo');
  display();
}

function display() {
  console.log('display sign-up ka salam')
  newhtml = `
   <h3>
      Wellcom! there your Account
    </h3>
<div id="Sign-up">
    <div>
      <input type="text" id="user-name"
      placeholder="Username">
    </div>
    <div>
      <input type="email" id="user-email" placeholder="Email">
    </div>
    <div>
      <input type="password" id="user-pasward" placeholder="password">
    </div>
    <div>
      <input type="text" id="user-conform-pasward"
      placeholder="Conform password">
    </div>
    
      <span class="back" onclick="mainForm();"><img src="back.png"></span>
    
  </div>
    <button type="submit" class="submit-btn">Sign up</button>`;
  forM.innerHTML = newhtml;
  buttton(0);
}



function popup() {
  newhtml = `
  <div>
    <h2>Thank's for creating Account</h2>
    <h4>Now you can use our servises for Free!</h4>
    <a onclick="mainForm();">Login please</a>
  </div>  
  `
  forM.innerHTML = newhtml;
}

function buttton(n) {
  let Submit = document.querySelector('.submit-btn');

  let userName = document.querySelector('#user-name');
  let userPasward = document.querySelector('#user-pasward');
  let userEmail = document.querySelector('#user-email');
  let userConformP = document.querySelector('#user-conform-pasward');

  let USER = localStorage?.getItem('USER= ') || '';
  let EMAIL = localStorage?.getItem('EMAIL= ') || '';
  let PASSWARD = localStorage?.getItem('PASSWARD= ') || '';
  let CONFORMPASSWARD = localStorage?.getItem('conformedpassword= ') || '';
  // USER = 'teseen';
  // EMAIL = 'teseen@gmail';
  // PASSWARD = '123x';
  // CONFORMPASSWARD;

  console.log(USER || EMAIL);
  console.log(PASSWARD);
  if (n == 1) {
    Submit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('salam submit btn ka');

      const usernameValue = userName?.value || ''; // Fallback if `userName` is null
      const userEmailValue = userEmail?.value || '';
      const passwordValue = userPasward?.value || '';

      if ((usernameValue === USER || userEmailValue === EMAIL) && passwordValue === PASSWARD) {
        console.log('if ka salam');
        console.log(usernameValue || userEmailValue);
        console.log(passwordValue);
        alert('Login successful!');
        log_mainFUN();
        window.location.href = "../main.html";
      } else {
        console.log('else ka salam');
        console.log(passwordValue || "No password provided");
        alert('Invalid');
      }
    });
  } else if (n == 0) {
    Submit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('signup form active');
      if (((USER == userName.value) || (EMAIL == userEmail.value)) || (PASSWARD == userPasward.value)) {
        alert('these attributes were chosen by user : ' + USER);
        mainForm();
      } else {
        localStorage.setItem('USER= ', userName.value)
        localStorage.setItem('EMAIL= ', userEmail.value)
        localStorage.setItem('PASSWARD= ', userPasward.value)
        localStorage.setItem(`conformedpassword= `, CONFORMPASSWARD = (PASSWARD === userConformP.value) ? userConformP.value : alert('conformation password is "worng".'));
        if (CONFORMPASSWARD) { popup(); }
        else display();
      }
    });
  }

}

// console.log(userName.value);
// console.log(userPasward.value);
// console.log(userEmail.value);