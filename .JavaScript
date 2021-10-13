var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BNDU1OGRjM2YtZDdmYS00Njc1LWI5OTItMDA5MDEwMjM3MWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
  "https://i.pinimg.com/originals/db/ae/68/dbae68c1c9e1314d8b30bef668c6fd69.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/91/15/13/20132048.jpg",
  "https://vortexcultural.com.br/images/2017/12/a-vida-de-brian.jpg",
  "https://2.bp.blogspot.com/-DlYJTCF_vzI/VytTyQX26JI/AAAAAAAAXgE/SLreJ_eFROUQ4pagUGhSSJXA-Sya9mRCACLcB/s1600/o%2Bclube%2Bdos%2Bcinco.jpg",
  "https://m.media-amazon.com/images/I/61Jfsrh9WmL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51YM2AF5PRL.jpg",
  "https://m.media-amazon.com/images/I/71IrRUfFLaL._AC_SY500_.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/9/96/Tekken_5_capa.png",
  "https://store-images.s-microsoft.com/image/apps.17295.13510798887515946.2617407e-c07a-473a-90e9-826e4255a1d4.50da9250-f2d4-4e0a-9a8f-effb9e9878c2",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShepjuhb-QfoNV2EICGz0Xy-rB-3L0_MlhqKJJe7XznXFg7FtTQSMfQSZvBPm9ksw-9xo&usqp=CAU",
  "https://m.media-amazon.com/images/I/91iovXBx-yL._AC_SY550_.jpg",
  "https://notadogame.com/uploads/game/cover/250x/5bfdc387f11f0.jpg",
  "https://cdn.cdkeys.com/500x706/media/catalog/product/b/u/bully_scholarship_edition_pc.jpg"
];

function addTudo() {
  let tudo = document.querySelector(".input").value;
  listaFilmes.push(tudo);
  document.body.innerHTML += `<img src=${tudo} class="tudo">`;
}

for (var i = 0; i < listaFilmes.length; i++) {
  document.body.innerHTML += `<img src=${listaFilmes[i]} class="tudo">`;
}
