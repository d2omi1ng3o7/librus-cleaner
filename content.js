const row0 = document.querySelectorAll(".line0");
const row1 = document.querySelectorAll(".line1");

// date format: year-month-day

const exceptions = [
    // '2023-03-16', example how to add day
]

const fromDate = '2023-03-01';  // from when are the absences to be removed


const comparisonDate = (date) =>{
    // if the given date is greater, return true
    
    if (parseInt(date.slice(0, 4)) > parseInt(fromDate.slice(0, 4))){
        return true;
    } else if (parseInt(date.slice(0, 4)) == parseInt(fromDate.slice(0, 4))){

        if (parseInt(date.slice(5, 7)) > parseInt(fromDate.slice(5, 7))){
            return true;
        } else if (parseInt(date.slice(5, 7)) == parseInt(fromDate.slice(5, 7))){
            if (parseInt(date.slice(8, 10)) >= parseInt(fromDate.slice(8, 10))){ 
                return true;
            }
        }
    }
    return false;
}

const deleteAbsence = () =>{
    
    for (let i = 0; i < row0.length; i++){
        let date = row0[i].firstElementChild.innerText.slice(0, 10);
        if (exceptions.indexOf(date) == -1){
            if (date.length == 10){
                if (comparisonDate(date)){
                    row0[i].style.display = 'none';
                }
            }
        }
        
    }

    for (let i = 0; i < row1.length; i++){ 
        let date = row1[i].firstElementChild.innerText.slice(0, 10);
        if (exceptions.indexOf(date) == -1){
            if (date.length == 10){
                if (comparisonDate(date)){
                    row1[i].style.display = 'none';
                }
            }
        }
    }
}

const days = deleteAbsence()
