var kauValley = angular.module('kauValley', ['angular-flexslider']);

kauValley.controller('kauValleyController', function kauValleyController($scope, $sce, $filter) {
    $scope.contact = {
        'address': '11501 Dublin Boulevard, #200, Dublin, CA 94568',
        'phone': '1 (234) 567-8900',
        'email': 'info@kauvalley.com',
        'links': [{
            'name': 'facebook',
            'url': '#'
        }, {
                'name': 'twitter',
                'url': '#'
            }, {
                'name': 'youtube',
                'url': '#'
            }, {
                'name': 'instagram',
                'url': '#'
            }, {
                'name': 'linkedin',
                'url': '#'
            }, {
                'name': 'weixin',
                'url': '#'
            }, {
                'name': 'weibo',
                'url': '#'
            }],
        'newsletter': $sce.trustAsResourceUrl('https://kauvalley.us14.list-manage.com/subscribe/post?u=5de61ced44fd7591a4cff1bca&amp;id=e6d5600c22'),
        'leaveamessage': $sce.trustAsResourceUrl('https://formspree.io/info@kauvalley.com')
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
        'name': '李雷',
        'title': 'CEO',
        'url': 'images/profile.jpg',
        'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
    }, {
            'name': '李雷',
            'title': 'CEO',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }];

    $scope.leaders = [{
        'name': '韩梅梅',
        'title': '项目主管',
        'url': 'images/profile.jpg',
        'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
    }, {
            'name': '韩梅梅',
            'title': '项目主管',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }, {
            'name': '韩梅梅',
            'title': '项目主管',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }, {
            'name': '韩梅梅',
            'title': '项目主管',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }, {
            'name': '韩梅梅',
            'title': '项目主管',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }, {
            'name': '韩梅梅',
            'title': '项目主管',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }, {
            'name': '韩梅梅',
            'title': '项目主管',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }, {
            'name': '韩梅梅',
            'title': '项目主管',
            'url': 'images/profile.jpg',
            'detail': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }];
    $scope.news = [
        {
            'title': '新闻标题',
            'date': '2016-9-9',
            'content': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        },
        {
            'title': '新闻标题',
            'date': '2016-10-9',
            'content': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        },
        {
            'title': '新闻标题',
            'date': '2016-11-9',
            'content': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        },
        {
            'title': '新闻标题',
            'date': '2017-9-9',
            'content': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        },
        {
            'title': '新闻标题',
            'date': '2019-10-9',
            'content': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        },
        {
            'title': '新闻标题',
            'date': '2020-11-9',
            'content': '夏威夷岛（夏威夷语：Hawaiʻi）是夏威夷群岛中的最大岛屿，又称大岛（Big Island）；位于群岛最南端，面积10414平方公里。全岛有丰富的火山活动，岛上有五个盾状火山，设有夏威夷火山国家公园，华人又称火山岛，是世界著名的活火山。'
        }
    ];
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

$('ul.nav li.dropdown').hover(
    function () {
        $('.dropdown-toggle').dropdown('toggle');
    }
);