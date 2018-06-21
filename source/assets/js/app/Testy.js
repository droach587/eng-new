class Testy {
  constructor() {}
  testFunc() {
    console.log('testFunc');
  }
  _privateFunction(){
    // I'm private cause of the underscore
  }
}
export { Testy as default };
