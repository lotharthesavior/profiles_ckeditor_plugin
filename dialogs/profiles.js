
CKEDITOR.dialog.add( 'profilesDialog', function ( editor ) {

    profiles_temp_editor = editor;

    let users_options = $('#ckeditor-profiles-users').html();

    let html = '<h1 style="font-size: 20px !important;">Select the user to attach to the text:</h1>' +
                '<div>' +
                    '<select style="padding:4px;border:1px solid #000;border-radius:3px;" name="profiles-user">' + users_options + '</select>' +
                    '<br/>' +
                    '<button onclick="profilesDialogAddUser()">Add User</button>' +
                '</div>';

    return {
        title: 'Abbreviation Properties',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'html',
                        html: html
                    }
                ]
            }
        ]
    };
});