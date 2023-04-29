window.onload = () => {

    const dateInputForm = document.querySelector(".date-input-form")
    
    //Display variables
    const years = document.querySelector(".years")
    const months = document.querySelector(".months")
    const days = document.querySelector(".days")

    //Current Date variables
    const currentDate = new Date()
    const currentDay = parseInt(currentDate.getDate())
    const currentMonth = parseInt(currentDate.getMonth() + 1)

    const currentYear = parseInt(currentDate.getFullYear())
    
    //input variables
    const inputYears = document.querySelector(".year-input")
    const inputMonths = document.querySelector(".month-input")
    const inputDays = document.querySelector(".day-input")

    //day,month,year text
    const yearText = document.querySelector(".error-text.year")
    const monthText = document.querySelector(".error-text.month")
    const dayText = document.querySelector(".error-text.day")
    

    //Error variables
    const labels = document.querySelectorAll("label")
    const inputs = document.querySelectorAll("input")
    const errorTexts = document.querySelectorAll(".error-text")

    //switch variables
    let switchYear = true
    let switchMonth = true
    let switchDay = true 
    let switchWhole = true
    let switchEmpty = true
    
    let yearInput
    inputYears.addEventListener("input", (e) => {
       yearInput = parseInt(e.currentTarget.value)
       
       if (yearInput > currentYear){

           labels.forEach((label) => {
               if (label.classList.contains("year-label")) {
                   label.classList.add("year-error")
               }
           })

           inputs.forEach((input) => {
               if (input.classList.contains("year-input")) {
                   input.classList.add("year-error")
               }
           })

           yearText.textContent = "Must be in the past"

           switchYear = false


       }
       else if (yearInput < 1){
            labels.forEach((label) => {
                if (label.classList.contains("year-label")) {
                    label.classList.add("year-error")
                }
            })

            inputs.forEach((input) => {
                if (input.classList.contains("year-input")) {
                    input.classList.add("year-error")
                }
            })

            yearText.textContent = "Must be a valid year"

            switchYear = false
       }
       else {

           labels.forEach((label) => {
               if (label.classList.contains("year-label")) {
                   label.classList.remove("year-error")
               }
           })

           inputs.forEach((input) => {
               if (input.classList.contains("year-input")) {
                   input.classList.remove("year-error")
               }
           })

            yearText.textContent = ""

            switchYear = true

       }

       
    })

    

    let monthInput
    inputMonths.addEventListener("input", (e) => {
       monthInput = parseInt(e.currentTarget.value)
       console.log(monthInput)
       
       if (monthInput > 12 || monthInput < 1){
           
           labels.forEach((label) => {
               if(label.classList.contains("month-label")){
                    label.classList.add("month-error")
               }
           })

           inputs.forEach((input) => {
                if (input.classList.contains("month-input")){
                    input.classList.add("month-error")
                }
           })

           monthText.textContent = "Must be a valid month"

           switchMonth = false
           
       }
       else {
           labels.forEach((label) => {
               if (label.classList.contains("month-label")) {
                   label.classList.remove("month-error")
                   monthText.textContent = "Must be a valid month"
               }
           })

           inputs.forEach((input) => {
               if (input.classList.contains("month-input")) {
                   input.classList.remove("month-error")
               }
           })


            monthText.textContent = ""

           switchMonth = true

       }
    })

    let dayInput
    inputDays.addEventListener("input", (e) => {
       dayInput = parseInt(e.currentTarget.value)
        console.log(dayInput)

        if (dayInput > 31 || dayInput < 1) {

            labels.forEach((label) => {
                if (label.classList.contains("day-label")) {
                    label.classList.add("day-error")
                }
            })

            inputs.forEach((input) => {
                if (input.classList.contains("day-input")) {
                    input.classList.add("day-error")
                }
            })

            dayText.textContent = "Must be a valid day"

            switchDay = false

        }
        else {
            labels.forEach((label) => {
                if (label.classList.contains("day-label")) {
                    label.classList.remove("day-error")
                    dayText.textContent = "Must be a valid day"
                }
            })

            inputs.forEach((input) => {
                if (input.classList.contains("day-input")) {
                    input.classList.remove("day-error")
                }
            })


            dayText.textContent = ""

            switchDay = true

        }

    })
    
    

    dateInputForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const data = new FormData(dateInputForm)
        const birthDay = parseInt(data.get("day"))
        const birthMonth = parseInt(data.get("month"))
        const birthYear = parseInt(data.get("year"))
    

    
        if (switchDay && switchMonth && switchYear){
            //Error-empty
            if (isNaN(errorEmpty(birthDay, birthMonth, birthYear))) {

                labels.forEach((label) => {
                    label.classList.add("empty-error")
                })

                inputs.forEach((input) => {
                    input.classList.add("empty-error")
                })

                errorTexts.forEach((errorText) => {
                    errorText.textContent = "This field is required"
                })


                switchEmpty = false
            }
            else {

                labels.forEach((label) => {
                    label.classList.remove("empty-error")
                })

                inputs.forEach((input) => {
                    input.classList.remove("empty-error")
                })

                errorTexts.forEach((errorText) => {
                    errorText.textContent = ""
                })

                switchEmpty = true


            }

            //Remove unnecessary styling for empty-errors
            if (birthDay >= 1 && birthDay <= 31){
                labels.forEach((label) => {
                    if(label.classList.contains("day-label")){
                        label.classList.remove("empty-error")
                    }
                })

                inputs.forEach((input) => {
                    if(input.classList.contains("day-input")){
                        input.classList.remove("empty-error")
                    }
                })

                errorTexts.forEach((errorText) => {
                    if (errorText.classList.contains("day") ){
                        errorText.textContent = ""
                    }
                })

            }
            
            if (birthMonth >= 1 && birthMonth <= 12){
                labels.forEach((label) => {
                    if(label.classList.contains("month-label")){
                        label.classList.remove("empty-error")
                    }
                })

                inputs.forEach((input) => {
                    if(input.classList.contains("month-input")){
                        input.classList.remove("empty-error")
                    }
                })

                errorTexts.forEach((errorText) => {
                    if (errorText.classList.contains("month")){
                        errorText.textContent = ""
                    }
                })

            }

            if (birthYear >= 1 && birthYear <= currentYear){
                labels.forEach((label) => {
                    if(label.classList.contains("Year-label")){
                        label.classList.remove("empty-error")
                    }
                })

                inputs.forEach((input) => {
                    if(input.classList.contains("Year-input")){
                        input.classList.remove("empty-error")
                    }
                })

                errorTexts.forEach((errorText) => {
                    if (errorText.classList.contains("Year")){
                        errorText.textContent = ""
                    }
                })

            }


            //whole Error
            if (birthYear % 4 !== 0){
                if (birthMonth % 2 === 0 && birthMonth !== 2){
                    if (birthDay > 30){
                        errorWhole()
                    }
                    else {
                        switchWhole = true
                    }
                    
                }
                else if (birthMonth % 2 === 0 && birthMonth === 2){
                    if (birthDay > 28){
                        errorWhole()
                    }
                    else {
                        switchWhole = true
                    }
                    
                }
            }
            else if (birthYear % 4 === 0){
                if (birthMonth % 2 === 0 && birthMonth !== 2){
                    if (birthDay > 30){
                        errorWhole()
                    }
                    else {
                        switchWhole = true
                    }
                    
                }
                else if (birthMonth % 2 === 0 && birthMonth === 2){
                    if (birthDay > 29){
                        errorWhole()
                    }
                    else {
                        switchWhole = true
                    }
                    
                }
            }
            
            console.log(switchWhole)
            
        
            if (switchWhole && switchEmpty){
                //Day
                if (birthDay === currentDay) {
                    /* 
                    also works lol:
                    const diffDays = birthDay - currentDay;
                    days.textContent = `${diffDays}` 
                    */
                    if (birthMonth > currentMonth) {
                        if (birthYear % 4 !== 0) {
                            const diffDays = birthDay - currentDay;
                            days.textContent = `${diffDays}`
                        } else if (birthYear % 4 === 0) {
                            if (birthMonth === 2) {
                                const diffDays = birthDay - currentDay;
                                days.textContent = `${diffDays}`
                            }
                        }
                    } else if (birthMonth === currentMonth) {
                        if (birthYear % 4 !== 0) {
                            const diffDays = birthDay - currentDay;
                            days.textContent = `${diffDays}`
                        } else if (birthYear % 4 === 0) {
                            if (birthMonth === 2) {
                                const diffDays = birthDay - currentDay;
                                days.textContent = `${diffDays}`
                            }
                        }
                    } else if (birthMonth < currentMonth) {
                        if (birthYear % 4 !== 0) {
                            if (birthYear % 4 !== 0) {
                                const diffDays = birthDay - currentDay;
                                days.textContent = `${diffDays}`
                            }
                        } else if (birthYear % 4 === 0) {
                            if (birthMonth === 2) {
                                const diffDays = birthDay - currentDay;
                                days.textContent = `${diffDays}`
                            }
                        }
                    }
                } else if (birthDay > currentDay) {
                    if (birthMonth % 2 !== 0) {
                        if (birthYear % 4 !== 0) {
                            if (birthMonth === 2) {
                                const diffDays = 28 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            } else if (birthMonth !== 2) {
                                const diffDays = 31 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            }
                        }
                        if (birthYear % 4 === 0) {
                            if (birthMonth === 2) {
                                const diffDays = 29 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            } else if (birthMonth !== 2) {
                                const diffDays = 31 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            }
                        }
                    } else if (birthMonth % 2 === 0) {
                        if (birthYear % 4 !== 0) {
                            if (birthMonth === 2) {
                                const diffDays = 28 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            } else if (birthMonth !== 2) {
                                const diffDays = 30 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            }
                        }
                        if (birthYear % 4 === 0) {
                            if (birthMonth === 2) {
                                const diffDays = 29 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            } else if (birthMonth !== 2) {
                                const diffDays = 30 - (birthDay - currentDay);
                                days.textContent = `${diffDays}`
                            }
                        }
                    }
                } else if (birthDay < currentDay) {
                    const diffDays = currentDay - birthDay;
                    days.textContent = `${diffDays}`
                }
            
            
                //Month
            
                if (birthMonth > currentMonth) {
                    if (birthDay < currentDay) {
                        const diffMonths = 12 - (birthMonth - currentMonth);
                        months.textContent = `${diffMonths}`
                    } else if (birthDay === currentDay){
                        const diffMonths = 12 - (birthMonth - currentMonth);
                        months.textContent = `${diffMonths}`
                    }else if (birthDay > currentDay) {
                        const diffMonths = (12 - (birthMonth - currentMonth + 1));
                        months.textContent = `${diffMonths}`
                    }
                } else if (birthMonth === currentMonth) {
                    const diffMonths = currentMonth - birthMonth;
                    months.textContent = `${diffMonths}`
                } else if (birthMonth < currentMonth) {
                    const diffMonths = currentMonth - birthMonth;
                    months.textContent = `${diffMonths}`
                }
            
                //Year
                if (currentYear > birthYear) {
                    if (currentMonth > birthMonth) {
                        const diffYears = currentYear - birthYear;
                        years.textContent = `${diffYears}`
                    } else if (currentMonth < birthMonth) {
                        const diffYears = (currentYear - birthYear) - 1;
                        years.textContent = `${diffYears}`
                    } else if (currentMonth === birthMonth) {
                        if (currentDay >= birthDay) {
                            const diffYears = currentYear - birthYear;
                            years.textContent = `${diffYears}`
                        } else if (currentDay < birthDay) {
                            const diffYears = (currentYear - birthYear) - 1;
                            years.textContent = `${diffYears}`
                        }
                    }
                }
            }

        

        }
    
        
        
    
    
    })
    
    
    
    const errorEmpty = (birthDay,birthMonth,birthYear) => {

        return birthDay && birthMonth && birthYear
    }
        
    let errorWhole = () => {
        labels.forEach((label) => {
            if (label.classList.contains("day-label")) {
                label.classList.add("day-error")
            }

            label.classList.add("empty-error")
        })
    
        inputs.forEach((input) => {
            if (input.classList.contains("day-input")) {
                input.classList.add("day-error")
            }
            input.classList.add("empty-error")
        })

        switchWhole = false
    
        dayText.textContent = "Must be a valid date"
    }
    
    let counterDay = (diffDays) => {
        let countDay = 0
    }

    let counterMonth = (diffMonth) => {
        let countMonth = 0
    }

    let counterYear = (diffYear) => {
        let countYear = 0
    }


}



