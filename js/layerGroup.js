/////////////////////////////////////////////////////////
/////////////封装右边图层控制控件代码----开始/////////////
/////////////////////////////////////////////////////////
var gui = {};

gui.showClickInfo = function(d) {
    $('#dlgModelInfo').modal('show');
    $('#dlgModelInfo .modal-title').text(d.name);
    $('#dlgModelInfo #m-x').text('X：' + d.x);
    $('#dlgModelInfo #m-y').text('Y：' + d.y);
    $('#dlgModelInfo #m-groupid').text('GroupID：' + d.groupid);
    
}



/////////////////////////////////////////////////////////
/////////////封装右边图层控制控件代码----结束////////////
/////////////////////////////////////////////////////////