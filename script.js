// Code goes here

var app = angular.module("app",[]);

app.controller("maincntrl", function($scope) {
    $scope.user1 = {
        name: "Owen",
        address: {
            street:"Royal Dr",
            city:"Jersey City",
            state: "NJ"
        },
        friends : [
            'Han',
            'Chen',
            'Rebecca'
        ]
    };

    $scope.user2 = {
        name: "Harry",
        address: {
            street:"Rutgers Rd",
            city:"New York",
            state: "NY"
        },
        friends : [
            'Rui',
            'Weilin',
            'Fengye'
        ]
    }

});

app.directive("teUserInfoCard", function() {
    return {
        //template: "User data here"
        templateUrl: "userInfoCard.html",
        restrict:'E',
        scope: {
            user : '='
        },
        controller: function($scope) {
            $scope.collapsed = false;
            $scope.knightMe = function(user) {
                user.rank = "knight";
            },
                $scope.collapse = function() {
                    $scope.collapsed = !$scope.collapsed;
                }
        }
    }

});

app.directive("address", function() {
    return {
        restrict : 'E',
        templateUrl : "address.html",
        scope : true,
        controller : function($scope) {
            $scope.collapsed = false;
            $scope.collapseAddress = function() {
                $scope.collapsed = true;
            }
            $scope.expandAddress = function() {
                $scope.collapsed = false;
            }
        }
    }
});




