$('#shirt').click(function () {
    $('.watch,.gown,.neck').hide();
    $('.shirt').show();

});

$('#watch').click(function () {
    $('.shirt,.gown,.neck').hide();
    $('.watch').show();

});
$('#gown').click(function () {
    $('.watch,.shirt,.neck').hide();
    $('.gown').show();

})
$('#neck').click(function () {
    $('.watch,.gown,.shirt').hide();
    $('.neck').show();

})
$('#all').click(function () {
    $('.watch,.gown,.shirt,.neck').show();
});

// card button
function clicked() {
 let text1=  parseFloat($('#show_Product_Num').text());
parseFloat($('#show_Product_Num').text(text1 + 1));
}
