package store

import (
	"backend/connection"
	"backend/model"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateTask(c *gin.Context, input model.Input) {
	res := connection.DB.Table("app_data").Select("title", "description", "is_complete", "created_at").Create(&input)
	if res.Error != nil {
		fmt.Println("Error while appending the record")
		return
	}
	c.JSON(http.StatusOK, "Data added successfully")
}

func GetAllTasks(c *gin.Context) {
	var tasks []model.Input
	res := connection.DB.Table("app_data").Find(&tasks)
	if res.Error != nil {
		fmt.Println("Error while fetching the records")
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": tasks})

}

func GetTaskById(c *gin.Context, id int) {
	var task model.Input

	res := connection.DB.Table("app_data").Where("id = ?", id).First(&task)
	if res.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error while fetching the record"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": task})
}

func UpdateTaskById(c *gin.Context, id int) {
	var task model.Input

	res := connection.DB.Table("app_data").Where("id = ?", id).First(&task)
	if res.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error while fetching the record"})
		return
	}

	var updatedInput model.Input
	if err := c.ShouldBindJSON(&updatedInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error in binding the record"})
		return
	}

	res2 := connection.DB.Table("app_data").Where("id = ?", id).Model(&task).Updates(updatedInput)
	if res2.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error while updating the record"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": updatedInput})
}

func MarkComplete(c *gin.Context, id int) {
	var task model.Input
	res := connection.DB.Table("app_data").Where("id = ?", id).First(&task)
	if res.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error while fetching the record"})
		return
	}

	res2 := connection.DB.Table("app_data").Where("id = ?", id).Model(&task).Update("is_complete", true)
	if res2.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error while updating the record"})
		return
	}
}

func DeleteTaskById(c *gin.Context, id int) {
	var task model.Input

	res := connection.DB.Table("app_data").Where("id = ?", id).First(&task)
	if res.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error while fetching the record"})
		return
	}

	res2 := connection.DB.Table("app_data").Where("id = ?", id).Delete(&task)
	if res2.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error while deleting the record"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"deleted": task})
}
