angular.module('questionnaireModule')
	.controller('PhotoController', PhotoController);

	PhotoController.$inject = ['$scope', '$rootScope', '$location'];

	function PhotoController($scope,$rootScope,$location) {
		$scope.choosePhoto = false;
		$scope.Message = " ";
		$scope.previousChoosenPhoto = 0;

		$scope.addPhoto = function(link,photoNum){
			$('.' + $scope.previousChoosenPhoto + '-photo').css({'border': 'none'});
			$scope.previousChoosenPhoto = photoNum;

			if(photoNum == 4) {
				$scope.choosePhoto = false;
				$scope.Message = "It was said that you would destroy the Sith, not join them! Bring balance to the Force, not leave it in darkness!";
				$('.' + photoNum + '-photo').css({'border': '2px solid red'});
			}
			else {
				$scope.photo = link;
				$scope.choosePhoto = true;
				$scope.Message = " ";
				$('.' + photoNum + '-photo').css({'border': '2px solid lightgreen'});
			}
		};

		$scope.nextPage = function (path){
			$rootScope.photo = $scope.photo;
			$rootScope.showLinkButtons = false;
			$location.path(path);
		};
	};
