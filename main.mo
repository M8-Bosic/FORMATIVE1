
actor {
  public query func greet(name : Text,phone : Text) : async Text {
    return "Hello, " # name # " and my location is:" # phone # "!";
  };
};