/* 
Pseudocode
1 2 3 4 5 6 7 8 9 10 11 12 | 1 2 3 4 5 6 7 8 9 10 11 12

Day
if (birthDay === currentDay):
    if (birthMonth > currentMonth):
        if(birthYear % 4 !== 0):
            birthDay - currentDay
        else if (birthYear % 4 === 0):
            if (birthMonth === 2):
                birthDay - currentDay
    if (birthMonth === currentMonth):
        if (birthYear % 4 !== 0):
           birthDay - currentDay
        else if (birthYear % 4 === 0):
           if (birthMonth === 2):
                birthDay - currentDay
    if (birthMonth < currentMonth):
        if (birthYear % 4 !== 0):
            if (birthYear % 4 !== 0):
                birthDay - currentDay
        else if (birthYear % 4 === 0):
           if (birthMonth === 2):
                birthDay - currentDay
else if (birthDay > currentDay):
    if (birthMonth % 2 !== 0):
        if (birthYear % 4 !== 0):
            if (birthMonth === 2):
                28 - (birthDay - currentDay)
            else if (birthMonth !== 2):
                31 - (birthDay - currentDay)
        if (birthYear % 4 === 0):
            if (birthMonth === 2):
                29 - (birthDay - currentDay)
            else if (birthMonth !== 2):
                31 - (birthDay - currentDay)
    if (birthMonth % 2 === 0):
        if (birthYear % 4 !== 0):
            if (birthMonth === 2):
                28 - (birthDay - currentDay)
            else if (birthMonth !== 2):
                30 - (birthDay - currentDay)
        if (birthYear % 4 === 0):
            if (birthMonth === 2):
                29 - (birthDay - currentDay)
            else if (birthMonth !== 2):
                30 - (birthDay - currentDay)
else if (birthDay < currentDay):
    currentDay - birthDay

Month
if (birthMonth > currentMonth):
    if (birthDay <= currentDay):
        12 - (birthMonth - currentMonth)
    if (birthDay > currentDay):
        (12 - (birthMonth - currentMonth)) + 1
else if (birthMonth === currentMonth):
    currentMonth - currentMonth
else if (birthMonth < currentMonth):
    currentMonth - birthMonth


Year 
if (currentYear > birthYear):
    if (currentMonth > birthMonth):
        currentYear - birthYear
    else if (currentMonth < birthMonth):
        (currentYear - birthYear) - 1
    else if (currentMonth === birthMonth):
        if (currentDay > birthDay):
            (currentYear - birthYear) 
        else if (currentDay === birthDay):
            (currentYear - birthYear) 
        else if (currentDay < birthDay):
            (currentYear - birthYear) - 1
*/