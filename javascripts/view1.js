'use strict';

angular.module('myApp.view1', ['ngRoute', 'lvl.directives.dragdrop'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: './views/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    //tmpType:0封面，1封底，2，面。
    //tmpPage:1单页，2双页。
    //tmpImgs:多图填充。

    .controller('View1Ctrl', function ($scope, $timeout,$rootScope,$location) {

        $scope.dropped = function (dragEl, dropEl, index, parentIndex) {  // drop.attr("src",imgsrc);
            if(dragEl==dropEl)return;
            var drop = angular.element("#" + dropEl);
            var drag = angular.element("#" + dragEl);
            var imgsrc = drag.attr("data-img");
            var img = new Image();
            img.src = imgsrc;
            img.onload = function () {
                var nature_width = this.width,
                    nature_height = this.height;
                var nrate=1;
                var wrate=$scope.curPro.page[parentIndex].ImgTmpData[index].w*$scope.rate/nature_width;
                var hrate=$scope.curPro.page[parentIndex].ImgTmpData[index].h*$scope.rate/nature_height;
                wrate>hrate?(nrate=hrate):(nrate=wrate);
                $scope.$apply(function () {
                    needinit();
                    $scope.listPro.tmpList[$scope.listProindex].page[parentIndex].ImgTmpData[index].imgInfor =$scope.curPro.page[parentIndex].ImgTmpData[index].imgInfor =
                    {src:imgsrc,width:nature_width,height:nature_height,style1:{rate:nrate,left:0,top:0,width:nature_width*nrate,height:nature_height*nrate}};
                    if(!!$("#" + dragEl).data("index")&&drag.is("img")){
                        var indexs=$("#" + dragEl).data("index").split(',');
                        if (typeof  $scope.listPro.tmpList[$scope.listProindex].page[indexs[1]].ImgTmpData[indexs[0]].imgInfor.style1=="undefined") {
                            return;
                        }
                        $scope.listPro.tmpList[$scope.listProindex].page[indexs[1]].ImgTmpData[indexs[0]].imgInfor= {src:'images/index/none.jpg'};
                    }
                });
            }
        }


        $("#dwrap-img").width($("#workplace").width() - 150);
        $("#dwrap-img").height($("#workplace").height() - 150);

        $scope.imgPro = {width: 0, height: 0}
        $scope.pageOption = {showmdlist: 0};
        $scope.listPro =$rootScope.listPro || [];//生成产品列表
        $scope.listImg = [
            {src: "images/uploadImgs/1.jpg", width: 706, height: 530},
            {src: "images/uploadImgs/2.jpg", width: 720, height: 480},
            {src: "images/uploadImgs/3.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/4.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/5.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/6.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/7.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/8.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/9.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/10.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/11.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/12.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/1.jpg", width: 706, height: 530},
            {src: "images/uploadImgs/2.jpg", width: 720, height: 480},
            {src: "images/uploadImgs/3.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/4.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/5.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/6.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/7.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/8.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/9.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/10.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/11.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/12.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/1.jpg", width: 706, height: 530},
            {src: "images/uploadImgs/2.jpg", width: 720, height: 480},
            {src: "images/uploadImgs/3.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/4.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/5.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/6.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/7.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/8.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/9.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/10.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/11.jpg", width: 306, height: 230},
            {src: "images/uploadImgs/12.jpg", width: 306, height: 230},

        ];
        //模板列表数据
        $scope.listTmp = {
            width: 800, height: 800, tmpPage: 1, tmpList: [
                {
                    src: "images/picFrames/Frame0.png", tmpType: 2, tmpImgs: 1,
                    ImgTmpData: [{x: 0, y: 0, w: 800, h: 800, imgInfor: {src: 'images/index/none.jpg'}}]
                },
                {
                    src: "images/picFrames/Frame1.png", tmpType: 2, tmpImgs: 1,
                    ImgTmpData: [{x: 60, y: 51, w: 630, h: 690, imgInfor: {src: 'images/index/none.jpg'}}]
                },
                {
                    src: "images/picFrames/Frame2.png", tmpType: 2, tmpImgs: 1,
                    ImgTmpData: [{x: 120, y: 50, w: 610, h: 533, imgInfor: {src: 'images/index/none.jpg'}}]
                },
                {
                    src: "images/picFrames/Frame3.png", tmpType: 2, tmpImgs: 4,
                    ImgTmpData: [{x: 580, y: 68, w: 156, h: 156, imgInfor: {src: 'images/index/none.jpg'}}, {
                        x: 580,
                        y: 232,
                        w: 156,
                        h: 156,
                        imgInfor: {src: 'images/index/none.jpg'}
                    }, {x: 580, y: 400, w: 156, h: 156, imgInfor: {src: 'images/index/none.jpg'}}, {
                        x: 580,
                        y: 560,
                        w: 156,
                        h: 156,
                        imgInfor: {src: 'images/index/none.jpg'}
                    }]
                }
            ]
        };

        if(!$rootScope.listPro) {
            var _listTmp = angular.copy($scope.listTmp);
            if (_listTmp.tmpPage == 1) {
                $scope.listPro = {
                    width: 800, height: 800, tmpPage: 1, tmpList: [
                        {
                            page: [{
                                src: "images/picFrames/Frame0.png", tmpType: 2, tmpImgs: 1,
                                ImgTmpData: [{x: 0, y: 0, w: 800, h: 800, imgInfor: {src: 'images/index/none.jpg'}}]
                            }]
                        },
                        {
                            page: [{
                                src: "images/picFrames/Frame1.png", tmpType: 2, tmpImgs: 1,
                                ImgTmpData: [{x: 60, y: 51, w: 630, h: 690, imgInfor: {src: 'images/index/none.jpg'}}]
                            }]
                        },
                        {
                            page: [{
                                src: "images/picFrames/Frame2.png", tmpType: 2, tmpImgs: 1,
                                ImgTmpData: [{x: 120, y: 50, w: 610, h: 533, imgInfor: {src: 'images/index/none.jpg'}}]
                            }]
                        },
                        {
                            page: [{
                                src: "images/picFrames/Frame3.png", tmpType: 2, tmpImgs: 4,
                                ImgTmpData: [{x: 580, y: 68, w: 156, h: 156, imgInfor: {src: 'images/index/none.jpg'}}, {x: 580, y: 232, w: 156, h: 156, imgInfor: {src: 'images/index/none.jpg'}}, {
                                    x: 580,
                                    y: 400,
                                    w: 156,
                                    h: 156, imgInfor: {src: 'images/index/none.jpg'}
                                }, {x: 580, y: 560, w: 156, h: 156, imgInfor: {src: 'images/index/none.jpg'}}]
                            }]
                        }
                    ]
                };
            }
            else {
                $scope.listPro = {
                    width: 800, height: 800, tmpPage: 2, tmpList: [
                        {
                            page: [{
                                src: "images/picFrames/Frame0.png", tmpType: 2, tmpImgs: 1,
                                ImgTmpData: [{x: 0, y: 0, w: 800, h: 800, imgInfor: {src: 'images/index/none.jpg'}}]
                            },
                                {
                                    src: "images/picFrames/Frame1.png", tmpType: 2, tmpImgs: 1,
                                    ImgTmpData: [{x: 60, y: 51, w: 630, h: 690, imgInfor: {src: 'images/index/none.jpg'}}]
                                }]
                        },
                        {
                            page: [{
                                src: "images/picFrames/Frame2.png", tmpType: 2, tmpImgs: 1,
                                ImgTmpData: [{x: 120, y: 50, w: 610, h: 533, imgInfor: {src: 'images/index/none.jpg'}}]
                            },
                                {
                                    src: "images/picFrames/Frame3.png", tmpType: 2, tmpImgs: 4,
                                    ImgTmpData: [{
                                        x: 580,
                                        y: 68,
                                        w: 156,
                                        h: 156,
                                        imgInfor: {src: 'images/index/none.jpg'}
                                    }, {x: 580, y: 232, w: 156, h: 156, imgInfor: {src: 'images/index/none.jpg'}}, {
                                        x: 580,
                                        y: 400,
                                        w: 156,
                                        h: 156,
                                        imgInfor: {src: 'images/index/none.jpg'}
                                    }, {x: 580, y: 560, w: 156, h: 156, imgInfor: {src: 'images/index/none.jpg'}}]
                                }]
                        }
                    ]
                };
            }
        }
        $scope.listProindex = 0;
        $scope.showLargeImgOpacity=true;
        $scope.curPro = $scope.listPro.tmpList[$scope.listProindex];
        $scope.rate = $scope.listPro.rate1 = 1;
        $scope.ratemb = 1;
        var mheight=($(window).height()-300);
        var mwidth=($(".sec-right-main").width()-220)/$scope.listPro.tmpPage;
        $scope.workbgStyle={"max-height":mheight+"px","max-width":mwidth+"px"};
        $timeout(function () {
            $scope.imgPro = {
                width: $(".imgPro").eq(0).width(),
                height: $(".imgPro").eq(0).height()
            };
           $scope.rate = $scope.listPro.rate1 = $scope.imgPro.width / $scope.listPro.width;
           $scope.ratemb = $(".mobanImg").eq(0).width() / $scope.listPro.width;
            $(".d-workmain").width($(".imgPro").eq(0).width()*$scope.listPro.tmpPage+200);
        }, 100);
       // max-height: 252px;
       // max-width: 252px;
        //$scope.$watch('curPro',
        //    function (to, from) {
        //        console.log(to);
        //        console.log(111111);
        //        // e.height(to);
        //        // $("#divBB").height(to);
        //    }
        //);

        function needinit() {
            $scope.pageOption.showmdlist = 0
            $scope.curPIndex = null;
            $scope.curIndex = null;
        }
        $scope.needinit=function(){needinit();};

        //////////
        $scope.selectpro = function (index) {
            needinit();
            $scope.listProindex = index;
            $scope.curPro = $scope.listPro.tmpList[index];
        }

        $scope.ngPrePro = function () {
            needinit();
            if ($scope.listProindex == 0)return;
            $scope.curPro = $scope.listPro.tmpList[--$scope.listProindex];
        }
        $scope.ngNextPro = function () {
            needinit();
            if ($scope.listProindex >= ($scope.listPro.tmpList.length - 1))return;
            $scope.curPro = $scope.listPro.tmpList[++$scope.listProindex];
        }
        $scope.ngDeletePage = function () {
            needinit();
            if ($scope.listPro.tmpList.length > 1) {
                $scope.listPro.tmpList.splice($scope.listProindex, 1);
                $scope.listProindex--;
                if ($scope.listProindex < 0)$scope.listProindex = 0;
                $scope.curPro = $scope.listPro.tmpList[$scope.listProindex];
            }
            else {
                alert("至少一页！");
            }
        }
        $scope.ngaddPagePre = function () {
            needinit();
            $scope.listPro.tmpList.splice($scope.listProindex, 0, angular.copy($scope.curPro));
            $scope.listProindex++;
        }
        $scope.ngaddPageNext = function () {
            needinit();
            $scope.listPro.tmpList.splice($scope.listProindex + 1, 0, angular.copy($scope.curPro));
        }
        $scope.showLeftModel = function () {
            needinit();
            $scope.pageOption.showmdlist != 1 ? $scope.pageOption.showmdlist = 1 : $scope.pageOption.showmdlist = 0;
        }
        $scope.showRightModel = function () {
            needinit();
            $scope.pageOption.showmdlist != 2 ? $scope.pageOption.showmdlist = 2 : $scope.pageOption.showmdlist = 0;
        }
        $scope.setTemp = function (lr, index) {
            if (lr == 1) {
                $scope.curPro.page[0] = angular.copy($scope.listTmp.tmpList[index]);
            }
            if (lr == 2) {
                $scope.curPro.page[1] = angular.copy($scope.listTmp.tmpList[index]);
            }
            needinit();
        }
        $scope.wrapshowTools = function (curIndex, curPIndex) {
            needinit();
            if (($scope.curPIndex == curPIndex && $scope.curIndex == curIndex)||typeof  $scope.listPro.tmpList[$scope.listProindex].page[curPIndex].ImgTmpData[curIndex].imgInfor.style1=="undefined") {
                $scope.curPIndex = null;
                $scope.curIndex = null;
                return;
            }
            $scope.curPIndex = curPIndex;
            $scope.curIndex = curIndex;
            $scope.movePointStyle={top:($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].h*$scope.rate/2),left:($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].w*$scope.rate/2)};

        }
       $scope.ngToolLarge=function(){
           if ($scope.curPIndex == null || $scope.curIndex == null||typeof  $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=="undefined") {
               return;
           }
           var _rate=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rate*1.2;
           var dlw=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.width*0.1;
           var dlh=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.height*0.1;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rate= _rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top-dlh;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left-dlw;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.width= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.width*_rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.height= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.height*_rate;
       }
       $scope.ngToolSmall=function(){
           if ($scope.curPIndex == null || $scope.curIndex == null||typeof  $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=="undefined") {
               return;
           }
           var _rate=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rate*.8;
           if($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.width*_rate<=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].w*$scope.rate&&
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.height*_rate<=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].h*$scope.rate) {
              return;
           }
           var dlw=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.width*0.1;
           var dlh=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.height*0.1;

           if($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left+dlw>0||
               $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top+dlh>0) return;

           if((($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left+dlw+$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.width)<$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].w*$scope.rate)||
               (($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top+dlh+$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.height)<$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].h*$scope.rate))return;


           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top+dlh;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left+dlw;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rate= _rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.width= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.width*_rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.height= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.height*_rate;

       }
       $scope.ngToolFull=function(){
           if ($scope.curPIndex == null || $scope.curIndex == null||typeof  $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=="undefined") {
               return;
           }
           var _rate=1;
           var wrate=$scope.curPro.page[$scope.curPIndex ].ImgTmpData[$scope.curIndex].w*$scope.rate/ $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.width;
           var hrate=$scope.curPro.page[$scope.curPIndex ].ImgTmpData[$scope.curIndex].h*$scope.rate/$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.height;
           wrate<hrate?(_rate=hrate):(_rate=wrate);
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rate= _rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.width= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.width*_rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.height= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.height*_rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top=0;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left=0;

       }
       $scope.ngToolFit=function(){
           if ($scope.curPIndex == null || $scope.curIndex == null||typeof  $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=="undefined") {
               return;
           }
           var _rate=1;
           var wrate=$scope.curPro.page[$scope.curPIndex ].ImgTmpData[$scope.curIndex].w*$scope.rate/ $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.width;
           var hrate=$scope.curPro.page[$scope.curPIndex ].ImgTmpData[$scope.curIndex].h*$scope.rate/$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.height;
           wrate>hrate?(_rate=hrate):(_rate=wrate);
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rate= _rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.width= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.width*_rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.height= $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.height*_rate;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.top=0;
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.left=0;
       }
       $scope.ngToolRotato=function(){
           if ($scope.curPIndex == null || $scope.curIndex == null||typeof  $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=="undefined") {
               return;
           }
         var _deg=$scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rotate||0;
           _deg=_deg+90;
           if(_deg==360)_deg=0
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1.rotate=_deg;
           var _rr={
               "transform":"rotate("+_deg+"deg)",
               "-ms-transform":"rotate("+_deg+"deg)", /* IE 9 */
               "-webkit-transform":"rotate("+_deg+"deg)" /* Safari and Chrome */
           }
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=$.extend($scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1,_rr);
       }
       $scope.ngToolDelete=function(){
           if ($scope.curPIndex == null || $scope.curIndex == null||typeof  $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor.style1=="undefined") {
               return;
           }
           $scope.listPro.tmpList[$scope.listProindex].page[$scope.curPIndex].ImgTmpData[$scope.curIndex].imgInfor= {src:'images/index/none.jpg'};
           $scope.curPIndex = null;
           $scope.curIndex = null;
       }
       $scope.autoFillImg=function(){
           var _i=0;
           var pageIndexItem=$scope.listPro.tmpList[$scope.listProindex].page;
           _.each(pageIndexItem, function(element, parentIndex, list){
               _.each(element.ImgTmpData,function(element2, index){
                  if(_i>=$scope.listImg.length) return;
                   var img = new Image();
                   img.src = $scope.listImg[_i].src;
                   _i++;
                   img.onload = function () {
                       var nature_width = this.width,
                           nature_height = this.height;
                       var nrate=1;
                       var wrate=$scope.curPro.page[parentIndex].ImgTmpData[index].w*$scope.rate/nature_width;
                       var hrate=$scope.curPro.page[parentIndex].ImgTmpData[index].h*$scope.rate/nature_height;
                       wrate>hrate?(nrate=hrate):(nrate=wrate);
                       $scope.$apply(function () {
                           $scope.listPro.tmpList[$scope.listProindex].page[parentIndex].ImgTmpData[index].imgInfor =
                           {src:img.src,width:nature_width,height:nature_height,style1:{rate:nrate,left:0,top:0,width:nature_width*nrate,height:nature_height*nrate}};
                       });
                   }
               });
           });
       }
       $scope.goView2=function(){
           $rootScope.listPro=$scope.listPro;
           $location.path("view2");

       }

    });