class Pokemon {
  constructor(data){
    this.id = data.id;
    this.name = data.name;
    this.sprites = data.sprites.front_default;
    this.type = data.types[0].type.name;
    this.order = data.order
  }
}

export default Pokemon;
