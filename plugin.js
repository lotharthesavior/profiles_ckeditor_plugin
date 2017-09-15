
/**
 * Profiles
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @version Beta
 *
 * This is a CKEditor plugin to retrieve the profile of a
 * specific user through an API in the Application.
 *
 * This plugin DEPENDS on:
 * 1. JQuery
 *
 * @todo check how to work around the support for addContentsCss for versions older than 4.4 of CKEditor.
 *  The code that is failing is "editor.addContentsCss( pluginDirectory + 'styles/profiles.css' );"
 *
 * To list the Users options on the dialog select, put a json of the Array in a hidden element with id
 * "ckeditor-profiles-users". This way the plugin will place them correctly in the text, marking the
 * metadata attached to each element in the list (each element must be an object with attributes named
 * like html elements names).
 */

var profiles_temp_editor = null;

function profilesDialogAddUser(){

    // console.log($('[name="profiles-user"]').val());

    if( profiles_temp_editor != null )
        profiles_temp_editor.insertHtml();
    profiles_temp_editor = null;
}

CKEDITOR.plugins.add( 'profiles', {
    icons: 'profiles',
    init: function( editor ) {

        let pluginDirectory = this.path;

        editor.addCommand( 'openDialog', new CKEDITOR.dialogCommand( 'profilesDialog' ) );

        editor.ui.addButton( 'profiles', {
            label: 'Link User',
            command: 'openDialog',
            toolbar: 'minisis-custom'
        });

        CKEDITOR.dialog.add( 'profilesDialog', pluginDirectory + 'dialogs/profiles.js' );

    }
});