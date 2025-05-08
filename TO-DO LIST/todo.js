
let INPUTt = document.querySelector('.input-It');
// //input.innerText = 'examle for it';
let DATEe = document.querySelector('.date-It');
let COLOURr = document.querySelector('.colour-It');
//--> ////////////////////
//INPUTt.value = 'KJOO';//
// DATEe='11/3/2009';
// COLOURr = 'green';
//--> ///////////////////
function ttime() {
  // Create a new Date object
  let currentTime = new Date();

  // Get the current hours, minutes, and seconds
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
let amPm =  hours<=12 ?'am':'pm';
  hours = hours % 12;
  hours = hours ? hours : 12;
  // Format the time
  formattedTime = hours + ":" + minutes + ":" + seconds+' > '+amPm;

  dayYmonth = currentTime.getFullYear()+'/'+currentTime.getMonth()+'/'+currentTime.getDay()+'.';

}
let formattedTime ;
let dayYmonth;
console.log("Current Time: " + formattedTime);
//console.log(item.input_item);
//console.log(item.color_item);

const submitTask = document.querySelector('.sub-it');
let OUTPUT = document.querySelector('.output');
// const {input_item , date_item,color_item}=item;

let item = [];
let perminentItem=[];

let i = 0;
submitTask.addEventListener('click', () => {
ttime();

  item.push({
    input_item: INPUTt.value,
    date_item: DATEe.value,
    color_item: COLOURr.value,
    time_item: formattedTime
    //color_item:COLOURr.value
  });
  //console.log(input_It.value);
perminentItem.push({
  input_item: INPUTt.value,
  date_item: DATEe.value,
  color_item: COLOURr.value,
  time_item: formattedTime,
  day_item: dayYmonth
  //color_item:COLOURr.value
});

  // Handle color picker input
  // COLOURr.addEventListener('input', () => {
  //   let lastIndex = item.length - 1;  // Get the last added item
  //   if (lastIndex >= 0) {
  //     // Update the color of the last added task
  //     item[lastIndex].color_item = COLOURr.value;
  //     // Update the background color of the last box
  //     let lastBox = document.querySelectorAll('.output-box')[lastIndex];
  //     lastBox.style.backgroundColor = item[i].color_item;
  //   }
  // });

  INPUTt.value = '';
  DATEe.value = '';
  COLOURr.value = '#ffffff';

  for (let index = 0; index < perminentItem.length; index++) {
    settingLocal_forPerminent(perminentItem)  
   }
  for (i; i < item.length; i++) {
    display(item, i);
    settingLocal(item, i);
    console.log(`for loop ka ${i} salam`)
  }
gettingLocal();
gettingLocal_forPerminent();

});

let newhtml = '';
function display(item, i) {
  console.log('submit ka salam');
  newhtml =
    `<div class="output-innerbox">
      <input type="checkbox" onclick="checkBox(${i})">
      <span class="output-box" style="background-color: ${item[i].color_item}";>
        <output class="in-output-Box">
        ${item[i].input_item}
        </output>
      </span>
      <span class="date">${item[i].date_item}</span>
      <span class="delet-btn" onclick="del(${i}); ;">X</span>
    </div>
  `;

  OUTPUT.innerHTML += newhtml;
  addingHOVEReffect();
}

function settingLocal_forPerminent(perminentItem)
{
  localStorage.setItem('task_for_histry', JSON.stringify(perminentItem));
}
function gettingLocal_forPerminent()
{
  let perminentSafe = JSON.parse(localStorage.getItem('task_for_histry')) || []; 
perminentItem = perminentSafe;

  console.log(perminentSafe);
}

function settingLocal(item) {
  localStorage.setItem('task', JSON.stringify(item));
}

function gettingLocal() {
  let todoGetItem = JSON.parse(localStorage.getItem('task')) || [];
  item = todoGetItem;
  OUTPUT.innerHTML = '';
  for (let i = 0; i < item.length; i++) {
      display(item, i);
  }
}
gettingLocal_forPerminent();
gettingLocal();
// if (item.length==0) {
//   console.log("Item is not null");
// } else {
//   console.log("Item is null");
// }


// let outboxColour = document.querySelectorAll('.in-output-Box');
// //COLOURr.forEach((colorPicker, index) => {
//   console.log('colorR ka salam')
//   COLOURr.addEventListener('input', () => {
//     // Update the background color of the corresponding output box
//     outboxColour[index].style.backgroundColor = COLOURr.value;
//     COLOURr.value = '';
//   });
//});
//



let n = 0;
function checkBox(i) {
  let outPUTbox = document.querySelectorAll('.in-output-Box');
  console.log('chk' + n);
  if (n % 2 == 0) {
    console.log('andarrr')
    outPUTbox.forEach(() => {
      console.log('checkbox ka add anDDAR KA salam ' + i + n);
      outPUTbox[i].classList.add('NOTESactive');
    });

  }
  else if (n % 2 != 0) {
    outPUTbox.forEach(() => {
      console.log('checkbox ka remove anDDAR KA salam ' + i);
      outPUTbox[i].classList.remove('NOTESactive');
    });
  }
  n++;
}

function del(i) {
  item.splice(i, 1);
  settingLocal(item)
  OUTPUT.innerHTML = ``;
  for (let k = 0; k < item.length; k++) {
    display(item, k);
  }
  console.log('ji');
}

function addingHOVEReffect() {
  let outputInnerBox = document.querySelectorAll('.output-innerbox');
  const delHover = document.querySelectorAll('.delet-btn');

  // Add hover effect to delete buttons
  delHover.forEach((btn, i) => {
    btn.addEventListener('mouseover', () => {
      console.log('hover ka salam');
      outputInnerBox[i].classList.add('Hover');
      delHover[i].style.color = 'white';
    });
    btn.addEventListener('mouseout', () => {
      outputInnerBox[i].classList.remove('Hover');
      delHover[i].style.color = 'red';
    });
  });
}




addingHOVEReffect();
