function Calculadora(){
this.display = document.querySelector('.display');

this.getButtons = () =>{
    document.addEventListener('click', e =>{
        let elemento = e.target;
        if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
        if(elemento.classList.contains('btn-clear')) this.clear();
        if(elemento.classList.contains('btn-del')) this.del();
        if(elemento.classList.contains('btn-eq')) this.GetResultado();

    });

};

//////////////////////////////////buttons functions///////////////////////////////////////
this.addNumDisplay = (elemento) => {
this.display.value += elemento.innerText;
this.display.focus();
};

this.clear = () => this.display.value = '';
this.del = () => this.display.value = this.display.value.slice(0, -1);
this.GetResultado = () =>{
    try{
        let result = eval(this.display.value);
        this.display.value = result;
    }catch{

    };
};

this.getEnter = () => {
    document.addEventListener('keypress', e =>{
        if(e.keyCode !== 13) return;
        this.GetResultado();
    })
}


//////////////////////////////////buttons functions///////////////////////////////////////

this.inicia = () =>{
    this.getButtons();
    this.getEnter()
}
};

const calculadora = new Calculadora();
calculadora.inicia();