var BASE_URL = 'http://localhost:8000';
var URLIST = {
  user_login: BASE_URL + '/admin/login',
  user_logout: BASE_URL + '/admin/logout',
  user_info: BASE_URL + '/admin/getuser',
  // 文章类别
  // 显示类别
  category_show: BASE_URL + '/admin/category_search',
  category_add: BASE_URL + '/admin/category_add',
  category_delete: BASE_URL + '/admin/category_delete',
  category_edit: BASE_URL + '/admin/category_edit',
  
  // 文章类别
  article_show:BASE_URL+'/admin/search',
  article_add:BASE_URL+'/admin/article_publish',
  article_del:BASE_URL+'/admin/article_delete',
  article_edit:BASE_URL+'/admin/article_edit'
};
