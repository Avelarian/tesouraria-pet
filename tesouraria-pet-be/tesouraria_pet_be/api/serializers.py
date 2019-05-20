from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Petiano, Tutor, Evento, HistoricoPetiano, HistoricoEvento, Caixinha, Cofre, ContaBancaria
from django.contrib.auth import get_user_model


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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class RegisterUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = get_user_model().objects.create(
            username = validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.is_active = False
        user.save()
        return user

    class Meta:
        model = get_user_model()
        fields = '__all__'
