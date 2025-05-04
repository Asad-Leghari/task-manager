from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView


# Create your views here.

class Register(CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        user = User.objects.filter(username=request.data.get('username'))
        s = UserSerializer(user.first())
        data = {
            "user": s.data,
            "access": str(AccessToken.for_user(user.first())),
            "refresh": str(RefreshToken.for_user(user.first()))
        }
        return Response(data)
    
class Login(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code != status.HTTP_200_OK:
            return response
        
        try:
            user = User.objects.get(username=request.data.get('username'))
            s = UserSerializer(user)
            data = response.data
            data['user'] = s.data
            return Response(data, status=response.status_code)
        except User.DoesNotExist:
            return Response({'detail': 'User not found after login'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    