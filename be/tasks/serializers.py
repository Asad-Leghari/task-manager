from rest_framework import serializers
from authentication.serializers import UserSerializer
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    class Meta:
        fields = "__all__"
        model = Task