//조건문 Conditional Statement
//switch
//if else if else..... else
//정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우 

let day = 2; //0:월요일 1:화요일 .... 6:일요일 

switch(day){
    case 0:
        dayName = '월요일';
        break; //코드가 멈출 수 있도록 break로 끊어주기 
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일';
        break;
        default:
            console.log("해당하는 요일이 없음");
}
console.log(dayName);

let Food = 'yogurt';

switch(Food){
    case 'yogurt':
    case 'chocolate':
        text = 'like it';
        break;
    case 'sodacandy':
        text = "don't like it";
        break;
}
console.log(text);

let fruit = 'apple';

switch(fruit){
    case 'apple' :
    case 'strawberry' :
    color = 'red';
    break;
    case 'blueberry' :
    color = 'blue';
    break;
}
console.log(color);