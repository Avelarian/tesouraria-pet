from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Petiano, Tutor, Evento, HistoricoPetiano, HistoricoEvento, Caixinha, Cofre, ContaBancaria
from rest_framework import viewsets
from tesouraria_pet_be.api.serializers import PetianoSerializer, TutorSerializer, EventoSerializer, HistoricoPetianosSerializer, HistoricoEventosSerializer, CaixinhaSerializer, CofreSerializer, ContaBancariaSerializer

# Create your views here.

class PetianoViewSet(viewsets.ModelViewSet):

    queryset = Petiano.objects.all()
    serializer_class = PetianoSerializer

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
