var kauValley = angular.module('kauValley', []);

kauValley.controller('kauValleyController', function kauValleyController($scope, $sce) {
    $scope.contact = {
        'address': '11501 Dublin Boulevard, #200, Dublin, CA 94568',
        'phone': '1 (234) 567-8900',
        'email': 'info@kauvalley.com',
        'links': [{
            name: 'facebook',
            'url': '#'
        }, {
            name: 'twitter',
            'url': '#'
        }, {
            name: 'youtube',
            'url': '#'
        }, {
            name: 'instagram',
            'url': '#'
        }, {
            name: 'linkedin',
            'url': '#'
        }, {
            name: 'weixin',
            'url': '#'
        }, {
            name: 'weibo',
            'url': '#'
        }],
        'newsletter': $sce.trustAsResourceUrl('https://kauvalley.us14.list-manage.com/subscribe/post?u=5de61ced44fd7591a4cff1bca&amp;id=e6d5600c22'),
        'leavemessage': $sce.trustAsResourceUrl('https://formspree.io/info@kauvalley.com')
    };
    $scope.gallery = [
        'images/0.jpg',
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg'
    ];

    $scope.bosses = [{
        'name': 'Lei LI',
        'title': 'CEO',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Lei LI',
        'title': 'CEO',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Lei LI',
        'title': 'CEO',
        'url': 'images/profile.jpg'
    }];
    $scope.leaders = [{
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }, {
        'name': 'Meimei HAN',
        'title': 'Manager',
        'url': 'images/profile.jpg'
    }];
});

kauValley.directive('galleryDirective', function() {
    return function(scope, element, attrs) {
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
            onSliderLoad: function() {
                $('#image-gallery').removeClass('cS-hidden');
            }
        });
    };
});


$('ul.nav li.dropdown').hover(
    function() {
        $('.dropdown-toggle').dropdown('toggle');
    }
);

$(".loading").fadeOut(4000, function() {
    $(this).remove();
});