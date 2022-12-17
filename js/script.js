let btn = document.querySelector('#verpassword')//botão do olho para mostrar ou esconder senha chamando pela id

btn.addEventListener('click',()=>{
	let inputPassword =document.querySelector('#password') //recebe a senha
	
	if(inputPassword.getAttribute('type')== 'password'){ //se a variavel inputPassword for do tipo password
		inputPassword.setAttribute('type', 'text')//transforma em tipo texto
	}else{
		inputPassword.setAttribute('type', 'password')//reverte a ação anterior

	}
})

let btnConfirm = document.querySelector('#verrepeat')//botão do olho para mostrar ou esconder senha chamando pela id

btnConfirm.addEventListener('click',()=>{
	let inputConfirmPassword =document.querySelector('#retypepassword') //recebe a senha repetida
	
	if(inputConfirmPassword.getAttribute('type')== 'password'){ //se a variavel inputPassword for do tipo password
		inputConfirmPassword.setAttribute('type', 'text')//transforma em tipo texto
	}else{
		inputConfirmPassword.setAttribute('type', 'password')//reverte a ação anterior

	}
})