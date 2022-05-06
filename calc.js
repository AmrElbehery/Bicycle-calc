// start

function calc() {
  let opition = document.getElementById('select-Rider');
  let height = document.getElementById('height');
  let leg = document.getElementById('leg');
  let btn = document.getElementById('btn');
  let result = document.querySelector('.result');

  // make change rider value when choose
  opition.addEventListener('change', () => {
    //   declear rider value
    let select_Rider = document.getElementById('select-Rider').value;
    // make change height value when choose
    height.addEventListener('change', () => {
      //   declear rider height
      let heightvalue = document.getElementById('height').value;
      // make change height-leg value when choose
      leg.addEventListener('change', () => {
        //   declear rider height-leg
        let legvalue = document.getElementById('leg').value;
        //   calc the finall value with click calc-btn
        btn.onclick = () => {
          // when chose Female

          // ################### >>> (5.8)
          if (
            select_Rider == 'Female' &&
            heightvalue == '5.8' &&
            legvalue == '33'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'Female' &&
            heightvalue == '5.8' &&
            legvalue == '32'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'Female' &&
            heightvalue == '5.8' &&
            legvalue == '31'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          }
          // ################### >>> (6)
          else if (
            select_Rider == 'Female' &&
            heightvalue == '6' &&
            legvalue == '33'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'Female' &&
            heightvalue == '6' &&
            legvalue == '32'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'Female' &&
            heightvalue == '6' &&
            legvalue == '31'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          }
          // ################### >>> (5.5)
          else if (
            select_Rider == 'Female' &&
            heightvalue == '5.5' &&
            legvalue == '33'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'Female' &&
            heightvalue == '5.5' &&
            legvalue == '32'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'Female' &&
            heightvalue == '5.5' &&
            legvalue == '31'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          }

          // when chose Male
          // ################### >>> (5.8)
          if (
            select_Rider == 'male' &&
            heightvalue == '5.8' &&
            legvalue == '33'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'male' &&
            heightvalue == '5.8' &&
            legvalue == '32'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'male' &&
            heightvalue == '5.8' &&
            legvalue == '31'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          }
          // ################### >>> (6)
          else if (
            select_Rider == 'male' &&
            heightvalue == '6' &&
            legvalue == '33'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'male' &&
            heightvalue == '6' &&
            legvalue == '32'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'male' &&
            heightvalue == '6' &&
            legvalue == '31'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          }
          // ################### >>> (5.5)
          else if (
            select_Rider == 'male' &&
            heightvalue == '5.5' &&
            legvalue == '33'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else if (
            select_Rider == 'male' &&
            heightvalue == '5.5' &&
            legvalue == '32'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          } else
            select_Rider == 'male' && heightvalue == '5.5' && legvalue == '31';
          {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          }

          // when chose Baby
          if (
            select_Rider == 'baby' &&
            heightvalue == '5.5' &&
            legvalue == '31'
          ) {
            result.innerHTML = heightvalue * 2.45 + 'cm';
          }
        };
      });
    });
  });
}

calc();
