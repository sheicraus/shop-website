$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 3000 });
});

$('#customizeButton').click(function () {
    $('#customizeModal').modal('toggle');
});
