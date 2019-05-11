"""tesouraria_pet_be URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from tesouraria_pet_be.api import views
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import verify_jwt_token

router = routers.DefaultRouter()
router.register('petianos', views.PetianoViewSet)
router.register('tutores', views.TutorViewSet)
router.register('eventos', views.EventoViewSet)
router.register('historicoPetianos', views.HistoricoPetianosViewSet)
router.register('historicoEventos', views.HistoricoEventosViewSet)
router.register('caixinha', views.CaixinhaViewSet)
router.register('cofre', views.CofreViewSet)
router.register('contabancaria', views.ContaBancariaViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-verify/', verify_jwt_token),
]