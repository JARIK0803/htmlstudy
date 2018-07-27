function myFirstApp(name, age) {
    alert("Привет, меня зовут " + name + " и это моя первая программа!");

    function showSkills() {
        let skills = ['HTML', 'CSS', 'SCSS'];
        document.write("Я владею: ", '<br>' );
        for (let i = 0; i < skills.length; i++) {
            document.write(/*"Я владею: ",*/ skills[i], '<br>' );
        }
    }
    showSkills();

    function checkAge() {
        if (age > 18) {
            document.write('Мне уже исполнилось 18 лет!');
        } else {
            document.write('Мне еще не исполнилось 18 лет!');
        }
    }
    checkAge();

    function calcPow(num) {
        console.log(Math.pow(num, num));
    }
    calcPow(4);

}

myFirstApp("Ярослав", 25);