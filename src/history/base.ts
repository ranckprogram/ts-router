interface Route {

}


class History{
  name: string
  route: boolean
  constructor(name){
    this.name = name;
  }
  getName ():string {
    return this.name
  }
}


export default History;