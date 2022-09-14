package controller

import (
	"backend/model"
	"backend/store"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// func Demo(c *gin.Context) {
// 	c.JSON(http.StatusOK, gin.H{
// 		"data": "Hey",
// 	})
// 	// c.String(http.StatusOK, "heyeyyef")
// }

// func Demo2(c *gin.Context) {
// 	var v = c.Param("text")
// 	c.JSON(http.StatusOK, gin.H{
// 		"value": v,
// 	})
// }

// func Demo3(c *gin.Context) {

// 	var data model.Data

// 	err := c.ShouldBind(&data)
// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{
// 			"value": "error",
// 		})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{
// 		"value": data,
// 	})
// }

func GetTasks(c *gin.Context) {
	store.GetAllTasks(c)
}

func Createtask(c *gin.Context) {
	var inp model.Input
	if err := c.ShouldBindJSON(&inp); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error in binding the record"})
		return
	}

	inp.CreatedAt = time.Now()
	inp.IsComplete = false

	store.CreateTask(c, inp)
}

func GetTaskById(c *gin.Context) {
	id := c.Param("id")

	Id, err := strconv.Atoi(id)
	if err != nil {
		fmt.Println("Error while conversion")
		return
	}

	if Id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid id!"})
		return
	}

	store.GetTaskById(c, Id)
}

func UpdateTaskById(c *gin.Context) {
	id := c.Param("id")
	Id, err := strconv.Atoi(id)
	if err != nil {
		fmt.Println("Error while conversion")
		return
	}

	if Id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid id!"})
		return
	}

	store.UpdateTaskById(c, Id)
}

func MarkCompleteById(c *gin.Context) {
	id := c.Param("id")

	Id, err := strconv.Atoi(id)
	if err != nil {
		fmt.Println("Error while conversion")
		return
	}

	if Id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid id!"})
		return
	}

	store.MarkComplete(c, Id)
}
func DeleteTaskById(c *gin.Context) {
	id := c.Param("id")

	Id, err := strconv.Atoi(id)
	if err != nil {
		fmt.Println("Error while conversion")
		return
	}

	if Id <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid id!"})
		return
	}

	store.DeleteTaskById(c, Id)
}
