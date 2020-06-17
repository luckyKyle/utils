/**
 * 将指定网址加入收藏夹
 *
 * @export
 * @param {String} url 网址
 * @param {String} title 网址title
 */
export function addFavorite(url, title) {
  try {
    window.external.addFavorite(url, title)
  } catch (e) {
    try {
      window.sidebar.addPanel(title, url, '')
    } catch (e) {
      alert('加入收藏失败，请使用Ctrl+D进行添加')
    }
  }
}
