//Sidebar Selection

const menuItems = document.querySelectorAll('.menu-item');


//Messages 

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages'); 
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//font size 

const fontSizes = document.querySelectorAll(".choose-size span");

var root = document.querySelector(":root");



//remove active class for all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
} 
menuItems.forEach(item =>{
        item.addEventListener('click', ()=>{
            changeActiveItem();
            item.classList.add('active');

            if(item.id != 'notifications'){
                document.querySelector('.notifications-popup').style.display = 'none';
            }
            else{
                document.querySelector('.notifications-popup').style.display = 'block';
                document.querySelector('#notifications .notification-count').style.display = 'none';
            }
        })
});

//Messages 


//search chats 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val)!= -1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup',searchMessage);

//heighligh messages card while messages menu item is clicked
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    }, 2000);

})


//THEME CUSTOMIZATION 

//open theme modal

const openThemeModal = ()=>{
    themeModal.style.display = 'grid';
}

//close theme modal

const closeThemeModal = (event)=>{
    if(event.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);




//FONTS

//remove active class from spans 
const removeSizeSelector = ()=>{
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    let fontSize;

    size.classList.toggle('active');
    size.addEventListener('click',()=> {
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
            //change font size of our root html 
        document.querySelector('html').style.fontSize = fontSize;
    }
    })
    
});


    
