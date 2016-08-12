//object

var mainForm = {
	action: '#',
	method: 'get',
	headerText: "Тест по программированию",
	buttonText: "Проверить мои результаты",
	question: 3,
	answer: 3,
	build: function() {    

//form

var elemBody = document.body;
var mainForm = document.createElement('form');
elemBody.appendChild(mainForm);
mainForm.action = this.action;
mainForm.method = this.method;
elemBody.style.background = '#ccc';
elemBody.style.fontFamily = 'sans-serif';
mainForm.style.background = '#fff';
mainForm.style.border = '1px solid black';
mainForm.style.margin = '40px 300px';

//header

var mainHeader = document.createElement('h1');
mainHeader.classList.add('main-header');
mainHeader.innerHTML = this.headerText;
mainForm.appendChild(mainHeader);
mainHeader.style.fontSize = '16px';
mainHeader.style.textAlign = 'center';
mainHeader.style.margin = '20px 0 40px 0';


//ol 

var ol = document.createElement('ol');
mainForm.appendChild(ol);
ol.style.marginLeft = '60px';

// //ol (li + ul + li)

for (question = 1; question <= 3; question++) {
	var li = document.createElement('li');
	li.innerHTML = "Вопрос №" + question;         
	ol.appendChild(li);
	var ul = document.createElement('ul');
	li.appendChild(ul);
	ul.style.margin = '10px 0';
	ul.style.paddingLeft = '0';

for (answer = 1; answer <= 3; answer++) {    
    var innerLi = document.createElement('li'); 	
	ul.appendChild(innerLi);
	var label = document.createElement('label');
    innerLi.appendChild(label);
	var checkBox = document.createElement('input');
    checkBox.type = "checkbox";    
    checkBox.name = "quest" + question + "-answ" + answer;
    label.appendChild(checkBox); 
    innerLi.style.listStyle = 'none'; 
    var span = document.createElement('span');
    span.innerHTML = "Вариант ответа №" + answer;
    label.appendChild(span);
} 
} 

//submit
 var checkResults = document.createElement('input');
 checkResults.type = "submit";
 checkResults.value = this.buttonText;
 mainForm.appendChild(checkResults);
 checkResults.style.border = '2px solid black';
 checkResults.style.background = 'lightblue';
 checkResults.style.padding = '10px 40px';
 checkResults.style.margin = '20px 0 60px 207px';
}
}

mainForm.build();









 




 



	





