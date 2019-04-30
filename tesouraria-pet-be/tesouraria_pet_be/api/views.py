from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Petiano, Tutor, Evento
from rest_framework import viewsets
from tesouraria_pet_be.api.serializers import PetianoSerializer, TutorSerializer, EventoSerializer

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
