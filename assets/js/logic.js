
      console.log('logic run');

     function filter_guardian(data) {
      var guardian_array = [];
      data.response['results'].forEach(function(task) {
        guardian_array.push(task.fields);
        })

        //console.log(typeof(guardian_array));
        return guardian_array;

}
    //parse twiter
      function filter_twitter(data) {
        //var twitter_con = document.getElementById("twitter_con");
        arr_result = data.href;
        var ids = [];
        for (var i = 0; i < arr_result.length; i += 1) {
          ids.push("<div>" + (arr_result[i].replace(/\\/g, '')) + "</div>");
        }
        s = "";
        for (var i = 0; i < 10; i++) {
          s = s.concat(ids[i]);
        }

        return s;
      }
