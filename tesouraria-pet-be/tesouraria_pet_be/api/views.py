from .models import User, Petiano, Tutor, Evento, HistoricoPetiano, HistoricoEvento, Caixinha, Cofre, ContaBancaria
from rest_framework import viewsets,  status
from tesouraria_pet_be.api.serializers import RegisterUserSerializer, UserSerializer, PetianoSerializer, TutorSerializer, EventoSerializer, HistoricoPetianosSerializer, HistoricoEventosSerializer, CaixinhaSerializer, CofreSerializer, ContaBancariaSerializer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework import generics

# Create your views here.


class PetianoViewSet(viewsets.ModelViewSet):

    queryset = Petiano.objects.all()
    serializer_class = PetianoSerializer

    class Meta:
        model = Petiano


class CreateUserView(CreateAPIView):
    permission_classes = (AllowAny,)
    model = get_user_model()
    authentication_classes = []
    serializer_class = RegisterUserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TutorViewSet(viewsets.ModelViewSet):

    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer

class EventoViewSet(viewsets.ModelViewSet):

    queryset = Evento.objects.all()
    serializer_class = EventoSerializer


class HistoricoPetianosViewSet(viewsets.ModelViewSet):

    queryset = HistoricoPetiano.objects.all()
    serializer_class = HistoricoPetianosSerializer

class HistoricoEventosViewSet(viewsets.ModelViewSet):

    queryset = HistoricoEvento.objects.all()
    serializer_class = HistoricoEventosSerializer

class CaixinhaViewSet(viewsets.ModelViewSet):

    queryset = Caixinha.objects.all()
    serializer_class = CaixinhaSerializer

class CofreViewSet(viewsets.ModelViewSet):

    queryset = Cofre.objects.all()
    serializer_class = CofreSerializer

class ContaBancariaViewSet(viewsets.ModelViewSet):

    queryset = ContaBancaria.objects.all()
    serializer_class = ContaBancariaSerializer


class get_aHistoricoViewSet(generics.ListAPIView):
    serializer_class = HistoricoPetianosSerializer

    def get_queryset(self):
        petiano = self.kwargs['petiano']
        return HistoricoPetiano.objects.filter(petiano=petiano)


class ThePetiano(generics.ListAPIView):
    serializer_class = PetianoSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Petiano.objects.filter(user=user)
