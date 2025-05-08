let historyInnerBox = document.querySelector('.history-innerBox');
function hist() {
  console.log('his.js running ')
  {
    OUTPUT.style.display = 'none';
    //OUTPUT.style.position = 'absolute';
    historyInnerBox.style.display='block';
  }

  let his_newhtml = ``;
  perminentItem.forEach((Pitem) => {
    console.log('per foreach ka salam');
    console.log(Pitem);
    his_newhtml += `
          <li class="Div">
            <span class="his-output-Box">
              ${Pitem.input_item}
              </span>
              <span class="his-date">${Pitem.date_item}</span>
              <span class="days">${Pitem.day_item}
              </span>
              <span class="amPm-time">${Pitem.time_item}</span>
          </li>
            `
  });
  historyInnerBox.innerHTML = his_newhtml;
}



// .history-innerBox {
//   visibility: hidden;
//   display: flex; /* Flexbox for layout */
//   flex-direction: column;/* Items in a vertical stack */
//   position:absolute;
//   /* position: relative; */
//   height:fit-content;
//   padding: 15px;
//   gap: 10px; /* Add space between inner elements */
//   background-color: rgb(245, 240, 240);
// }