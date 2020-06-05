let topicsArray=[
    "Beef",
    "Pork",
    "Canned food",
    "Chicken",
    "Canned food",
    "Fish",
    "Wagyu!!"
]

let startDate = new Date();
function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

