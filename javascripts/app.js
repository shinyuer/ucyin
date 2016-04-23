'use strict';
var imgmove = 0;
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute','ngAnimate',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
])
.directive('resize', function($window) {
    return function(scope, element, attr) {
        var w = angular.element($window);
        w.on('resize', function() {
            if(!scope.listPro)return;
            var mheight=($(window).height()-300);
            var mwidth=($(".sec-right-main").width()-220)/scope.listPro.tmpPage;
            scope.workbgStyle={"max-height":mheight+"px","max-width":mwidth+"px"};
            scope.rate=$(".imgPro").eq(0).width()/ scope.listPro.width;
            scope.rate1=$(".imgPro").eq(0).height()/ scope.listPro.height;
            $(".d-workmain").width($(".imgPro").eq(0).width()*scope.listPro.tmpPage+200);
            scope.$apply();
        });
    };
})
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]).
    //.directive("imageDrop",function ($parse, fileReader, resampler) {
    //
    //    return {
    //        restrict: "EA",
    //        link: function (scope, element, attrs) {
    //
    //            var expression = attrs.imageDrop;
    //            var accesor = $parse(expression);
    //
    //
    //            var onDragOver = function (e) {
    //                e.preventDefault();
    //                element.addClass("dragOver");
    //            };
    //
    //            var onDragEnd = function (e) {
    //                e.preventDefault();
    //                element.removeClass("dragOver");
    //            };
    //
    //            var placeImage = function (imageData) {
    //                accesor.assign(scope, imageData);
    //            };
    //
    //            var resampleImage = function (imageData) {
    //                return resampler.resample(
    //                    imageData, element.width(),
    //                    element.height(), scope);
    //            };
    //
    //            var loadFile = function (file) {
    //                fileReader
    //                    .readAsDataUrl(file, scope)
    //                    .then(resampleImage)
    //                    .then(placeImage);
    //            };
    //
    //
    //            element.bind("dragover", onDragOver)
    //                .bind("dragleave", onDragEnd)
    //                .bind("drop", function (e) {
    //                    onDragEnd(e);
    //                    loadFile(e.originalEvent.dataTransfer.files[0]);
    //                });
    //
    //            scope.$watch(expression, function () {
    //                element.attr("src", accesor(scope));
    //            });
    //        }
    //    };
    //}).
    directive('draggable', function ($document) {
        var startX = 0, startY = 0, x = 0, y = 0;
        var startX1 = 0, startY1 = 0, x1 = 0, y1 = 0;
        var movePointStyle={};
        var movePointStart={};

        return {
            //controller: function ($scope, $element) {
            //    $scope.x = $scope.x+1;
            //    $scope.y = $scope.y+1;
            //    console.log($scope.x);
            //    console.log(movie.x);
            //    movie.x= $scope.x ;
            //},
            link: function ($scope, element, attr) {
                element.bind('mousedown', function (event) {
                    x = $(element).css("left").substring(0,$(element).css("left").indexOf("px"));
                    y =$(element).css("top").substring(0,$(element).css("top").indexOf("px"));
                    startX = event.screenX - x;
                    startY = event.screenY - y;

                    x1 = $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left;
                    y1 =$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top;
                    startX1 = event.screenX - x1;
                    startY1 = event.screenY - y1;
                    movePointStart=angular.copy($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex]);
                    $document.bind('mousemove', mousemove);
                    $document.bind('mouseup', mouseup);
                });

                function mousemove(event) {
                    y = event.screenY - startY;
                    y1 = event.screenY - startY1;
                    x = event.screenX - startX;
                    x1 = event.screenX - startX1;

                    if(y1>0||x1>0) return;
                    if(((x1+movePointStart.imgInfor.style1.width)<movePointStart.w*$scope.rate)||((y1+movePointStart.imgInfor.style1.height)<movePointStart.h*$scope.rate))return;

                    //
                    //element.css({
                    //    top: y + 'px',
                    //    left: x + 'px'
                    //});
                    movePointStyle= $.extend(movePointStart.imgInfor.style1,{
                        top: y1 ,
                        left: x1
                    });
                    $scope.showLargeImgOpacity=true;
                    $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=movePointStyle;
                    $scope.$apply();
                }
                function mouseup() {
                    $scope.showLargeImgOpacity=false;
                    $scope.$apply();
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseup', mouseup);
                }
            }
            //compile: function (element, attributes) {
            //    return {
            //        pre: function preLink(scope, element, attributes) {
            //         //   scope.x = scope.x;
            //        },
            //        post: function postLink(scope, element, attributes) {
            //         //   scope.x = scope.y;
            //        }
            //    };
            //}

        }
    });


//return function(scope, element, attr) {
//       // console.log(element.attr("data-img"));
//       // element.css({
//       //    // position: 'relative',
//       //    // 'background-image':element.attr("data-img")
//       // });
//        element.bind('mousedown', function(event) {
//            moveElement=angular.copy(element);
//            x=$(element).offset().left+25;
//            y=$(element).offset().top+22;
//            moveElement.css({
//               width:element.width(),
//               position:"absolute",
//               "z-index":101,
//               height:element.height(),
//               top: y + 'px',
//               left:  x + 'px'
//            });
//            $("body").append(moveElement);
//            startX = event.screenX - x;
//            startY = event.screenY - y;
//            $document.bind('mousemove', mousemove);
//            $document.bind('mouseup', mouseup);
//        });
//
//        function mousemove(event) {
//            y = event.screenY - startY;
//            x = event.screenX - startX;
//            moveElement.css({
//                top: y + 'px',
//                left:  x + 'px'
//            });
//        }
//
//        function mouseup() {
//            imgmove=1;
//            console.log(imgmove);
//            $document.unbind('mousemove', mousemove);
//            $document.unbind('mouseup', mouseup);
//        }
//    }
//});
