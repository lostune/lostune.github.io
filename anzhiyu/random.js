var posts=["2024/09/14/秋招经历/","2024/09/04/常用数学公式/","2024/08/29/Hello-World/","2024/09/19/大学几年微信好友和邮箱的内容/","2024/10/24/摘抄/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };