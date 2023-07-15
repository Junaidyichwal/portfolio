function toggle(e) {
    let target = $(e.target);
    let parent = $(target).parents(".toggle-parent").children(".toggle");

    $(parent).slideToggle();

    console.log($(parent));
}