(function($) {
    $.fn.fnOpenNormalDialog = function(title,action,id, height, width) {
        $("#DialogModel").dialog({
            resizable: false,
            modal: true,
            title: title,
            height: height,
            width: width,
            create:function(event, ui) { 
                        var widget = $(this).dialog("widget");
                        $(".ui-dialog-titlebar-close span", widget).removeClass("ui-icon-closethick").addClass("a-window-close");
                    },
            buttons: {
                "Yes": function () {
                    $(this).dialog('close');
                },
                "No": function () {
                    $(this).dialog('close');
                }
            }
            
        });
    }
    $.fn.macFilterModel = function(title,action,id) {
            $(this).fnOpenNormalDialog(title,action,id,285, 400).css;
    }

    $.fn.moduleModel = function(title,action,id) {
        $(this).fnOpenNormalDialog(title,action,id,450, 650);
}
})(jQuery);