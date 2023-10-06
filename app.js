class student{
    static all = [];
    constructor(informations){
        this.informations = informations;
        student.all.push(informations);
    }
    save (){
        console.log(student.all);
        window.localStorage.setItem(`student`, JSON.stringify(student.all));
    }
};

let display = document.querySelector("select[name = display]");
let button = document.querySelector("button[type = submit]");
button.addEventListener("click", (e) =>{
    e.preventDefault();
    if (display.value == "table"){
        document.querySelector(".table-container").hidden = false;
        let fullName = document.createElement("th");
        let dateOfBirth = document.createElement("td");
        let gender = document.createElement("td");
        let phoneNumber = document.createElement("td");
        let grade = document.createElement("td");
        let row = document.createElement("tr");
        let table = document.getElementById("theTable");

        fullName.innerHTML = document.querySelector("input[name = full-name]").value;
        dateOfBirth.innerHTML = document.querySelector("input[name = Date-of-birth]").value;
        gender.innerHTML = document.querySelector("input[name = gender]").value;
        phoneNumber.innerHTML = document.querySelector("input[name = phone-number]").value;
        grade.innerHTML = document.querySelector("input[name = grade]").value;

        row.appendChild(fullName);
        row.appendChild(dateOfBirth);
        row.appendChild(gender);
        row.appendChild(phoneNumber);
        row.appendChild(grade);
        table.appendChild(row);
    }else {
        document.querySelector(".table-container").hidden = true;
        let fullName = document.querySelector("input[name = full-name]").value;
        let dateOfBirth = document.querySelector("input[name = Date-of-birth]").value;
        let gender = document.querySelector("input[name = gender]").value;
        let phoneNumber = document.querySelector("input[name = phone-number]").value;
        let major = document.querySelector("select[name = majors]").value;
        let grade = document.querySelector("input[name = grade]").value;

        let stu = new student([fullName, dateOfBirth, gender, phoneNumber, major, grade]);
        stu.save();

        let card = document.createElement("div");
        let pic = document.createElement("img");
        let cardname = document.createElement("span")
        let cardDate = document.createElement("span");
        let cardGender = document.createElement("span");
        let cardPhone = document.createElement("span");
        let cardMajor = document.createElement("span");
        let cardGrade = document.createElement("span");

        let src = "/img/Profile-Male-PNG.png";
        pic.src = src;
        cardname.innerHTML = fullName;
        cardDate.innerHTML = dateOfBirth;
        cardGender.innerHTML = gender;
        cardPhone.innerHTML = phoneNumber;
        cardMajor.innerHTML = major;
        cardGrade.innerHTML = grade;

        card.appendChild(pic);
        card.appendChild(cardname);
        card.appendChild(cardDate);
        card.appendChild(cardGender);
        card.appendChild(cardPhone);
        card.appendChild(cardMajor);
        card.appendChild(cardGrade);
        document.querySelector(".for-card").prepend(card);
        document.querySelector(".for-card").style = "border: 3px solid lightblue;";
    }
});