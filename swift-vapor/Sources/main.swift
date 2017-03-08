import Vapor

let drop = Droplet()

drop.get("/") { _ in
  return "Hello World"
}

drop.get("/hello") { _ in 
  return "Aww, Hello to you also"
}

drop.run()

