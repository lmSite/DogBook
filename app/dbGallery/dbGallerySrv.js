
app.factory("dbGallerySrv", function ($sce,$http, $log, $q) {
   //localStorage.clear();
    var arr = [];
    
    function Breed(bname,bImgUrl){
        this.bname = bname;
        this.bImgUrl = bImgUrl;
      }
      
      function createNew(bname,bImgUrl) {
        
        return new Breed(bname,bImgUrl);
    }

    function addNew(breed) {
        arr.push(breed);
       return arr; 
    }
   
    function getAll(apihUrl) {
        var async = $q.defer();
    
           //var apihUrl = "https://dog.ceo/api/breeds/list";
          
            $http.get(apihUrl).then(function (response) {
               arr = response.data.message;
             
                async.resolve( arr);

            }, function (error) {
                console.error(error);
                async.reject(arr);
            });
         
        return async.promise;
    }
  
    function getByBreed(breed) {
        return breed;
      } 


    return {
        createNew : createNew ,
        addNew : addNew ,
        getAll: getAll ,
        getByBreed:getByBreed
    }

});