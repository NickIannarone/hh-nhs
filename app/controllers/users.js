angular.module('nhs')

.controller('userController', ['$scope', 'User', function($scope, User) {
    $scope.processing = true;

    function getUsers() {
        User.all()
        .then(function(data) {
            $scope.processing = false;

            $scope.users = data.data;
        });
    }

    getUsers();

    $scope.deleteUser = function(id) {
        User.delete(id)
            .then(function(data) {
                getUsers();
            });
    };
}])


.controller('userCreate', ['User', '$scope', function(User, $scope) {
    $scope.type = 'create';

    $scope.saveUser = function() {
        $scope.processing = true;
        $scope.message = '';

        User.create($scope.userData)
            .then(function(data) {
                $scope.processing = false;
                $scope.userData = {};
                $scope.message = data.message;
            });
    };
}])

.controller('userEdit', ['$stateParams', 'User', '$scope', function($stateParams, User, $scope) {
    $scope.type = 'edit';

    User.get($stateParams.userID)
        .then(function(data) {
            $scope.userData = data;
        });

    $scope.saveUser = function() {
        $scope.processing = true;
        $scope.message = '';

        User.update($stateParams.userID, $scope.userData)
            .then(function(data) {
                $scope.processing = false;
                $scope.userData = {};
                $scope.message = data.message;
            });
    };
}])

;
