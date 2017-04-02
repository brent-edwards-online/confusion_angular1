'use strict';

angular.module('confusionApp')
        .constant("baseurl","http://localhost:3000/")

        .service('feedbackService', ['$resource', 'baseurl', function($resource,baseurl) {

                /*
                this.getFeedback = function(){                    
                    return $resource(baseurl+"feedback/:id",null,{'save':{method:'POST'}});
                };
                */
                this.getFeedback = function(){                    
                    //return $resource(baseurl+"feedback/:id",null,{'save':{method:'POST'}});
                    return $resource('data/feedback.json',{},{'save':{method:'POST'}});
                };                                 
        }])

        .service('menuFactory', ['$http','$resource', 'baseurl', function($http,$resource,baseurl) {

                this.getFavouriteDish = function()
                {
                    return $http.get('data/dishes.json');
                };

                this.getDishes = function(){                    
                    //return $resource(baseurl+"dishes/:id",null,{'update':{method:'PUT'}});
                    return $resource('data/dishes.json',null,{'update':{method:'PUT'}});
                };

                this.getPromo = function()
                {
                    return $http.get('data/promotions.json');
                };
                           
                this.getPromotion = function () {
                    //return $resource(baseurl+"promotions/:id",null,{'update':{method:'PUT'}});
                    return $resource('data/promotions.json',null,{'update':{method:'PUT'}});
                };
                        
        }])

        .factory('corporateFactory', ['$http','$resource', 'baseurl', function($http,$resource,baseurl) {
    
            var corpfac = {};
            
            corpfac.getAllLeaders = function() {
                return $http.get('data/leadership.json');
            };
            
            corpfac.getLeaders = function() {
                //return $resource(baseurl+"leadership/:id",null,{'update':{method:'PUT'}});
                return $resource('data/leadership.json',{},{'update':{method:'PUT'}});
            };
        
            return corpfac;
        }])

;
