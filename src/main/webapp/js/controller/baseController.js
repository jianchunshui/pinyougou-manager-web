app.controller('baseController',function($scope){
	$scope.paginationConf={
			currentPage:1, //当前页
			totalItems:10, //总记录数
			itemsPerPage:10,//每页记录数
			perPageOptions:[10,20,30,40,50],//分页选项
			onChange:function(){ //当页面触发后自动触发的方法   首次加载时也会触发
				$scope.reloadList();
			}
		};
		
		$scope.reloadList=function(){
			$scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
		}
		
		
		$scope.selectIds=[]; //用户勾选的ID集合
		//用户勾选复选框
		$scope.updateSelection = function($event,id){
			if($event.target.checked){
				$scope.selectIds.push(id);
			}else{
				var index = $scope.selectIds.indexOf(id);//查找值得位置
				$scope.selectIds.splice(index,1);  //移除的位置：index ,移除的个数：1    				}
			}
		}
		
		$scope.jsonToString=function(jsonString,key){
			var json = JSON.parse(jsonString);	
			var value="";
			for(var i=0;i<json.length;i++){
				if(i>0){
					value+=",";
				}
				value +=json[i][key];
			}
			return value;
		}
		
		
});