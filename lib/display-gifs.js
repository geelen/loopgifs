export default (urls) => {
  var elem = document.querySelector('#gifs')
  elem.innerHTML = urls.map(url => `<img src="${url}">`).join("\n")
}
