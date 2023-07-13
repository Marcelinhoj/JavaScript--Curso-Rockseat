// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this,root = document.querySelector(root)
  }
}


// classe que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    (this.root)
  }

  update () {
   this.removeAllTr()
  }

  revoveAllTr() {
    const tbody = this.root.querySelector
    ('table tbody')

    tbody.querySelector('tr')
    .forEach((tr) => {
      tr.remove()
    })
  }
}