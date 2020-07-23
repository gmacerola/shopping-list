
//form event.preventDefault();
function addListItem () {
$("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    const addItem = $(event.currentTarget).find("#shopping-list-entry").val();
    $(".shopping-list").append(
        '<li><span class="shopping-item">' + addItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div>'
    )
    $("#js-shopping-list-form")[0].reset();
}
)
}

function removeItem () {
    $(".shopping-list").on("click" , ".shopping-item-delete" , function(event) {
        $(this).parent().parent().remove();
    }
    )
}

function check () {
    $(".shopping-list").on("click" , ".shopping-item-toggle" , function(event) {
        const shoppingItem = $(this).parent().parent();
        $(shoppingItem).children("span").toggleClass("shopping-item__checked");
    }
    )
}


addListItem();
removeItem();
check();