const row0 = document.querySelectorAll(".line0");
const row1 = document.querySelectorAll(".line1");

// date format: year-month-day

const exceptions = [
    '2023-03-16',
]

const fromDate = '2023-03-01';  // from when are the absences to be removed


const comparisonDate = (date) =>{
    // if the given date is greater, it is false
    
    if (parseInt(date.slice(0, 4)) > parseInt(fromDate.slice(0, 4))){
        return false;
    } else if (parseInt(date.slice(0, 4)) == parseInt(fromDate.slice(0, 4))){

        if (parseInt(date.slice(5, 7)) > parseInt(fromDate.slice(5, 7))){
            return false;
        } else if (parseInt(date.slice(5, 7)) == parseInt(fromDate.slice(5, 7))){
    
            if (parseInt(date.slice(8, 10)) >= parseInt(fromDate.slice(8, 10))){
                return false;
            } else {
                return true;
            }

        } else {
            return true;
        }

    } else {
        return true;
    }

}

const generateListDays = () =>{
    let days = [];
    
    for (let i = 0; i < row0.length; i++){
        let date = row0[i].firstElementChild.innerText.slice(0, 10);
        if (date.length == 10){
            if (comparisonDate(date)){
                days.push(date);
            }
        }
    }

    for (let i = 0; i < row1.length; i++){ 
        let date = row1[i].firstElementChild.innerText.slice(0, 10);
        if (date.length == 10){
            if (comparisonDate(date)){
                days.push(date);
            }
        }
    }

    for (let i=0; i < exceptions.length; i++){
        days.push(exceptions[i])
    }

    return days;
}


const days = generateListDays()


for (let i=0; i < row0.length; i++){
    if (days.indexOf(row0[i].firstElementChild.innerText.slice(0, 10)) == -1){
        row0[i].style.display = 'none';
    }
}
for (let i=0; i < row1.length; i++){
    if (days.indexOf(row1[i].firstElementChild.innerText.slice(0, 10)) == -1){
        row1[i].style.display = 'none';
    }
}
