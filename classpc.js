class Pet {
  constructor(friend) {
    this.friend = friend;
  }
  set friend(item) {
    if (item === "") {
      this._friend = "Parrot";
      return;
    }
    this._friend = item;
  }
  get friend() {
    return this._friend;
  }
}

const birb = new Pet("Frog")
console.log(birb);

