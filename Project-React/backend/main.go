package main

import (
	"backend/connection"
	"backend/controller"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	connection.Init()
	r.GET("/tasks", controller.GetTasks)
	r.GET("/task/:id", controller.GetTaskById)
	r.POST("/task", controller.Createtask)
	r.PATCH("/task/:id", controller.UpdateTaskById)
	r.PATCH("/completetask/:id", controller.MarkCompleteById)
	r.DELETE("/task/:id", controller.DeleteTaskById)

	// r.GET("/:text", controller.Demo2)
	r.Run("localhost:8080")
}
