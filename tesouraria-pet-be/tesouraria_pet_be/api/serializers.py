from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Petiano, Tutor, Evento, HistoricoPetiano, HistoricoEvento, Caixinha, Cofre, ContaBancaria

class PetianoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Petiano
        fields = '__all__'

class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = '__all__'

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = '__all__'

class HistoricoPetianosSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoricoPetiano
        fields = '__all__'

class HistoricoEventosSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoricoEvento
        fields = '__all__'

class CaixinhaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caixinha
        fields = '__all__'

class CofreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cofre
        fields = '__all__'

class ContaBancariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContaBancaria
        fields = '__all__'