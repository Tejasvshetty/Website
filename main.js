/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*=============== ACCORDION JSS ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Select Items with headers
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Add event listener to those items
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
        
        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})


const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.accordion__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}



//javascript for the taskbar

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick=function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    if (isOpen){
        toggleBtnIcon.classList ='fa-solid fa-xmark'
    }

    else{
        toggleBtnIcon.classList ='fa-solid fa-bars'
    }



}
