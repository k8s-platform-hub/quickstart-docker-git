package main

import (
	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
)

// Hello response structure
type Hello struct {
	Message string
}

func main() {
	app := iris.New()

	app.Adapt(
		iris.DevLogger(),
		httprouter.New(),
	)

	app.Get("/", index)

	app.Listen(":8080")
}

func index(ctx *iris.Context) {
	m := Hello{"Welcome to Hasura"}
	ctx.JSON(iris.StatusOK, m)
}
