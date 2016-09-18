$('ul.nav li.dropdown').hover(
    function () {
        $('.dropdown-toggle').dropdown('toggle');
    }
);
$('img').contextmenu(function() {return false;});

var getYear = function (news) {
    var maxi = 0;
    for (var i = 0; i < news.length; i++) {
        maxi = Math.max(maxi, +news[i].year);
    }
    return maxi;
};

var getYearList = function (news) {
    var yearList = [];
    for (var i = 0; i < news.length; i++) {
        yearList.push(news[i].year);
    }
    return yearList.sort().filter(function (el, i, a) { return i == a.indexOf(el); }).reverse();
};

var kauValley = angular.module('kauValley', ['angular-flexslider']);

kauValley.controller('kauValleyController', function kauValleyController($scope, $sce, $filter) {
    $scope.contact = contact;
    $scope.contact.newsletter = $sce.trustAsResourceUrl(contact.newsletter);
    $scope.contact.leaveamessage = $sce.trustAsResourceUrl(contact.leaveamessage);
    $scope.gallery = gallery;
    $scope.bosses = bosses;
    $scope.leaders = leaders;
    $scope.sponsored = sponsored;
    $scope.news = news;
    $scope.year = getYear(news);
    $scope.yearList = getYearList(news);
    $scope.selectYear = function (y) {
        $scope.year = y;
        $('html, body').animate({
            scrollTop: 500
            }, 500);
    };
});

kauValley.directive('galleryDirective', function () {
    return function (scope, element, attrs) {
        angular.element("#content-slider").lightSlider({
            loop: true,
            keyPress: true
        });
        angular.element("#image-gallery").lightSlider({
            gallery: true,
            item: 1,
            thumbItem: 9,
            slideMargin: 0,
            speed: 500,
            auto: true,
            loop: true,
            onSliderLoad: function () {
                $('#image-gallery').removeClass('cS-hidden');
            }
        });
    };
});