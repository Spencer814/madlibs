angular
    .module('madlibs')
    .controller('MainController', MainController);

function MainController($scope) {
    var vm = this;

    // declare data variables
    vm.adjective_one;
    vm.noun_one;
    vm.pnoun;
    vm.name;
    vm.adjective_two;
    vm.clothing;
    vm.noun_two;
    vm.city;
    vm.pnountwo;
    vm.adjective_three;
    vm.partone;
    vm.letter;
    vm.lifestyle;
    vm.adjective_four;
    vm.location;
    vm.parttwo;
    vm.adjective_five;
    vm.animal;
    vm.adjective_six;
    vm.verb;
    vm.pnounthree;
    vm.number;

    vm.genders = [{
      Id: 1,
      Descr: 'Male',
      Fam: 'Uncle',
      Pro: 'he',
      Role: 'goddesses'
    }, {
      Id: 2,
      Descr: 'Female',
      Fam: 'Aunt',
      Pro: 'she',
      Role: 'gods'
    }];

    vm.user = {};
    vm.user.FormData = {};
    vm.user.Gender = vm.genders[1];
    vm.hide = false;

    // bind functions
    vm.generate = generate;
    vm.reset = reset;

    // functions
    function generate () {
        if ($scope.myForm.$submitted && $scope.myForm.$valid && !($scope.myForm.$pristine)) {
            vm.hide = true;
            return true;
        }
    }

    function reset() {
        vm.hide = false;
        vm.submitted = false;
        vm.info = {};
        vm.myForm.$setPristine();
    }


}
