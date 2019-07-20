var menuHasChildren = document.querySelectorAll('.menu-has-children'),
    menuSecondary = document.querySelectorAll('.menu-secondary'),
    span = document.querySelectorAll('.span-down');
    
// console.log(span);
// console.log(menuHasChildren);
for (let i = 0; i < menuHasChildren.length; i++) {
    menuHasChildren[i].addEventListener('mouseover', function() {
        menuSecondary[i].style.display = 'block';
        span[i].classList.remove('span-down');
        span[i].classList.add('span-up');
    });
    menuHasChildren[i].addEventListener('mouseout', function() {
        menuSecondary[i].style.display = 'none';
        span[i].classList.remove('span-up');
        span[i].classList.add('span-down');
    });
}