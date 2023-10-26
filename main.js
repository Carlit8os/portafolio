
const modal = document.querySelector("#myModal")
const submit = document.querySelector("#submit")
const close = document.querySelector("#close")
const facebook =document.querySelector("#facebook")
const whatsApp =document.querySelector("#whatsApp")
const instagram =document.querySelector("#instagram")
const nombre =document.querySelector("#name")
const email =document.querySelector("#email")
const mensaje =document.querySelector("#mensaje")
const tema =document.querySelector("#tema")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    modal.className = "modal"
    nombre.value = "" 
    email.value = "" 
    mensaje.value = "" 
    tema.value = "" 
})

close.addEventListener("click", ()  => {
    modal.className = "modal-none"
})

window.addEventListener("click",(e) => {

    if( e.target.id === "myModal"){
        modal.className = "modal-none"
    }
})

facebook.addEventListener("click", () => {
    window.open("http://www.facebook.com");
})

whatsApp.addEventListener("click", () => {
    const mobile = isMobileDevice();

    if(mobile){
        window.open("https://api.whatsapp.com/send?phone=3208897175&text=Hola quiero contactar");
    }else{
        window.alert("Es imposible redirijir a whatsApp porque no es un dispositivo mobil")
    }

})

instagram.addEventListener("click", () => {
    window.open("http://www.instagram.com");
})

function isMobileDevice() {
    return  (navigator.userAgent.indexOf('IEMobile') !== -1);
};
