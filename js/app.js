window.onload = function () {

    // ACCORDION
    var accordion = document.querySelectorAll(".accordion__item-btn");

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].onclick = function() {

            var otherPanels = this.parentNode.parentNode.children;
            for (var k = 0; k < otherPanels.length; k++) {
                if (otherPanels[k] !== this.parentNode) {
                    removeClass(otherPanels[k], 'active');
                }
            }

            for (var j = 0; j < accordion.length; j++) {
                if (accordion[j] == this) {
                    if ( hasClass(accordion[j].parentNode, 'active') ) {
                        removeClass(accordion[j].parentNode, 'active');
                    } else {
                        accordion[j].parentNode.className += ' active';
                    }
                }
            }

        }
    }

    // NAVIGATION
    var navigation = document.querySelectorAll(".nav__dropdown-btn");

    for (var i = 0; i < navigation.length; i++) {
        navigation[i].onclick = function(event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            var otherBtn = this.parentNode.parentNode.children;
            for (var j = 0; j < otherBtn.length; j++) {
                if (otherBtn[j] !== this.parentNode) {
                    removeClass(otherBtn[j], 'active');
                }
            }

            if ( hasClass(this.parentNode, 'active') ) {
                removeClass(this.parentNode, 'active');
            } else {
                this.parentNode.className += ' active';
            }
        }
    }

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    var target = event.target || event.srcElement; // IE9-11 fix
    if ( !hasClass(target, 'nav__dropdown-btn') ) {
        var dropdowns = document.getElementsByClassName('nav__dropdown');
        for (var i = 0; i < dropdowns.length; i++) {
            if ( hasClass( dropdowns[i].parentNode, 'active') ) {
                removeClass( dropdowns[i].parentNode, 'active');
            }
        }
    }
}

function hasClass(element, searchedClass) {
    return (' ' + element.className + ' ').indexOf(' ' + searchedClass + ' ') > -1;
}

function removeClass(el, classNameToRemove){
    var elClass = ' ' + el.className + ' ';
    while(elClass.indexOf(' ' + classNameToRemove + ' ') !== -1){
         elClass = elClass.replace(' ' + classNameToRemove + ' ', '');
    }
    el.className = elClass;
}
