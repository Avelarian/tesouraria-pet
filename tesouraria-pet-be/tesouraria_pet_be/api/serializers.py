from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Petiano, Tutor, Evento

class PetianoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Petiano
        fields = ('id', 'name', 'email', 'mNumber', 'dt_entryCourse',
         'dt_leavingCourse', 'cpfNumber', 'rgNumber', 'telFix', 'celNumber', 
         'address', 'dt_entryPet', 'dt_leavePet', 'functionPet', 'active')

class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = ('id', 'name', 'email', 'cpfNumber', 'rgNumber', 'telFix', 'celNumber', 
         'address', 'dt_entryPet', 'dt_leavePet', 'functionPet', 'active')

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = ('id', 'name', 'edition', 'dt_start', 'dt_finish', 'typePet', 'cashier', 
         'active')