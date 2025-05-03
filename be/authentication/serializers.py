from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        fields = ['first_name', 'last_name', "username", "password"]
        model = User
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)