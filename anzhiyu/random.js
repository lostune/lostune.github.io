var posts=["2024/08/29/Hello-World/","2024/09/04/常用数学公式/","2024/09/14/秋招经历/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };