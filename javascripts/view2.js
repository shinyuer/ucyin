'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: './views/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', function ($scope, $timeout, $rootScope, $location) {



       if (!$rootScope.listPro) return;
        $scope.listPro = $rootScope.listPro;
        $scope.rate = 1;
        var nrate=1;
        var wrate=360/$scope.listPro.width ;
        var hrate=460/$scope.listPro.height;
        wrate>hrate?(nrate=hrate):(nrate=wrate);
        $scope.rate = nrate;
        $scope.tempList=[];
        var listPro=$scope.listPro.tmpList;
        _.each(listPro,function(item, listIndex){
            _.each(item.page, function(element, parentIndex){
                _.each(element.ImgTmpData,function(element2, index){
                    if(!element2.imgInfor.style1) return;

                    var nrate=1;
                    var wrate=element2.w*$scope.rate/element2.imgInfor.width ;
                    var hrate=element2.h*$scope.rate/element2.imgInfor.height;
                    wrate>hrate?(nrate=hrate):(nrate=wrate);
                    var lar=$scope.rate/$scope.listPro.rate1;//(nrate/$rootScope.rate1)*element2.imgInfor.style1.rate;
                    $scope.listPro.tmpList[listIndex].page[parentIndex].ImgTmpData[index].imgInfor.style3 =
                    {
                        rate: nrate,
                        left: (element2.imgInfor.style1.left *lar),
                        top: (element2.imgInfor.style1.top *lar),
                        width: element2.imgInfor.style1.width *lar,
                        height: element2.imgInfor.style1.height * lar
                    };
                });
                $scope.tempList.push($scope.listPro.tmpList[listIndex].page[parentIndex]);
            });
        });
        $timeout(function () {
           loadfunction();
        }, 100);

    });