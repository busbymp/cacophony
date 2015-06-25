/**
 * Created by swishy on 22/04/14.
 */
function highlight_selected(div)
{
    $(div).addClass("selected");
}

function activate_jade_menu()
{
    remove_joob_entries();
    add_jade_entries();
}

function activate_joob_menu()
{
    remove_jade_entries();
    add_joob_entries();
}

function add_jade_entries()
{
    var jade_container = $('#jade-menu-container');
    jade_container.append("<li id='jade-menu-docs' class='header-nav-link header-nav-submenu'><a href='/developer-centre/jade-docs.php'>Docs</a></li>");
    jade_container.append("<li id='jade-menu-releases' class='header-nav-link header-nav-submenu'><a href='/developer-centre/jade-releases.php'>Releases</a></li>");
    jade_container.append("<li id='jade-menu-support' class='header-nav-link header-nav-submenu'><a href='/developer-centre/jade-support.php'>Support</a></li>");

    setTimeout(function (argument) {
        jade_container.find('.header-nav-submenu').addClass('expand');    
    }, 300);
    
}

function remove_jade_entries()
{
    var jade_container = $('#jade-menu-container');
    jade_container.remove('#jade-menu-docs');
    jade_container.remove('#jade-menu-releases');
    jade_container.remove('#jade-menu-support');
}

function add_joob_entries()
{
    var joob_container = $('#joob-menu-container');
    joob_container.append("<li id='joob-menu-docs' class='header-nav-link header-nav-submenu'><a href='/developer-centre/joob-mobile-docs.php'>Docs</a></li>");
    joob_container.append("<li id='joob-menu-releases' class='header-nav-link header-nav-submenu'><a data-reveal-id='jademobile4' href='#'>Releases</a></li>");
    joob_container.append("<li id='joob-menu-support' class='header-nav-link header-nav-submenu'><a href='/developer-centre/joob-support.php'>Support</a></li>");

    setTimeout(function (argument) {
        joob_container.find('.header-nav-submenu').addClass('expand');    
    }, 300);
}

function remove_joob_entries()
{
    var joob_container = $('#joob-menu-container');
    joob_container.remove('#joob-menu-docs');
    joob_container.remove('#joob-menu-releases');
    joob_container.remove('#joob-menu-support');
}