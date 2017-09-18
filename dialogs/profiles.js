
CKEDITOR.dialog.add( 'profilesDialog', function ( editor ) {

    let users_options = $('#ckeditor-profiles-users').html();

    let html = '<h1 style="font-size: 20px !important;">Select the user to attach to the text:</h1>' +
                '<div>' +
                    '<select style="padding:4px;border:1px solid #000;border-radius:3px;" name="profiles-user">' + users_options + '</select>' +
                '</div>';

    return {
        title: 'User to be Linked to the Comment',
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
        ],
        onOk: function(){
            var editor = this.getParentEditor(),
                name = $('[name="profiles-user"]').find(':selected').html(),
                current_value = $('[name="profiles-user"]').val();

            var user_style = "" +
                "padding: 5px;" +
                "margin: 5px;" +
                "border-radius:3px;" +
                "background: blue;" +
                "color: #fff;";

            if( profiles_options.place == "default" ) {
                var new_element = "" +
                    "&nbsp;<a profileof='" + current_value + "' href='" + current_value + "' style='" + user_style + "'>" +
                    name +
                    "</a>&nbsp;";

                editor.insertHtml(new_element);
            } else {
                var new_element = "" +
                    "<a profileof='" + current_value + "' href='" + current_value + "' style='" + user_style + "'>" +
                    name +
                    "</a>";

                // build hidden input to be sent
                var hidden_input = "<input type='hidden' name='attached_profiles[]' profileof='" + current_value + "' value='" + current_value + "' />";

                var remove_button = "<a profileof='" + current_value +
                    "' onclick='remove_profile(\"" + current_value + "\")'" +
                    "' style='padding:5px;font-weight: bold;cursor: pointer;'>X</a>";

                $(profiles_options.place).append(new_element + remove_button + hidden_input);
            }
        }
    };
});