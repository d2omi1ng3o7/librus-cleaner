const row = document.querySelectorAll(".line0", ".line1");
// const row1 = document.querySelectorAll(".line1");
const fromDate = '2023-03-01';

console.log(row)


// for (let i = 0; i < row1.length; i++){
//     row.push(row1[i]);
// }


const generateListDays = () =>{
    let days = [];
    
    for (let i = 0; i < row.length; i++){ 
        days.push(row[i].firstElementChild.innerText.slice(0, 10));
    }

    return days;
}

let days = generateListDays();
let whetherShow = false;

for (let i = 0; i < days.length; i++){

    if (whetherShow){
        row[i].style.display = 'none';
    }


    if (days[i] == fromDate){
        whetherShow = true;
    }



    console.log(days[i]);
}





// for (let i = 0; i < row0.length; i++){   
//     let date = row0[i].firstElementChild.innerText.slice(0, 10)

//     if (parseInt(date.slice(0, 5)) > parseInt(fromDate.slice(0, 5))){
//         row0[i].style.display = 'none';
//     } else if (parseInt(date.slice(0, 5)) == parseInt(fromDate.slice(0, 5))){
//         if (parseInt(date.slice(5, 7)) > parseInt(fromDate.slice(5, 7))){
//             row0[i].style.display = 'none';
//         } else if (parseInt(date.slice(8, 10)) >= parseInt(fromDate.slice(8, 10))){
//             row0[i].style.display = 'none';
//         }
//     } 
// }

// for (let i = 0; i < row1.length; i++){
//     let date = row1[i].firstElementChild.innerText.slice(0, 10)

//     if (parseInt(date.slice(0, 5)) > parseInt(fromDate.slice(0, 5))){
//         row1[i].style.display = 'none';
//     } else if (parseInt(date.slice(0, 5)) == parseInt(fromDate.slice(0, 5))){
//         if (parseInt(date.slice(5, 7)) > parseInt(fromDate.slice(5, 7))){
//             row1[i].style.display = 'none';
//         } else if (parseInt(date.slice(8, 10)) >= parseInt(fromDate.slice(8, 10))){
//             row1[i].style.display = 'none';
//         }
//     } 
// }


// let date = row1[i].firstElementChild.innerText.slice(0, 10)

//     if (parseInt(date.slice(0, 5)) < parseInt(fromDate.slice(0, 5))){
//         console.log('zostaw1')
//     } else if (parseInt(date.slice(5, 7)) < parseInt(fromDate.slice(5, 7))){
//         console.log('zostaw2')
//     }else if (parseInt(date.slice(8, 10)) <= parseInt(fromDate.slice(8, 10))){
//         console.log('zostaw3')
//     }else{
//         row1[i].style.display = 'none';
//     }
