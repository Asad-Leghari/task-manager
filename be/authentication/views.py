from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from rest_framework.response import Response

# Create your views here.

class Register(CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        user = User.objects.filter(username=request.data.get('username'))
        data = {
            "access": str(AccessToken.for_user(user.first())),
            "refresh": str(RefreshToken.for_user(user.first()))
        }
        return Response(data)
    