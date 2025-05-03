from django.urls import path
from .views import (
    ListTasks, DetailTasks
)

urlpatterns = [
    path('list-tasks/', ListTasks.as_view(), name="list-tasks"),
    path('detail-tasks/<pk>/', DetailTasks.as_view(), name="detail-tasks")
]