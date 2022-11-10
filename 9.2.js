
const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; // 2. Debugger attached.не совсем понимаюю это
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;
    return bonus;
    };
    // console.log(calculateBonus(100,60)) // вывод функции
     
    module.exports = calculateBonus;